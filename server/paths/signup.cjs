let checkPathAndMethod = require("../utility/checkPathAndMethod.cjs") 
let bcrypt = require('bcryptjs')
let getBody = require("../utility/getBody.cjs")
const  respnse = require("../utility/respnse.cjs")

module.exports = (req, res, db)=>(
    checkPathAndMethod({req,method:'POST', acceptedPath: '/api/signup', cb:async()=>{
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
            respnse(res, 200, {
                result: result,
                success: true
            })
        }catch(e){
            respnse(res, 400, {
                errorMessage: e.message
            })
        }
    }}) 
)