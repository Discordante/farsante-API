const createError = require('http-errors')

const names = require('../bin/names.json')

module.exports.getRandomName = (req, res, next) => {



  res.json(names)

  //next(createError(404, { errors: { email: 'Email or password is incorrect' }}))

    
}
