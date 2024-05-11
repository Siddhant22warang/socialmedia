const express  = require('express');
const {userController} = require( '../../controllers')
const {authorize} = require('../../middlewares')


const router = express.Router()

router.post("/createuser" ,authorize , userController.createUser)
router.get("/getallusers" ,authorize ,userController.getAllUsers )


module.exports = router;