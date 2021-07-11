const express    = require('express');
const Path       = require('path');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const syllableDictionaryRoute = require('./routes/syllable-dictionary.route');
const app                     = express();

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: "Haiku Checker Backend Server API",
      description: "Server side api to count haiku verse syllables.",
      contact: {
        name: "Djidjelly Siclait"
      },
      version: "1.1.1",
      servers: [
        {
          url: process.env.PROD_SERVER,
          description: "Production server"
        },
        {
          url: process.env.DEV_SERVER,
          description: "Development server"
        }
      ]
    },
  },
  apis: ["./backend/routes/*.route.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// middleware used to accept json package request from clients
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(Path.join(__dirname, 'resources')));

// API to manage MongoDB cloud database
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_ATLAS_USERNAME}:${process.env.MONGO_ATLAS_PASSWORD}@cluster0.n2gdd.mongodb.net/${process.env.MONGO_ATLAS_DATABASE}`, {
      poolSize          : 10,
      bufferMaxEntries  : 0,
      reconnectTries    : 5000,
      useNewUrlParser   : true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    console.log('\nConnection established!');
  })
  .catch(error => {
    console.error(`\nERROR: ${error}`);
  });

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
    'GET, POST, OPTIONS');

  // Informs app to continue to the next process
  next();
});

// Setting up all recognized paths for this Swagger UI Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, {explorer: true}));

// Setting up all recognized paths for this REST application
app.use('/api/syllable_dictionary', syllableDictionaryRoute);

module.exports = app;
