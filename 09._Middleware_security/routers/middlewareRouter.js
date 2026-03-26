import { Router } from 'express';

const router = Router();

// Middleware function:
function butler(req, res, next) {
    console.log('Welcome to the mansion..');
    next();
}

function takeCoat(req, res, next) {
    req.coatOff = true;
    next();
}

function ipLogger(req, res, next) {
    console.log(req.ip);
    next();
}

router.use('/room', ipLogger); // middleware til... express?? 
// smart, så man ikke skal sættee ipLogger på hver enkelt route.
// matcher kun på routes der hedder noget med /room

// isAuthenticated
// middleware har mange betydninger. I dette tilfælde er det express middleware vi taler om

// rækkefølgen er vigtig. Forestil jer en kæmpe switch case
router.get('/room', butler, takeCoat, (req, res, next) => {
    // res.send({ data: 'Welcome to room 1'});
    console.log('you are in room 1', req.coatOff);
    next(); // går til næste match
});

router.get('/room', (req, res, next) => {
    console.log('This is the inline middleware');
    next();
    res.send({ data: 'Welcome to room 2'});
});



export default router;