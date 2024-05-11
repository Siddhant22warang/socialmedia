const express  = require('express');
const cors = require("cors");
const bodyParser = require("body-parser")
const routes = require("./routes")

const app = express()

app.use(cors())


app.use(cors({
    origin : '*',
    methods : ['GET' , 'POST' , "PUT" , 'DELETE'],
    Credentials : true,
}))

app.use(bodyParser.json())
app.use('/socialmediaapp/api/v1' , routes)

module.exports = app;