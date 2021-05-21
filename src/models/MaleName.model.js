const mongoose = require('mongoose')

const MaleNameSchema = mongoose.Schema(
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
);


const MaleName = mongoose.model('MaleName', MaleNameSchema)

module.exports = MaleName