import 'dotenv/config';

import express from 'express';

const app = express();



app.use(express.static('../client/dist'));

import cors from 'cors';

app.use(cors({
  origin: "http://localhost:5173/",
}));

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
//     res.header("Access-Control-Allow-Credentials", "true");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

import session from 'express';

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}))

import restaurantRouter from './routers/restaurantRouter.js';
app.use(restaurantRouter);

import visitorsRouter from './routers/visitorsRouter.js'
app.use(visitorsRouter);

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => console.log(`app is running on port: ${PORT}`));