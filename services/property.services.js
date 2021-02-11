const DbServices = require('./db.services')
const Sequelize = require('sequelize')
const dbServices = new DbServices();
const users = require('../models/user.model')
// const property = require('../models/property.model')
// const property_detail = require('../models/propertydetails.model')
// const Property_room_layout_detail = require('../models/propertyRoomLayout.model')
class PropertyServices {
    constructor() { }
    addproperty(body) {
        return new Promise(async (resolve, reject) => {
            try {
                const userdata = await users.findOne({where:{id:1}})    
                const propertyadd = await userdata.createProperty(body.property);                
                for(let i=0;i<body.property_details.length;i++){const propertyDetailData = await propertyadd.createProperty_detail(body.property_details[i]);}
                for(let i=0;i<body.room_layout.length;i++){const propertyRoomDetailData = await propertyadd.createProperty_room_layout_detail(body.room_layout[i]);}
                for(let i=0;i<body.utilities.length;i++){const propertyRoomDetailData = await propertyadd.createProperty_utilities_detail(body.utilities[i]);}
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