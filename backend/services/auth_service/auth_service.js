const { usercollection } = require('../../models/index.js')
const bcrypt = require("bcrypt");



const is_user_registered = async (req) => {
    try{
        const user = await usercollection.findOne({ email: req.body.email });
        return user ? true : false;
    }  catch(err){
        console.log("error in service")
        return false
    } 
  
}


const find_user = async(req) => {
    return await usercollection.findOne({ email: req.body.email });
}


const hash_password = (password) => {
    return bcrypt.hash(password, 10);
}

const validate_passsword = (password, saved_password) => {
    return bcrypt.compare(password, saved_password);
}

module.exports = {
    is_user_registered,
    find_user,
    hash_password,
    validate_passsword
}