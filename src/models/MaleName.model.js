const mongoose = require('mongoose')

const MaleName = mongoose.Schema(
  {
    Malename: {
      type: String
    }
  },
  {
    timestamps: true
  }
);


const MaleName = mongoose.model('MaleName', MaleNameSchema)

module.exports = MaleName