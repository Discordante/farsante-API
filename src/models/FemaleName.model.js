const mongoose = require('mongoose')

const FemaleNameSchema = mongoose.Schema(
  {
    name: {
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


const FemaleName = mongoose.model('FemaleName', FemaleNameSchema)

module.exports = FemaleName