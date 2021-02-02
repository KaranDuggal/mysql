





// const Joi = require('joi');
// require('dotenv-flow').config();

// const envVarsSchema = Joi.object({
//     NODE_ENV: Joi.string()
//         .allow(['development', 'staging', 'production'])
//         .default('development'),
//     DB_HOST: Joi.string() /*.required()*/
//         .description('Mysql DB host required.'),
//     DB_USER: Joi.string() /*.required()*/
//         .description('Mysql DB user required.'),
//     DB_PASSWORD: Joi.string() /*.required()*/
//         .description('Mysql DB password required.'),
//     DB_NAME: Joi.string() /*.required()*/
//         .description('Mysql DB password required.'),
//     DIALECT: Joi.string() /*.required()*/
//         .description('Mysql DB password required.'),
//     POOL_MAX: Joi.string() /*.required()*/
//         .description('Mysql DB password required.'),
//     POOL_MAX: Joi.string() /*.required()*/
//         .description('Mysql DB password required.'),
//     POOL_MIN: Joi.string() /*.required()*/
//         .description('Mysql DB password required.'),
//     POOL_ACQUIRE: Joi.string() /*.required()*/
//         .description('Mysql DB password required.'),
//     POOL_IDLE: Joi.string() /*.required()*/
//         .description('Mysql DB password required.'),
//     JWT_SECRET: Joi.string() /*.required()*/
//         .description('JWT Secret required.'),
// }).unknown()
//     .required();

// const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
// if (error) throw new Error(`Configuration Error: ${error.message}`);

// const config = {
//     db: {
//         host: envVars.DB_HOST,
//         user: envVars.DB_USER,
//         password: envVars.DB_PASSWORD,
//         name: envVars.DB_NAME,
//         dialect: envVars.DIALECT
//     },
//     pool:{
//         max: envVars.POOL_MAX,
//         min: envVars.POOL_MIN,
//         acquire: envVars.POOL_ACQUIRE,
//         idle: envVars.POOL_IDLE,
//         dialect: envVars.DIALECT
//     },
//     jwtSecret: envVars.JWT_SECRET,
// }

// module.exports = config