import connectToMongo from "./connectToMongo.js";
import express from "express";
import cors from "cors";
import * as dotenv from 'dotenv';
dotenv.config();

//Routes Import
import authRoute from "./routes/auth.js"
import notesRoute from "./routes/notes.js"

//Connection to Mongo DataBase
connectToMongo();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

//Middleware to use (req,res) in json
app.use(express.json());

//Available Routes
app.use("/api/auth", authRoute)
app.use("/api/notes", notesRoute)

app.listen(port, () => {
    console.log(`TakeNote-App listening on port http://localhost:${port}`)
})