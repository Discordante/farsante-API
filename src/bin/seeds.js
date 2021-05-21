const mongoose = require('mongoose')

//models
const PeopleName = require('../models/LastName.model')



require('../config/db.config')

const names = require("./names.json")

Promise.all([LastName.deleteMany(), FemaleName.deleteMany(), MaleName.deleteMany()])
.then(() => {
    
   console.log(names)
})
.catch(error => console.log("---------- Error deleting data ----------"))

 


