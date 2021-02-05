var express = require('express');
var router = express.Router();
const PropertyController = require('../controllers/property.controller')
const propertyController = new PropertyController();
const checkAuth = require('../middleware/check-auth')
/* GET users listing. */
router.post('/addproperty',checkAuth, propertyController.addproperty);

module.exports = router;
