const UserServices = require('../services/user.services')
const userServices = new UserServices();
module.exports = UserController = function () {
    this.signup = async (req, res) => {
        try {
            const user = await userServices.createUser(req.body);
            res.json({
                success: true,
                user: user
            })
        } catch (err) {

        }
    }
}