const createError = require('http-errors')
const {randomPhoneNumber, randomIntFromInterval, randomEmailDomain, randomEmailUser} = require('../functions/functions')

const Malename = require('../models/MaleName.model')
const Femalename = require('../models/FemaleName.model')
const Lastname = require('../models/LastName.model')

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
    switch (randomIntFromInterval(1,3)) {
        case 1:
            Malename.aggregate([{ $sample: { size: 1 } }])
            .then(name =>  {
                emailObj.name=randomEmailUser(name)
                break;
            })
            .catch(e => next(e))
        case 2:
            Femalename.aggregate([{ $sample: { size: 1 } }])
            .then(name =>  {
                emailObj.name=randomEmailUser(name)
                break;
            })
            .catch(e => next(e))
        case 3:
            Lastname.aggregate([{ $sample: { size: 1 } }])
            .then(name =>  {
                emailObj.name=randomEmailUser(name)
                break;
            })
            .catch(e => next(e))
        default:
        }

    res.status(200).json(emailObj)
}

