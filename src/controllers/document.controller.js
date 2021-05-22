const createError = require('http-errors')


const {dniGenerator} = require('../functions/functions')


module.exports.getDNI = (req, res, next) => {
    let dniNumber= {
        dni: dniGenerator()
    }
    res.status(200).json(dniNumber)
}


