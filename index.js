const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}!`);
});

module.exports = app;
