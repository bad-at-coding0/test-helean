const express = require('express');
const app = express();
const port = 4000;
const data = require('./data.js')

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello !');
});

app.get('/getAffluence', (req, res) => {
    res.send(data);
});