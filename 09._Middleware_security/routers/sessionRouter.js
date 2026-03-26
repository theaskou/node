import { Router } from 'express';

const router = Router();

router.get('/dogpark/bark', (req, res) => {

    req.session.dogBarks = req.session.dogBarks ? req.session.dogBarks + 1 : 1; // ellers bliver den NaN eller undefined?

    res.send({ data: `dog barked. Total barks: ${req.session.dogBarks}` });
});

function isLoggedIn() {
}

router.get('/dogpark/shutup', (req, res) => {
    const dogBarks = req.session.dogBarks;
    req.session.dogBarks = 0;

    res.send({ data: `No more dogs barking. Dogs being quiet: ${dogBarks}` });

});

// sessions vil aldrig leakes til frontend? 


export default router;