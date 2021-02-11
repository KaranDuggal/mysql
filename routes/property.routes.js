var express = require('express');
var router = express.Router();
const PropertyController = require('../controllers/property.controller')
const propertyController = new PropertyController();
const checkAuth = require('../middleware/check-auth')
/* GET users listing. */
router.post('/addproperty', propertyController.addproperty);//,checkAuth
router.get('/getproperty/:id', propertyController.getproperty);//,checkAuth
router.put('/getproperty/:id/edit',checkAuth, propertyController.editproperty);
router.delete('/getproperty/:id/delete', propertyController.deleteproperty);  //,checkAuth
router.post('/getproperty/:id/uploadimage', propertyController.uploadimage);

module.exports = router;
