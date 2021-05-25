const mongoose = require('mongoose')

const MunicipalitySchema = mongoose.Schema(
  {
    codigo_postal: {
      type: String
    },
    municipio_id: {
        type: String
    },
    municipio_nombre: {
        type: String
    },
    codigo_unidad_poblacional: {
        type: String
    },
    entidad_singular_nombre: {
        type: String
    },
    nucleo_nombre: {
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


const Municipality = mongoose.model('Municipality', MunicipalitySchema)

module.exports = Municipality