const Sequelize = require('sequelize')
const sequelize = require('../configurations/db.loader')
const propertydetail = sequelize.define('property_detail', {
    key: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    value: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

module.exports = propertydetail
