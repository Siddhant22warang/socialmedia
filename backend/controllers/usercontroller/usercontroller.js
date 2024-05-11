const userCollection = require('../../models/usercollection/usercollection.js')
const {  hash_password } = require('../../services/auth_service/auth_service.js')


const createUser = async (req, res) => {
    let { username, password, role, email, mobileNumber, address } = req.body;
    let checkExistingRecord;

    try {
        checkExistingRecord = await userCollection.findOne({ email })

        if (checkExistingRecord) {
            return res.status(400).send({
                data: [],
                message: "User Already Exist. Please Login Instead",
                status: 400,
                success: true,
            });
        }

        password = await hash_password(password)

        const user = await userCollection.create({
            username,
            password,
            email,
            mobileNumber,
            role,
            address
        });

        return res.status(201).send({
            data: user,
            message: "User Created Successfully",
            status: 201,
            success: true,
        });


    } catch (err) {
        console.error(err);
        return res.status(500).send({
            data: [],
            message: "Internal Server Error",
            status: 500,
            success: false,
        });
    }
};


const getAllUsers = async (req, res) => {
    try {
        const users = await userCollection.find();

        if (!users || users.length === 0) {
            return res.status(404).send({
                data: [],
                success: false,
                message: 'No User Found.'
            });
        }

        return res.status(200).send({
            data: users,
            success: true,
            message: 'All user records fetched successfully.'
        });
    } catch (err) {
        console.error(err);
        return res.status(500).send({
            data: [],
            success: false,
            message: 'Internal Server Error'
        });
    }
};


module.exports = {
    createUser,
    getAllUsers
}