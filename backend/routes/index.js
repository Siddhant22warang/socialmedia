
const express = require('express');
const Router = express.Router()
const userrouter = require('../routes/userroutes/userrouter.js')
const authrouter = require('../routes/authroutes/authrouter.js')
const blogrouter = require('../routes/blogroutes/blogroutes.js')


const routes = [
    { path: "/", route: authrouter },
    { path: "/users", route: userrouter },
    { path: "/blog", route: blogrouter },
]


routes.map((route) => {
    Router.use(route.path, route.route)
})

module.exports = Router;