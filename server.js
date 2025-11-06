import express from 'express';

import { homeController } from './controllers/home.controller.js';
import { signupController } from './controllers/signup.controller.js';
import { signinController } from './controllers/signin.controller.js';
import { userRouter } from './routes/user.router.js';

const PORT = 3000;
const HOSTNAME = '127.0.0.1';

const app = express();

app.set('view engine', 'ejs');

// Set common middlewares.
// Serves static assets such as HTML files, images, and so on from the public directory.
app.use(express.static('public'));
// Parses incoming requests with JSON payloads.
app.use(express.json());
// Parses incoming requests with URL-encoded payloads, this is required to handle form request data.
app.use(express.urlencoded({extended: true}));

app.get('/', homeController);
app.get('/home', homeController);
app.get('/sign-up', signupController);
app.get('/sign-in', signinController);

app.use('/users', userRouter);

app.listen(PORT, HOSTNAME, () => console.log(`Server up and running at http://${HOSTNAME}:${PORT}`));
