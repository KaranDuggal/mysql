const Sequelize = require('sequelize')
//////===========(database collection name , mysql username, password
const sequelize = new Sequelize('sequlelizer','root','12345678',{
    dialect:'mysql',
    host:'localhost'// 
})

module.exports = sequelize;