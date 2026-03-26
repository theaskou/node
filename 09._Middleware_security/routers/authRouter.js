import { Router } from "express";

const router = Router();

function isAdmin(req, res, next) {
    // simulate getting the value from DB
    // and/or comparing tokens / sessions
    const isAdmin = true;
    if (isAdmin) {
        req.user = {
            isAdmin,
            username: 'Bob'
        };
        return next();
    }
    res.status(403).send({ errorMessage: 'you are not an admin' })
}

router.get('/auth/admin', (req, res) => {
    console.log(req.user);
    res.send({ data: 'Secret admin information'});

})


export default router;