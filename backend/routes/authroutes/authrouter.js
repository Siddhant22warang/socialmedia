const express = require('express')
const {login } = require('./../../controllers/authcontroller/authcontroller.js')


const router = express.Router()

router.post('/login' , login)

module.exports = router;