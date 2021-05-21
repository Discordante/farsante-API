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
    names.femalename.forEach(elem => FemaleName.create({femalename: elem}))
    names.malename.forEach(elem =>   MaleName.create({malename: elem}))

})
.catch(error => console.log("---------- Error deleting data ----------"))
.finally(() => {
    console.log("The database has been successfully filled in.")
    process.exit(0)
})

 


