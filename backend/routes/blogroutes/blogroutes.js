const express = require("express")
const {blogController} = require("../../controllers")
const {authorize} = require('../../middlewares')

const router = express.Router()

router.get('/getallblogs' , authorize , blogController.getAllBlogs)
router.post('/createblog' , authorize , blogController.createBlog)

module.exports = router