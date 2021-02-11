const Sequelize = require('sequelize')
const sequelize = require('../configurations/db.loader')
const PropertyRoomLayoutDetail = sequelize.define('property_room_layout_detail', {
    key: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    floor: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    width: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    height: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

module.exports = PropertyRoomLayoutDetail
