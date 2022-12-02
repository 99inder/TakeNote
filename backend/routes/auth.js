import express from "express";                                  //express import to create an express app
import { body, validationResult } from 'express-validator';     //import for express validator
import User from "../models/User.js";                           //import for 'user' model that we created

const router = express.Router();

router.post('/create-user', [

    body('name', 'The length of the name must be atleast 3.').isLength({ min: 3 }),
    body('email', 'Please enter a valid email address.').isEmail(),
    body('password', 'Password strength is very low. Must be atleast 5 digits.').isLength({ min: 5 })

], async (req, res) => {

    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        
        //Checking if the user with same email already exists
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "user with this email aready exists!" })
        }

        //Save the data to database after validating that there are no errors
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        res.json(user);

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some Error Occured!");
    }

})

export default router;