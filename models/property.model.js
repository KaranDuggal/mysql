const Sequelize = require('sequelize')
const sequelize = require('../configurations/db.loader')
const Property = sequelize.define('property', {
    property_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    contrary: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    house_number: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Property
