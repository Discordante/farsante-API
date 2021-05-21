require('dotenv').config()
const express = require('express');

const mongoose = require('mongoose');
const createError = require('http-errors');
const app = express();
const cors = require('cors')

require('./src/config/db.config')

/* Middlewares */

app.use(express.json());
app.use(cors())

/* Routes */

const routes = require('./src/config/routes.config')
app.use('/', routes)

/* Handle Errors */

app.use((req, res, next) => {
  next(createError(404, 'Route not found'));
});

app.use((error, req, res, next) => {
    if (error instanceof mongoose.Error.ValidationError) error = createError(400, error)
    else if (error instanceof mongoose.Error.CastError) error = createError(404, 'Resource not found')
    else if (error.message.includes('E11000')) error = createError(400, 'Already exists')
    else if (!error.status) error = createError(500, error)
  
    if (error.status >= 500) {
      console.error(error);
    }
  
    const data = {}
    data.message = error.message;
    data.errors = error.errors ? 
      Object.keys(error.errors)
        .reduce((errors, key) => ({ ...errors, [key]: error.errors[key].message || error.errors[key] }), {}) :
      undefined;
  
    res.status(error.status).json(data)
  });



  module.exports = app