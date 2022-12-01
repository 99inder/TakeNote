import express from "express";

const router = express.Router();

router.get('/', (req,res) => {
    res.send("<h1>This is Auth Route</h1>");
    console.log(req.body);
})

export default router;