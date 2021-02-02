const bcrypt = require('bcrypt')

const DbServices = require('./db.services')
const dbServices = new DbServices()
const db = require('../models')
const users = db.users;
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
    check(phonenumber) {
        return new Promise(async (resolve, reject) => {
            try {
                const exist = await dbServices.findbyphone(users, phonenumber);
                resolve(exist)
            } catch (err) {
                reject(false)
            }
        })
    }
}

module.exports = UserServices