const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv/config")
const app = require("./app");


const port = process.env.port || 5200;
let server;

mongoose.connect(process.env.dbUrl).then( (res)=> {
    if(res){
        console.log("Database connected successfully" .rainbow)
         server = app.listen(port, () => { })

        if (port) {
            console.log(`SERVER STARTED ON ${port}`.green)
        }
        else {
            console.log(`FAILED TO START SERVER`.red)
        }
    }else{
        console.log("Failed to connect Database");
    }
})
