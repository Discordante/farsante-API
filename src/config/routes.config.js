const express = require('express');
const router = express.Router();

const peopleController = require('../controllers/people.controller')


router.get('/randomName', peopleController.getRandomName)


module.exports = router;