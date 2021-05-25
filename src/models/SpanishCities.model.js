const mongoose = require('mongoose')

const SpanishCitiesSchema = mongoose.Schema(
  {
    city: {
      type: String
    },
    lat: {
        type: String
    },
    lng: {
        type: String
    },
    country: {
        type: String
    },
    iso2: {
        type: String
    },
    admin_name: {
        type: String
    },
    capital: {
        type: String
    },
    population: {
        type: String
    },
    population_proper: {
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


const SpanishCities = mongoose.model('SpanishCities', SpanishCitiesSchema)

module.exports = SpanishCities