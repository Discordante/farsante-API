require('dotenv').config()
const express = require('express');

const createError = require('http-errors');
const app = express();
const cors = require('cors')

/* Middlewares */

app.use(express.json());
app.use(cors())

/* Routes */



/* Handle Errors */

app.use((req, res, next) => {
  next(createError(404, 'Route not found'));
});

/*Listen Port*/

const port = Number(process.env.PORT || 3000);

app.listen(port, () => {
  console.log(`Ready! Listen on port ${port}`);
})