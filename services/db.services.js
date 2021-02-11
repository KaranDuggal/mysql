class DbServices {
    constructor() { }
    create(tableName, body) {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await tableName.create(body)
                resolve(user)
            } catch (err) {
                reject(err)
            }
        })
    }
    bulkcreate(tableName, body,id) {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await tableName.bulkCreate(body)
                resolve(user)
            } catch (err) {
                reject(err)
            }
        })
    }
    findbyphone(tableName, number) {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await tableName.findOne({
                    where: { phonenumber: number }
                })
                resolve(user)
            } catch (err) {
                reject(err)
            }
        })
    }
    findbyemail(tableName, email) {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await tableName.findOne({
                    where: { email: email }
                })
                resolve(user)
            } catch (err) {
                reject(err)
            }
        })
    }
    findbyid(tableName, id) {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await tableName.findOne({
                    where: { id: id }
                })
                resolve(data)
            } catch (err) {
                reject(err)
            }
        })
    }
    updatetoken(tableName, email, token) {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await tableName.update(
                    { forgotpasswordtoken: token },
                    { where: { email: email } }
                )
                resolve(user)
            } catch (err) {
                reject(err)
            }
        })
    }
    resetpassword(tableName, email, password) {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await tableName.update(
                    { password: password, forgotpasswordtoken: null },
                    { where: { email: email } }
                )
                resolve(user)
            } catch (err) {
                reject(err)
            }
        })
    }
    update(tableName, id, body) {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await tableName.update(body, { where: { id: id } })
                resolve(user)
            } catch (err) {
                reject(err)
            }
        })
    }
    delete(tableName, id) {
        return new Promise(async (resolve, reject) => {
            try {
                console.log('in db services');
                const user = await tableName.destroy({ where: { id: id } })
                resolve(user)
            } catch (err) {
                reject(err)
            }
        })
    }
}
module.exports = DbServices