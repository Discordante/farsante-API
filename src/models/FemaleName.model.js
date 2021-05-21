const mongoose = require('mongoose')

const FemaleName = mongoose.Schema(
  {
    Femalename: {
      type: String
    }
  },
  {
    timestamps: true
  }
);


const FemaleName = mongoose.model('FemaleName', FemaleNameSchema)

module.exports = FemaleName