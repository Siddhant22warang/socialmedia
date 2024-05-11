const jwt = require("jsonwebtoken");


const verify_jwt = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        res.send({
            success: false,
            message: "Not Authorized."
        })
    }
    else {
        try {
            const decoded = jwt.verify(token, process.env.SECRETE);
            req.userId = decoded.userId;
            req.role = decoded.role;
            next();
        }
        catch (error) {
            res.send({
                success: false,
                message: "Not Authorized."
            })
        }
    }
}

module.exports = verify_jwt;