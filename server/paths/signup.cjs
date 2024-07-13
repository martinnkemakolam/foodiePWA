let checkPathAndMethod = require("../utility/checkPathAndMethod.cjs") 
let bcrypt = require('bcryptjs')
let getBody = require("../utility/getBody.cjs")
const  respnse = require("../utility/respnse.cjs")

module.exports = (req, res, db)=>(
    checkPathAndMethod({req,method:'POST', acceptedPath: '/api/signup', cb:async()=>{
        let body = await getBody(req)

        let password = body.password
        let email = body.email

        let encrpthedPassword = await bcrypt.hash(password, 10)
        
        try{
            let dataToAdd = {
                email: email,
                password: encrpthedPassword
            }
            let existingUser = await db.collection("unverifieduser").findOne({email})
            // console.log("this is", existingUser)
            if (existingUser) {
                respnse(res, 400, {
                    errorMessage: "Email already exists"
                })    
                return
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