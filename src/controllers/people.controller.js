const createError = require('http-errors')

const Malename = require('../models/MaleName.model')
const Femalename = require('../models/FemaleName.model')
const Lastname = require('../models/LastName.model')

const {randomIntFromInterval} = require('../functions/functions')

module.exports.getRandomName = (req, res, next) => {
  randomIntFromInterval(0,1) ?
  Malename.aggregate([{ $sample: { size: 1 } }])
  .then(name =>  res.status(200).json(name))
  .catch(e => next(e))
  : 
  Femalename.aggregate([{ $sample: { size: 1 } }])
  .then(name => res.status(200).json(name))
  .catch(e => next(e))
}

module.exports.getFemaleName = (req, res, next) => {
  Femalename.aggregate([{ $sample: { size: 1 } }])
  .then(name => res.status(200).json(name))
  .catch(e => next(e))
}


module.exports.getMaleName = (req, res, next) => {
  Malename.aggregate([{ $sample: { size: 1 } }])
  .then(name => res.status(200).json(name))
  .catch(e => next(e))
}

module.exports.getLastName = (req, res, next) => {
  Lastname.aggregate([{ $sample: { size: 1 } }])
  .then(name => res.status(200).json(name))
  .catch(e => next(e))
}


