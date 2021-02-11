const Sequelize = require('sequelize')
const sequelize = require('../configurations/db.loader')
const PropertyBuildingDetail = sequelize.define('property_building_detail', {
    exterior: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    garage: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    approx_age: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    basement: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    driveway: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    garage_spaces: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = PropertyBuildingDetail
