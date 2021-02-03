const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const DbServices = require('./db.services')
const dbServices = new DbServices()
const users = require('../models/user.model');
class UserServices {
    constructor() { }
    createUser(body) {
        return new Promise(async (resolve, reject) => {
            try {
                body.password = await bcrypt.hash(body.password, 10)
                const user = await dbServices.create(users, body);
                resolve(user)
            } catch (err) {
                reject(err)
            }
        })
    }
    checkphone(phonenumber) {
        return new Promise(async (resolve, reject) => {
            try {
                const exist = await dbServices.findbyphone(users, phonenumber);
                resolve(exist)
            } catch (err) {
                reject(false)
            }
        })
    }
    checkemail(email) {
        return new Promise(async (resolve, reject) => {
            try {
                const exist = await dbServices.findbyemail(users, email);
                resolve(exist)
            } catch (err) {
                reject(false)
            }
        })
    }
    createUserToken(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const token = jwt.sign({
                    email: data.email,
                    phonenumber: data.phonenumber,
                    role: data.role
                }, "jwtSecret", { expiresIn: '24h' })

                resolve(token);
            } catch (err) {
                reject(err);
            }
        })
    }
}

module.exports = UserServices