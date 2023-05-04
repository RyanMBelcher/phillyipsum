const express = require('express');
const app = express();

const routes = require('./router');

const path = '127.0.0.1';
const port = 3003;

app.use(express.static('public'));

app.use(routes);

app.listen(port, () => {
    console.log(`Server is listening at http://${path}:${port}`);
});