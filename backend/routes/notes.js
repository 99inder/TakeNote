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
})

//Route 2: GET: '/api/notes/fetchallnotes' Route to Fetch All the notes of a user   (LOGIN REQUIRED)
router.get('/fetchallnotes', fetchuser, async (req, res) => {

    try {
        let notes = await Note.find({ user: req.user.id });
        notes ? res.json(notes) : res.send("No Notes found from this user");
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})

export default router;