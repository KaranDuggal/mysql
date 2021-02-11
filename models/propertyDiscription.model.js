const Sequelize = require('sequelize')
const sequelize = require('../configurations/db.loader')
const propertydiscription = sequelize.define('property_discription', {
    discription: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = propertydiscription
