var express = require('express');
var router = express.Router();
const userRouts = require('./user.routes')

/* GET home page. */
router.use('/user', userRouts)

module.exports = router;
