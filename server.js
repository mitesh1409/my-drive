import express from 'express';

import { homeController } from './controllers/home.controller.js';
import { signupController } from './controllers/signup.controller.js';
import { signinController } from './controllers/signin.controller.js';
import { userRouter } from './routes/user.router.js';

const PORT = 3000;
const HOSTNAME = '127.0.0.1';

const app = express();

app.set('view engine', 'ejs');

app.get('/', homeController);
app.get('/home', homeController);
app.get('/sign-up', signupController);
app.get('/sign-in', signinController);

app.use('/users', userRouter);

app.listen(PORT, HOSTNAME, () => console.log(`Server up and running at http://${HOSTNAME}:${PORT}`));
