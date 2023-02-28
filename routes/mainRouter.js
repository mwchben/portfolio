const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')
const bookController = require('../controllers/bookController')

router.get('/', homeController.get)
router.get('/book', bookController.get)
router.post('/book', bookController.post)



module.exports = router  