const mongoose = require('mongoose')

const PeopleName = mongoose.Schema(
  {
    female: {
      type: String
    },
    male: {
      type: String
    },
    lastname: {
      type: String
    }
  },
  {
    timestamps: true
  }
);


const PeopleName = mongoose.model('PeopleName', PeopleNameSchema)

module.exports = PeopleName