const { is_user_registered, find_user, validate_passsword } = require('../../services/auth_service/auth_service.js')
const { usercollection } = require('../../models')
const jwt = require('jsonwebtoken')


const login = async (req, res) => {

    const user = await is_user_registered(req)

    let matchedPassword;

    if (user) {
        const registered_user = await find_user(req)
        
        if(req.body.password){
             matchedPassword = await validate_passsword(req.body.password, registered_user.password)
        }else{
            return res.status(200).send({
                success: false,
                status: 200,
                message: 'Please enter the password to login'
            })
        }

        console.log("matchedPassword -- " , matchedPassword);

        if (matchedPassword) {
            // change 60 * 60 * 3 for three hours , currently sesion is 2 hours
            const token = jwt.sign({ userId: registered_user._id, role: registered_user.role , exp:Math.floor(Date.now() / 1000) + (60 * 60 * 2) }, process.env.SECRETE , )

            return res.status(200).send({
                success: true,
                status: 200,
                token: token,
                role: registered_user.role,
                message: 'Login Successfull.'
            })
        } else {
            return res.status(200).send({
                success: false,
                status: 200,
                message: "Invalid Credentials."
            })
        }


    } else {
        console.log("User is false")
        return res.status(404).send({
            data: [],
            success: false,
            status: 404,
            message: 'User is not registerd for this email ID.'
        })
    }




}

module.exports = {
    login
}