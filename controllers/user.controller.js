const UserServices = require('../services/user.services')
const userServices = new UserServices();
const ValidatorService = require('../services/validator.services');
const validatorService = new ValidatorService();
module.exports = UserController = function () {
    this.signup = async (req, res) => {
        try {
            const validUser = await validatorService.schemas.signupSchema.validate(req.body);
            if (validUser.error) {
                throw { custom_err_message: "Invalid Schema, in ValidatorServices" }
            }
            const checkPhoneNoExist = await userServices.checkphone(req.body.phonenumber)
            if (checkPhoneNoExist) {
                throw { custom_err_message: "Phone Number Already Exist. please use Another Number" }
            }
            const checkEmailExist = await userServices.checkemail(req.body.email)
            if (checkEmailExist) {
                throw { custom_err_message: "Email Already Exist. please use Another Email" }
            }
            const user = await userServices.createUser(req.body);
            res.json({ success: true, user: user })
        } catch (err) {
            res.json({ success: false, error: err, message: err.custom_err_message ? err.custom_err_message : "signup failed" })
        }
    }
}