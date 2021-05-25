const createError = require('http-errors')
const SpanishCities = require('../models/SpanishCities.model')
const Municipality = require('../models/Municipality.model')


module.exports.getRandomCity = (req, res, next) => {
    SpanishCities.aggregate([{ $sample: { size: 1 } }])
    .then(city => res.status(200).json(city))
    .catch(e => next(e))
}

module.exports.getRandomMunicipality = (req, res, next) => {
    Municipality.aggregate([{ $sample: { size: 1 } }])
    .then(municipality => res.status(200).json(municipality))
    .catch(e => next(e))
}

