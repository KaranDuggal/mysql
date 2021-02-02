var express = require('express');
var router = express.Router();
const UserController = require('../controllers/user.controller');
const userController = new UserController();

/* GET users listing. */
router.get('/signup', userController.signup)

module.exports = router;
