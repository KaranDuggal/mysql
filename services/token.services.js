const jwt = require('jsonwebtoken')

class TokenServices {
    constructor() { }
    one_hour_token(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const token = jwt.sign({
                    email: data.email,
                }, "jwtSecret", { expiresIn: '1h' })
                resolve(token)
            } catch (err) {
                reject(err)
            }
        })
    }
}
module.exports = TokenServices;