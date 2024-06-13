const bcrypt = require('bcryptjs')
let checkPathAndMethod = require('../utility/checkPathAndMethod.cjs')
const getBody = require('../utility/getBody.cjs')
module.exports =(req, res, db)=>{
    console.log('ran')
    checkPathAndMethod(req, 'POST', '/api/login', async()=>{
        console.log('ran')
        let body = await getBody(req)
        //get the password from body and mail
        let password = body.password
        let email = body.email

        //hash and salt password

        //check across db for match
        try {
            console.log(password, email)
            let mongoResponse = await db.collection('unverifieduser').findOne({email: email})   
            bcrypt.compare(password, mongoResponse.password, (err, result) => {
                if (err) {
                    res.writeHead( 500, {
                        'Content-Type': 'application/json',
                        'X-Powered-By': 'bacon',
                    })
                    res.end(JSON.stringify({
                        error: 'Internal Server Error'
                    }))
                    return
                }
                console.log(mongoResponse.password, result)
                if (result) {
                    res.writeHead( 200, {
                        'Content-Type': 'application/json',
                        'X-Powered-By': 'bacon',
                    })
                    res.end(JSON.stringify({
                        ...mongoResponse,
                        password: password,
                        authObj: true
                    }))   
                }else{
                    res.writeHead( 400, {
                        'Content-Type': 'application/json',
                        'X-Powered-By': 'bacon',
                    })
                    res.end(JSON.stringify({
                        email: email,
                        password: password,
                        authObj: false
                    }))
                }
            })
        } catch (error) {
            res.writeHead( 400, {
                'Content-Type': 'application/json',
                'X-Powered-By': 'bacon',
            })
            res.end(JSON.stringify({
                error: error.message
            }))    
        }
    })
}
