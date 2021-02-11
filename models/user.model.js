const Sequelize = require('sequelize')
const sequelize = require('../configurations/db.loader')
const User = sequelize.define('User', {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phonenumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  forgotpasswordtoken: {
    type: Sequelize.STRING,
  },
  role: {
    type: Sequelize.ENUM('admin', 'seller', 'buyer'),
    defaultValue: 'buyer',
    allowNull: false,
  },
});

module.exports = User
