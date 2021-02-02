const nodemailer = require('nodemailer')
const TokenServices = require('./token.services');
const tokenServices = new TokenServices();
const DbServices = require('./db.services');
const dbServices = new DbServices();
const db = require('../models')
const users = db.users;
class MailServices {
    constructor() { }
    forgotpassword(body) {
        return new Promise(async (resolve, reject) => {
            try {
                const token = await tokenServices.one_hour_token(body);
                const user = await dbServices.updatetoken(users, body.email, token)
                let transporter = nodemailer.createTransport({
                    host: "smtp.ethereal.email",
                    port: 587,
                    secure: false, // true for 465, false for other ports
                    auth: {
                        user: 'tyra.turner58@ethereal.email', // generated ethereal user
                        pass: 'VcqZ5qD9xEcjrhKVcv', // generated ethereal password
                    },
                });
                let info = await transporter.sendMail({
                    from: '"turner58" tyra.turner58@ethereal.email', // sender address
                    to: "laverna.tromp@ethereal.email", // list of receivers
                    subject: "forgot password ✔", // Subject line
                    text: "text area", // plain text body
                    html: `You are receiving this because you (or someone else) have requested the reset of the password for your account.<br> <br> 
                            Please click on the following link, or paste this into your browser to complete the process.<br> <br> 
                            <a href="http://localhost:3000/api/users/resetpassword/${token}">http://localhost:3000/api/users/resetpassword/${token}</a><br><br>
                            <url>
                            Thanks,<br>
                            Team RUNWAY BUY`, // html body
                });
                resolve(nodemailer.getTestMessageUrl(info))
            } catch (err) {
                reject(err)
            }
        })

    }
}

module.exports = MailServices