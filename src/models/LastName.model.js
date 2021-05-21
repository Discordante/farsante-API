const mongoose = require('mongoose')

const LastNameSchema = mongoose.Schema(
  {
    lastname: {
      type: String
    }
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id
        delete ret._id
        delete ret.__v
        delete createdAt
        delete updatedAt
        return ret
      }
    }
  }
);


const LastName = mongoose.model('LastName', LastNameSchema)

module.exports = LastName