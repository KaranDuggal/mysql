const DbServices = require('./db.services')
const dbServices = new DbServices();
const Property = require('../models/property.model')
class PropertyServices {
    constructor() { }
    addproperty(body) {
        return new Promise(async (resolve, reject) => {
            try {
                const property = await dbServices.create(Property,body)
                resolve(true)
            } catch (err) {
                reject(err)
            }
        })
    }
}
module.exports = PropertyServices