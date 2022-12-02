// const mongoose = require("mongoose");
import mongoose from "mongoose";

const mongoURI = 'mongodb://localhost:27017/notes-app';

const connectToMongo = async() => {
    await mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!")
}

export default connectToMongo;