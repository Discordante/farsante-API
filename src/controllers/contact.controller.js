const createError = require('http-errors')
const {randomPhoneNumber} = require('../functions/functions')
const {randomEmailDomain} = require('../functions/functions')

module.exports.getPhoneNumber = (req, res, next) => {
    let phoneNumber= {
        phone: randomPhoneNumber()
    }
    res.status(200).json(phoneNumber)
}


module.exports.getEmail = (req, res, next) => {
    let emailObj= {
        user: "",
        domain: randomEmailDomain(),
        TLD: ".com"
    }

    res.status(200).json(emailObj)
}



