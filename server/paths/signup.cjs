let checkPathAndMethod = require("../utility/checkPathAndMethod.cjs") 
let bcrypt = require('bcryptjs')
let mail = require('nodemailer')
let getBody = require("../utility/getBody.cjs")
module.exports = (req, res, db)=>{
    checkPathAndMethod(req, 'POST', '/api/signup', async()=>{
        let body = await getBody(req)
        // get email and password from body

        let password = body.password
        let email = body.email

        // hash and salt password
        let encrpthedPassword = await bcrypt.hash(password, 10)


        // send a mail to the mail for verification


        // after accepting verification store the email in database with password
        try{
            let dataToAdd = {
                email: email,
                password: encrpthedPassword
            }
            let result = await db.collection('unverifieduser').insertOne(dataToAdd)
            res.writeHead(200, {
                "Content-Type": "application/json"
            })
            res.end(JSON.stringify({
                result: result,
                success: true
            }))
        }catch(e){
            res.writeHead(400, {
                "Content-Type": "application/json"
            })
            res.end(JSON.stringify({
                error: `Error adding user`,
                errorMessage: e.message
            }))
        }
    })
}