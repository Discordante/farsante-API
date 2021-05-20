const mongoose = require('mongoose')

//models
const PeopleName = require('../models/PeopleName.model')



require('../config/db.config')

const names = require("./names.json")

Promise.all([PeopleName.deleteMany()])
.then(() => {
    
   
})
.catch(error => console.log("---------- Error deleting data ----------"))

 


