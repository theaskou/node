import express from 'express';
import path from 'path';

const app = express();

app.use(express.static('/public'));

// const cookiesUtil = require('./util/commonjsCookiesUtil.js');
// import { esModuleCookieFactory } from './util/esModuleCookiesUtil.js';
// console.log(esModuleCookieFactory());

// destructuring syntax <- læs op på det.

app.get("/", (req, res) => {

    res.sendFile(path.resolve('public/frontpage/frontpage.html'));
});

app.get('/cookieFactory', (req, res) => {
    res.sendFile(path.resolve('public/cookieFactory/cookieFactory.html'));
});

app.get('/redirection', (req, res) => {
    
    res.sendFile(path.resolve('public/redirection/redirection.html'));
});

const port = 8080;
app.listen(port, () => console.log(`Server is running on port ${port}`));

// Man vil gerne import og export på samme måde i front og back da man kan genbruge kode
// fx. validering - det er ens både i frontend og backend