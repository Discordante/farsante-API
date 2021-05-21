const mongoose = require('mongoose')

const LastNameSchema = mongoose.Schema(
  {
    lastname: {
      type: String
    }
  },
  {
    versionKey: false,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id
        delete ret._id
        delete ret.__v
        return ret
      }
    }
  }
);


const LastName = mongoose.model('LastName', LastNameSchema)

module.exports = LastName