import express from 'express';

const app = express();

app.use(express.json()); // body parsing

import recipesRouter from './routers/recipeRouter.js';
app.use(recipesRouter);

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));