const ValidatorService = require('../services/validator.services');
const validatorService = new ValidatorService();
const PropertyServices = require('../services/property.services');
const propertyServices = new PropertyServices();
module.exports = PropertyController = function () {
    this.addproperty = async (req, res) => {
        try {
            req.body.UserId = req.user.dataValues.id
            const validProperty = await validatorService.schemas.PropertySchemas.validate(req.body);
            if (validProperty.error) { throw { custom_err_message: "Invalid Schema, in ValidatorServices", error } }
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
    this.getproperty = async (req, res) => {
        try {
            const property = await propertyServices.getpropertybyid(req.params.id)
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
    this.editproperty = async (req, res) => {
        try {
            const property = await propertyServices.getpropertybyid(req.params.id)
            if (!property) { throw { custom_err_message: "This Property not exist" } }
            // console.log('user id',req.user.id);
            if (req.user.id !== property.dataValues.id) { throw { custom_err_message: "You are not able to delete another person post" } }
            const updateProperty = await propertyServices.updatepropertybyid(req.params.id, req.body)
            if (!updateProperty[0]) {
                throw { custom_err_message: "Your property not updated successfully please try again" }
            }
            res.json({
                success: true,
                property: updateProperty
            })
        } catch (err) {
            res.json({
                success: false,
                error: err
            })
        }
    }
    this.deleteproperty = async (req, res) => {
        try {
            const property = await propertyServices.getpropertybyid(req.params.id)
            if (!property) { throw { custom_err_message: "This Property not exist" } }
            if (req.user.id !== property.dataValues.id) { throw { custom_err_message: "You are not able to delete another person post" } }
            const deleteProperty = await propertyServices.deletepropertybyid(req.params.id)
            res.json({
                success: true,
                property: deleteProperty
            })
        } catch (err) {
            res.json({
                success: false,
                error: err
            })
        }
    }
}