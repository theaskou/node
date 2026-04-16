import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.SESSION_SECRET);

import express from 'express';

const app = express();

import { rateLimit } from 'express-rate-limit';

const generalLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
	// store: ... , // Redis, Memcached, etc. See below.
})

import helmet from "helmet"; // it's not a silver bullit, but it helps
app.use(helmet()); // forstå hvorfor den skal kaldes med det samme. det er en function der indeholder req, res, next som parametre.

import session from 'express-session';

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // hvorfor false?
}))

// Apply the rate limiting middleware to all requests.
app.use(generalLimiter);

import middlewareRouter from './routers/middlewareRouter.js';
app.use(middlewareRouter);

import authRouter from './routers/authRouter.js';
app.use(authRouter);

import router from './routers/sessionRouter.js';
app.use(router)


// /{*splat} is the new syntax in Express 5.x, before it was just /*
app.get('/{*splat}', (req, res) => {
        res.send(`<div>
                <h1>404</h1>
                <h3>Page - ${req.path} - doesn't exist</h3>
            </div>`
    );
})

// .all = "for alle http metoder"
app.all('/{*splat}', () => {
    res.send({ errorMessage: "The route does not exist" });
})




//Nullish coalescing - virker på null og undefined
const PORT = process.env.PORT ?? 8080; // læs op på det, process eksisterer i node
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
}); // asynkronisitet at gøre det med server.adress().port - der er ikke behov for at gøre det