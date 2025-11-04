import express from 'express';

import * as StaticController from './controllers/static.controller.js';

const PORT = 3000;
const HOSTNAME = '127.0.0.1';

const app = express();

app.set('view engine', 'ejs');

app.get('/', StaticController.home);
app.get('/home', StaticController.home);

app.listen(PORT, HOSTNAME, () => console.log(`Server up and running at http://${HOSTNAME}:${PORT}`));
