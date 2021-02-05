const ValidatorService = require('../services/validator.services');
const validatorService = new ValidatorService();
const PropertyServices = require('../services/property.services');
const propertyServices = new PropertyServices();
module.exports = PropertyController = function () {
    this.addproperty = async (req, res) => {
        try {
            const validProperty = await validatorService.schemas.PropertySchemas.validate(req.body);
            if (validProperty.error) { throw { custom_err_message: "Invalid Schema, in ValidatorServices",error } }
            const property = await propertyServices.addproperty(req.body)
            res.json({
                success: true,
                property: property
            })
        } catch (err) {
            res.json({
                success: false,
                error: err
            })
        }
    }
}