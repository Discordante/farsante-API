const mongoose = require('mongoose')

const FemaleNameSchema = mongoose.Schema(
  {
    femalename: {
      type: String
    }
  },
  {
    timestamps: true
  }
);


const FemaleName = mongoose.model('FemaleName', FemaleNameSchema)

module.exports = FemaleName