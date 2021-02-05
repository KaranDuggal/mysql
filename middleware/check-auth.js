const jwt = require('jsonwebtoken')
const UserServices = require('../services/user.services')
const userServices = new UserServices();
module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const decodedToken = jwt.verify(token, 'jwtSecret');
        const User = await userServices.checkemail(decodedToken.email)
        if (!User) {
            throw Error;
        }
        req.user = User;
        next();
    } catch (error) {
        res.status(401).json({
            message: "Auth Failed! "
        })

    }
}