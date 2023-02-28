const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')
const registrationController = require('../controllers/registrationController')

router.get('/', mainController.get)
router.get('/register', registrationController.get)
router.post('/register', registrationController.post)



module.exports = router  