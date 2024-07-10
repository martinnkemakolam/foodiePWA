const bcrypt = require('bcryptjs')
let checkPathAndMethod = require('../utility/checkPathAndMethod.cjs')
const getBody = require('../utility/getBody.cjs')
const JWT = require('jsonwebtoken')
const respnse = require('../utility/respnse.cjs')


module.exports =(req, res, db)=>(
    checkPathAndMethod({req, method: 'POST', acceptedPath:'/api/login', cb: async()=>{
        let body = await getBody(req)
        let password = body.password
        let email = body.email
        try {
            console.log(password, email)
            let mongoResponse = await db.collection('unverifieduser').findOne({email: email})   
            bcrypt.compare(password, mongoResponse.password, (err, result) => {
                if (err) {
                    respnse(res, 500, {
                        errorMessage: err.message
                    })
                    return
                }
                // console.log(mongoResponse.password, result)
                if (result) {
                    // console.log(mongoResponse._id)
                    let payload = {
                        userId: mongoResponse._id,
                        isAdmin: mongoResponse.email === "nkemakolam.martin@gmail.com" ? true : false
                    }
                    let token = JWT.sign(payload, 'FoodiePWA', {
                        expiresIn: "3h"
                    })
                    respnse(res, 200, {
                        ...mongoResponse,
                        password: password,
                        token: token
                    })   
                }else{
                    respnse(res, 400, {
                        email: email,
                        password: password,
                        token: false
                    })
                }
            })
        } catch (error) {
            respnse(res, 500, {
                errorMessage: error.message
            })
        }
    }}) 
)