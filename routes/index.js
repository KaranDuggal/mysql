var express = require('express');
var router = express.Router();
const userRouts = require('./user.routes')
const propertyRouts = require('./property.routes')

router.use('/user', userRouts)
router.use('/property', propertyRouts)

module.exports = router;
