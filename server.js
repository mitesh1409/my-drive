import express from 'express';
import 'dotenv/config'; // Loads environment variables from .env file.

import { homeController } from './controllers/home.controller.js';
import { signupController } from './controllers/signup.controller.js';
import * as SigninController from './controllers/signin.controller.js';
import { userRouter } from './routes/user.router.js';
import { requestLogger } from './middlewares/requestLogger.js';
import { connectDB } from './config/db.js';
import { body } from 'express-validator';

const PORT = 3000;
const HOSTNAME = '127.0.0.1';

const app = express();

connectDB();

app.set('view engine', 'ejs');

// Set common middlewares.
// Logs request data.
app.use(requestLogger);
// Serves static assets such as HTML files, images, and so on from the public directory.
app.use(express.static('public'));
// Parses incoming requests with JSON payloads.
app.use(express.json());
// Parses incoming requests with URL-encoded payloads, this is required to handle form request data.
app.use(express.urlencoded({extended: true}));

app.get('/', homeController);
app.get('/home', homeController);
app.get('/sign-up', signupController);
app.get('/sign-in', SigninController.displaySignin);
app.post(
    '/sign-in',
    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Email is invalid'),
    body('password')
        .trim()
        .notEmpty().withMessage('Password is required')
        .isLength({min: 8, max: 20}).withMessage('Password must be 8 to 20 characters long'),
    SigninController.doSignin
);

app.use('/users', userRouter);

app.listen(PORT, HOSTNAME, () => console.log(`Server up and running at http://${HOSTNAME}:${PORT}`));
