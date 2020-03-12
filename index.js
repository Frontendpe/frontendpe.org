const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);

app.use(bodyParser);
app.get('/', function(req, res) {
    res.redirect('https://www.facebook.com/groups/frontendpe');
});

app.get('/streaming', function(req, res) {
    res.send('Vuelve pronto')
});

module.exports.handler = serverless(app);