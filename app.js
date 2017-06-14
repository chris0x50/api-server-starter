const debug = require('debug')('server');
const express = require('express');
const http = require('http');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// Routes
const index = require('./server/routes/root');

// Configure Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configure Routes
app.use('/api/', index);

// Start Server
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
debug(`Server listening on: ${port}`);
debug(`Open your web broswer to http://localhost:${port}/api`);
module.exports = app;
