import express from "express";
import fetchuser from "../middleware/fetchuser.js";
import { body, validationResult } from 'express-validator';     //import for express validator
import Note from "../models/Note.js";

const router = express.Router();

//Route 1: POST: '/api/notes/addnote' Route to create a note (LOGIN REQUIRED)
router.post('/addnote', fetchuser, [
    body('title', "The title field must be atleast 3 characters").isLength({ min: 3 }),
    body('description', 'The description must be atleast 5 characters.').isLength({ min: 5 }),

], async (req, res) => {

    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        //destructuring the req.body object to get "title, description, tag"
        const { title, description, tag } = req.body;

        //Create a new note and save the data to the database on "Notes" collection
        const note = await Note.create({
            title,
            description,
            tag,
            user: req.user.id       //contains the user id of the user retrieved from the from the middleware of the user
        })

        res.send(note);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
});

//Route 2: GET: '/api/notes/fetchallnotes' Route to Fetch All the notes of a user   (LOGIN REQUIRED)
router.get('/fetchallnotes', fetchuser, async (req, res) => {

    try {
        let notes = await Note.find({ user: req.user.id });
        notes.length ? res.json(notes) : res.status(404).send("No Notes found from this user");
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
});

//Route 3: PUT: '/api/notes/updatenote/:id' Route to update an existing note of a user   (LOGIN REQUIRED)
router.put('/updatenote/:id', fetchuser, async (req, res) => {

    try {
        const newnote = {};     //create new note object to update the existing note
        const { title, description, tag } = req.body;     //destructuring the fields to update in note from 'req.body' object

        //add the fields to update to the 'newnote' object
        if (title) { newnote.title = title };
        if (description) { newnote.description = description };
        if (tag) { newnote.tag = tag };

        //Retrieve the note having id served in the PUT request from the database
        const noteFound = await Note.findById(req.params.id);

        //if note is not found, return with status code '404': "Not Found"
        if (!noteFound) { return res.status(404).send("Not Found") };

        //if notes' user id and accessing user id doesn't match, return "Unauthorized Access"
        if (noteFound.user.toString() !== req.user.id) {
            return res.status(401).send("Unauthorized Access.");
        }

        //Finally update the note
        await Note.findByIdAndUpdate(req.params.id, newnote);

        return res.send("Note Updated");

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
});


//Route 3: DELETE: '/api/notes/deletenote/:id' Route to delete an existing note of a user   (LOGIN REQUIRED)
router.delete('/deletenote/:id', fetchuser, async (req, res) => {

    try {

        //Retrieve the note having id served in the PUT request from the database 
        const noteFound = await Note.findById(req.params.id);

        //if note is not found, return with status code '404': "Not Found"
        if (!noteFound) { return res.status(404).send("Not Found") };

        //if notes' user id and accessing user id doesn't match, return "Unauthorized Access"
        if (noteFound.user.toString() != req.user.id) {
            return res.status(401).send("Unauthorized Access.");
        }

        //Finally delete the note
        await Note.findByIdAndDelete(req.params.id);

        return res.send("Note Deleted");

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
});

export default router;