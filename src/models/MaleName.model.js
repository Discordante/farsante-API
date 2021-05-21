const mongoose = require('mongoose')

const MaleNameSchema = mongoose.Schema(
  {
    malename: {
      type: String
    }
  },
  {
    timestamps: true
  }
);


const MaleName = mongoose.model('MaleName', MaleNameSchema)

module.exports = MaleName