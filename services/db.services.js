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
}
module.exports = DbServices