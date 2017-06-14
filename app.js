const debug = require('debug')('server');
const express = require('express');
const http = require('http');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// Configure Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Start Server
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
debug(`Server listening on: ${port}`);

module.exports = app;
