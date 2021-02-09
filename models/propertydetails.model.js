const Sequelize = require('sequelize')
const sequelize = require('../configurations/db.loader')
const PropertyDetails = sequelize.define('propertydetails', {
    mls_number: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    levels: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    size: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    days_active: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    taxes: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    laundry_level: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    central_vac: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    fireplace: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    acreage: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lot_size: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

module.exports = PropertyDetails
