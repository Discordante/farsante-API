const express = require('express');
const router = express.Router();

const peopleController = require('../controllers/people.controller')
const documentController = require('../controllers/document.controller')
const placesController = require('../controllers/places.controller')
const contactController = require('../controllers/contact.controller')

//people
router.get('/randomName', peopleController.getRandomName)
router.get('/femaleName', peopleController.getFemaleName)
router.get('/maleName', peopleController.getMaleName)
router.get('/lastName', peopleController.getLastName)
router.get('/fullName', peopleController.getFullName)

//contact
router.get('/phoneNumber', contactController.getPhoneNumber)
router.get('/email', contactController.getEmail)

//documentation
router.get('/dni', documentController.getDNI)

//cities and municipalities
router.get('/randomCity', placesController.getRandomCity)
router.get('/randomMunicipality', placesController.getRandomMunicipality)

module.exports = router;