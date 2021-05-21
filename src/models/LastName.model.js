const mongoose = require('mongoose')

const LastNameSchema = mongoose.Schema(
  {
    lastname: {
      type: String
    }
  },
  {
    timestamps: true
  }
);


const LastName = mongoose.model('LastName', LastNameSchema)

module.exports = LastName