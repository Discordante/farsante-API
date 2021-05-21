const mongoose = require('mongoose')

const MaleNameSchema = mongoose.Schema(
  {
    malename: {
      type: String
    }
  },
  {
    timestamps: true,
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


const MaleName = mongoose.model('MaleName', MaleNameSchema)

module.exports = MaleName