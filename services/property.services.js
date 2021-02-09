const DbServices = require('./db.services')
const dbServices = new DbServices();
const Property = require('../models/property.model')
const PropertyDetails = require('../models/propertydetails.model')
class PropertyServices {
    constructor() { }
    addproperty(body) {
        return new Promise(async (resolve, reject) => {
            try {
                const property = await dbServices.create(Property,body.property)
                console.log('property:', property)
                body.property_details.propertyId = property.dataValues.id
                const propertyDetails = await dbServices.create(PropertyDetails,body.property_details)
                resolve(true)
            } catch (err) {
                reject(err)
            }
        })
    }
    getpropertybyid(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const property = await dbServices.findbyid(Property,id)
                resolve(property)
            } catch (err) {
                reject(err)
            }
        })
    }
    updatepropertybyid(id,body) {
        return new Promise(async (resolve, reject) => {
            try {
                const property = await dbServices.update(Property, id, body)
                resolve(property)
            } catch (err) {
                reject(err)
            }
        })
    }
    deletepropertybyid(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const property = await dbServices.delete(Property,id)
                resolve(property)
            } catch (err) {
                reject(err)
            }
        })
    }
}
module.exports = PropertyServices