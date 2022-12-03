import connectToMongo from "./connectToMongo.js";
import express from "express";

//Routes Import
import authRoute from "./routes/auth.js"
import notesRoute from "./routes/notes.js"

//Connection to Mongo DataBase
connectToMongo();

const app = express();
const port = 5000;

//Middleware to use (req,res) in json
app.use(express.json());

//Available Routes
app.use("/api/auth", authRoute)
app.use("/api/notes", notesRoute)

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})