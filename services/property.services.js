const DbServices = require('./db.services')
const Sequelize = require('sequelize')
const multer = require('multer')
const path = require('path')
const dbServices = new DbServices();
const users = require('../models/user.model')
const property = require('../models/property.model')
const property_detail = require('../models/propertydetails.model')
// const Property_room_layout_detail = require('../models/propertyRoomLayout.model')
class PropertyServices {
    constructor() { }
    addproperty(body) {
        return new Promise(async (resolve, reject) => {
            try {
                const userdata = await users.findOne({ where: { id: 1 } })
                const propertyadd = await userdata.createProperty(body.property);
                // const propertyadd = await dbServices.findbyid(property,1)// find 


                
                // var propertyObjs = [];
                // for(let i=0;i<body.property_details.length;i++){
                //     var obj = await new property_detail(body.property_details[i])
                //     await propertydata.createProperty_detail(body.property_details[i]);
                //     propertyObjs.push(obj);
                // }
                // await propertydata.addProperty_details(body.property_details);

                // console.log('propertyObjs', propertyObjs[1])
                //const details = await propertydata.addProperty_details(body.property_details)
                // const details = await propertydata.createProperty_detail(body.property_details[1])
                // console.log('propertydata', propertydata)

                // body.property_details.forEach(element => {
                //     var obj = new property(element)
                //     propertyObjs.push(obj);
                // });

                // ============why not working=============
                // const details = await propertyadd.createProperty_detail(property_details)
                // const roomlayout = await propertyadd.createProperty_room_layout_details()
                // const utilities = await propertyadd.createProperty_utilities_details()
                // console.log('utilities', utilities)
                // console.log('details', details)
                // console.log('roomlayout', roomlayout)
                // ===========================================
                await propertyadd.createProperty_discription(body.discription)
                for (let i = 0; i < body.property_details.length; i++) { const propertyDetailData = await propertyadd.createProperty_detail(body.property_details[i]); }
                for (let i = 0; i < body.room_layout.length; i++) { const propertyRoomDetailData = await propertyadd.createProperty_room_layout_detail(body.room_layout[i]); }
                for (let i = 0; i < body.utilities.length; i++) { const propertyRoomDetailData = await propertyadd.createProperty_utilities_detail(body.utilities[i]); }
                resolve(true)
            } catch (err) {
                reject(err)
            }
        })
    }
    getpropertybyid(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const propertydata = await dbServices.findbyid(property, id)
                const details = await propertydata.getProperty_details()
                const roomlayout = await propertydata.getProperty_room_layout_details()
                const utilities = await propertydata.getProperty_utilities_details()
                resolve({ property: propertydata, detail: details, roomLayout: roomlayout, utilities: utilities })
            } catch (err) {
                reject(err)
            }
        })
    }
    updatepropertybyid(id, body) {
        return new Promise(async (resolve, reject) => {
            try {
                const property = await dbServices.update(property, id, body)
                resolve(property)
            } catch (err) {
                reject(err)
            }
        })
    }
    deletepropertybyid(id, propertydetail) {
        
        return new Promise(async (resolve, reject) => {
            try {
                const propertydata = await dbServices.findbyid(property, id)
                const details = await propertydata.removeProperty_details()
                const roomlayout = await propertydata.removeProperty_room_layout_detail()
                const utilities = await propertydata.removeProperty_utilities_detail()
                const propertydelete = await dbServices.delete(property, id)
                resolve(propertydelete)
            } catch (err) {
                reject(err)
            }
        })
    }
    uploadImage(req, res) {
        return new Promise(async (resolve, reject) => {
            try {
                const filePath = './public/uploadedImages';
                // const filename = 
                // var fileKey = Object.keys(req.files)[0];
                // console.log('fileKey', fileKey)
                var storage = multer.diskStorage({
                    destination: function (req, file, cb) {
                        cb(null, filePath)
                    },
                    filename:  function (req, file, cb) {
                        cb(null, Date.now()+path.extname(file.originalname))
                    }
                })
                console.log('name ===>',req.files);
                var upload = multer({ storage: storage }).array('image');
                upload(req, res, function (err) {
                    if (err) {
                        reject(err)
                    }
                    resolve(true)
                });
            } catch (err) {
                reject(err)
            }
        })
    }
}
module.exports = PropertyServices