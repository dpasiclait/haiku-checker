const express = require('express');
const bodyParser = require('body-parser');

const syllableDictionaryRoute = require('./routes/syllable-dictionary.route');
const app = express();

// middleware used to accept json package request from clients
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setting up CORS Protocol for incoming client requests
app.use((req, res, next) => {
  // Defines that the server is allowed to respond to any client that sends a request
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Defines which headers are accepted from such clients
  // Notice Authorization is not included since the server does not
  // expect to receive or emit access tokens
  res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
  // Defines which types of requests clients are allowed to send
  res.setHeader('Access-Control-Allow-Methods',
    'GET, OPTIONS');

  // Informs app to continue to the next process
  next();
});

app.use('/api/syllable_dictionary', syllableDictionaryRoute);

module.exports = app;
