const mongoose = require('mongoose')

//models
const LastName = require('../models/LastName.model')
const FemaleName = require('../models/FemaleName.model')
const MaleName = require('../models/MaleName.model')



require('../config/db.config')

const names = require("./names.json")

Promise.all([LastName.deleteMany(), FemaleName.deleteMany(), MaleName.deleteMany()])
.then(() => {
    names.lastname.forEach(elem =>   LastName.create({lastname: elem}))
    names.femalename.forEach(elem => FemaleName.create({name: elem}))
    names.malename.forEach(elem =>   MaleName.create({name: elem}))
})
.catch(error => console.log("---------- Error deleting data ----------"))


 


