const createError = require('http-errors')
const SpanishCities = require('../models/SpanishCities.model')


module.exports.getRandomCity = (req, res, next) => {
    SpanishCities.aggregate([{ $sample: { size: 1 } }])
    .then(city => res.status(200).json(city))
    .catch(e => next(e))
}

