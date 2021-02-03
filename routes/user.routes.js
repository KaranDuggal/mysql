var express = require('express');
var router = express.Router();
const UserController = require('../controllers/user.controller');
const userController = new UserController();

/* GET users listing. */
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.post('/sendforgotpasswordmail', userController.forgotpasswordmail);
router.post('/resetpassword/:token', userController.resetpassword);

module.exports = router;
