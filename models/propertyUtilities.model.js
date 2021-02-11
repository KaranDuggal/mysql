const Sequelize = require('sequelize')
const sequelize = require('../configurations/db.loader')
const PropertyUtilitiesDetail = sequelize.define('property_utilities_detail', {
    key: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    value: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = PropertyUtilitiesDetail
