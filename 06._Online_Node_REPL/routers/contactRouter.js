import { Router } from "express";

const router = Router();

app.post('/api/contact', (req, res) => {
    console.log(req.body)
    res.send({ data: req.body})
});


export default router;