const Sequelize = require('sequelize')
const sequelize = require('../configurations/db.loader')
const upload_image = sequelize.define('upload_image', {
    // key: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    // },
    URL: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

module.exports = upload_image
