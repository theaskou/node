import { Router } from "express";

const router = Router();

/* 
    Auth: Authentication and Authorization

    Authentication: Knowing that the user is who they say they are
    Authorization: Knowing if the user has privileges to access the resources

*/

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