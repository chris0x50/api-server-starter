const debug = require('debug')('server');
const express = require('express');
const http = require('http');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// Routes
const index = require('./server/routes/root');
const auth = require('./server/routes/auth');

// Configure Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configure Routes
app.use('/api/', index);
app.use('/api/auth', auth);

// Start Server
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
debug(`Server listening on: ${port}`);
debug(`Open your web browser to http://localhost:${port}/api`);
module.exports = app;
