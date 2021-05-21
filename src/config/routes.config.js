const express = require('express');
const router = express.Router();

const peopleController = require('../controllers/people.controller')

router.get('/randomName', peopleController.getRandomName)
router.get('/FemaleName', peopleController.getFemaleName)
router.get('/MaleName', peopleController.getMaleName)
router.get('/LastName', peopleController.getLastName)

module.exports = router;