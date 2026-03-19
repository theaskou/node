import { Router } from 'express';

import { frontpagePage, aboutPage, contactPage } from '';

const pagesRouter = Router();


pagesRouter.get('/', (req, res) => {
    res.send(frontpage);
});

pagesRouter.get('/about', (req, res) => {
    res.sendFile(path.resolve('public/pages/about/about.html'));
});


export default pagesRouter;