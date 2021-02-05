var express = require('express');
var router = express.Router();
const PropertyController = require('../controllers/property.controller')
const propertyController = new PropertyController();
/* GET users listing. */
router.post('/addproperty', propertyController.addproperty);

module.exports = router;
