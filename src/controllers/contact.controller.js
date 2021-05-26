const createError = require('http-errors')
const {randomPhoneNumber} = require('../functions/functions')

module.exports.getPhoneNumber = (req, res, next) => {
    let phoneNumber= {
        phone: randomPhoneNumber()
    }
    res.status(200).json(phoneNumber)
}


