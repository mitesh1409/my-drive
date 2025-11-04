import express from 'express';

const PORT = 3000;
const HOSTNAME = '127.0.0.1';

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(PORT, HOSTNAME, () => console.log(`Server up and running at http://${HOSTNAME}:${PORT}`));
