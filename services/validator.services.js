const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi)
class ValidatorService {
    constructor() {
        this.schemas = {};
        this.initializeScemas();
    }
    initializeScemas() {
        this.schemas.signupSchema = Joi.object({
            firstname: Joi.string().required(),
            lastname: Joi.string().required(),
            phonenumber: Joi.number().required(),
            email: Joi.string().required(),
            password: Joi.string().required(),
            role: Joi.string(),
        });
        this.schemas.loginSchema = Joi.object({
            email: Joi.string().required(),
            password: Joi.string().required(),
        });
        this.schemas.forgetpassword = Joi.object({
            email: Joi.string().required(),
        });
        this.schemas.resetpassword = Joi.object({
            password1: Joi.string().required(),
            password2: Joi.string().required(),
        });
        this.schemas.PropertySchemas = Joi.object({
            Property_name: Joi.string().required(),
            price: Joi.number().required(),
            contrary: Joi.string().required(),
            state: Joi.string().required(),
            city: Joi.string().required(),
            house_number: Joi.string().required(),
            UserId: Joi.number()
        });
    }
}
module.exports = ValidatorService;