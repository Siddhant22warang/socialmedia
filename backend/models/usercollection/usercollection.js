const mongoose = require("mongoose")

const userCollection = mongoose.Schema({
    username:{
        type : String,
        require
    },

    email : {
        type : String,
        require
    },

    password:{
        type : String,
        require
    },

    role:{
        type : String,
        require
    },

    mobileNumber:{
        type : Number,
    },

    address:{
        type : String,
    },

})

module.exports = mongoose.model("users" , userCollection)