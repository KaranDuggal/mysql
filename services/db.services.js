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
}
module.exports = DbServices