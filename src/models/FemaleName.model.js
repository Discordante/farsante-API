const mongoose = require('mongoose')

const femaleNameSchema = new mongoose.Schema(
  {
    name: {
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
)


const FemaleName = mongoose.model('FemaleName', femaleNameSchema)

module.exports = FemaleName