let checkPathAndMethod = require('../utility/checkPathAndMethod.cjs')
const getBody = require('../utility/getBody.cjs')
module.exports =(req, res, db)=>{
    console.log('ran')
    checkPathAndMethod(req, 'POST', '/api/login', async()=>{
        console.log('ran')
        let body = await getBody(req)
        //get the password from body and mail
        //hash and salt password
        //check across db for match
        //return a form of authentication
        console.log(body)
        res.writeHead( 200, {
            'Content-Type': 'application/json',
            'X-Powered-By': 'bacon',
        })
        console.log('Successfully')
        res.end(JSON.stringify(body.data))
    })
}
