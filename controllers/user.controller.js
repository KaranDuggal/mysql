const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UserServices = require('../services/user.services')
const userServices = new UserServices();
const ValidatorService = require('../services/validator.services');
const validatorService = new ValidatorService();
const MailServices = require('../services/mail.service');
const mailService = new MailServices();
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
            const token = await userServices.createUserToken(user)
            res.json({ success: true, user: user, token: token })
        } catch (err) {
            res.json({ success: false, error: err, message: err.custom_err_message ? err.custom_err_message : "signup failed" })
        }
    }
    this.login = async (req, res) => {
        try {
            const validUser = await validatorService.schemas.loginSchema.validate(req.body);
            if (validUser.error) {
                throw { custom_err_message: "Invalid Schema, in ValidatorServices" }
            }
            const checkEmailExist = await userServices.checkemail(req.body.email)
            if (!checkEmailExist) {
                throw { custom_err_message: "Please Enter Valid Email" }
            }
            const verifypassword = await bcrypt.compare(req.body.password, checkEmailExist.dataValues.password,)
            if (verifypassword === false) {
                throw { custom_err_message: "Please Enter Valid password" }
            }
            const token = await userServices.createUserToken(checkEmailExist.dataValues)
            res.json({ success: true, user: checkEmailExist.dataValues, token: token })
        } catch (err) {
            res.json({ success: false, error: err, message: err.custom_err_message ? err.custom_err_message : "signup failed" })
        }
    }
    this.forgotpasswordmail = async (req, res) => {
        try {
            console.log('in forgot password');
            const validUser = await validatorService.schemas.forgetpassword.validate(req.body);
            if (validUser.error) {
                throw { custom_err_message: "Invalid Schema, check in ValidatorServices" }
            }
            const checkEmailExist = await userServices.checkemail(req.body.email)
            console.log('checkEmailExist:', checkEmailExist)
            if (!checkEmailExist) {
                throw { custom_err_message: "Please Enter Valid Email" }
            }
            const URL = await mailService.forgotpassword(req.body)
            res.json({ success: true, user: checkEmailExist.dataValues, URL: URL })
        } catch (err) {
            res.json({ success: false, error: err, message: err.custom_err_message ? err.custom_err_message : "signup failed" })
        }
    }
    this.resetpassword = async (req, res) => {
        try {
            if (req.body.password1 !== req.body.password2) {
                throw { custom_err_message: "password not match" }
            }
            const email = jwt.decode(req.params.token, "jwtSecret")
            const checkEmailExist = await userServices.checkemail(email.email)
            if (!checkEmailExist) {
                throw { custom_err_message: "Please Enter Valid Email" }
            }
            if (req.params.token !== checkEmailExist.dataValues.forgotpasswordtoken) {
                throw { custom_err_message: "Invalid Token Try Again Later" }
            }
            const updateUser = await userServices.updatepassword(checkEmailExist.dataValues.email, req.body.password1)
            res.json({ success: true, user: updateUser, })
        } catch (err) {
            res.json({ success: false, error: err, message: err.custom_err_message ? err.custom_err_message : "signup failed" })
        }
    }
}