import express from 'express';
const app = express();

app.use(express.static("public"))

app.use(express.json());

app.use(express.urlencoded());

// ================== Pages ==================

import pagesRouter from './routers/pagesRouter.js';

app.use(pagesRouter);

// ================== API ==================

import replRouter from './routers/replRouter.js';

app.use(replRouter);


// i nix terminal: PORT=9090 node app.js <- man kan tilgå miljøvariabler via node
// Vi skal til eksamen vide hvordan man laver miljøvariabler i native node: NODE_ENV=DEV - dotenv er et bibliotek, det er ikke native node

// Short circuit syntax
const PORT = process.env.PORT || 8080; // lav en variabel for at undgå at gentage 8080 nedenunder
const server = app.listen(PORT, () => {
    console.log(`Server started on port`, server.address().port); // asynkron call back der kører efter server er oprettet - mest truthful måde at skrive port
});