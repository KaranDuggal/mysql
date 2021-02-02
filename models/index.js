// const dbconfig = require('../configurations/db.config')
// const Sequelize = require("sequelize");

// // const sequelize = new Sequelize(dbconfig.db.name, dbconfig.db.user, dbconfig.db.password, {
// //     // host: dbConfig.HOST,
// //     dialect: dbconfig.db.dialect,
// //     // operatorsAliases: false,
// //     pool: {
// //       max: dbconfig.pool.max,
// //       min: dbconfig.pool.min,
// //       acquire: dbconfig.pool.acquire,
// //       idle: dbconfig.pool.idle
// //     }
// //   });
// // ==================================================================
// const sequelize = new Sequelize('cartdb', 'root', '12345', {
//     dialect: 'mysql',
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   });


// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// // db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

// module.exports = db;