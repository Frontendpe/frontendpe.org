const express = require('express');
const http = require("http");

const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);

app.get('/', function(req, res) {
    res.redirect('https://www.facebook.com/groups/frontendpe');
});

app.get('/streaming', function(req, res) {
    res.send('Vuelve pronto')
});

app.listen(port);