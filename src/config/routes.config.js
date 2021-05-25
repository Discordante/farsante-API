const express = require('express');
const router = express.Router();

const peopleController = require('../controllers/people.controller')
const documentController = require('../controllers/document.controller')

router.get('/randomName', peopleController.getRandomName)
router.get('/femaleName', peopleController.getFemaleName)
router.get('/maleName', peopleController.getMaleName)
router.get('/lastName', peopleController.getLastName)

router.get('/dni', documentController.getDNI)

//cities and municipalities
router.get('/randomCity', placesController.getRandomCity)

module.exports = router;