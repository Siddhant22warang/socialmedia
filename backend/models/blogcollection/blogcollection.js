const mongoose = require("mongoose")

const blogCollection = mongoose.Schema({
    title : {
        type : String,
        require,
    },
    description : {
        type : String,
        require,
    },
    image : {
        type : String,
    },
    user:{
        type : String,
    }
})

module.exports = mongoose.model("blog" , blogCollection)