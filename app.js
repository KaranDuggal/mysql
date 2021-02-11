const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// -------- Database config --------------
const sequelize = require('./configurations/db.loader');
const user = require('./models/user.model')
const property = require('./models/property.model')
const property_detail = require('./models/propertydetails.model')
const PropertyUtilitiesDetail = require('./models/propertyUtilities.model')
const propertyRoomLayout = require('./models/propertyRoomLayout.model')
user.hasMany(property)
property.hasMany(property_detail)
property.hasMany(propertyRoomLayout)
property.hasMany(PropertyUtilitiesDetail)
sequelize.sync({
    logging:console.log,
    force:true
}).then((result) => {
    console.log('connection to database is established succesfully');
}).catch(err => {
    console.log('database connection failed', err);
})

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./routes/index');
app.use('/api', indexRouter);

module.exports = app;
