const createError = require('http-errors')


const {dniGenerator} = require('../functions/functions')


module.exports.getDNI = (req, res, next) => {
    res.status(200).json(dniGenerator())
}


