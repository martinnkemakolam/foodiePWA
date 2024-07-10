let checkPathAndMethod = require("../utility/checkPathAndMethod.cjs") 
let bcrypt = require('bcryptjs')
let getBody = require("../utility/getBody.cjs")
const  respnse = require("../utility/respnse.cjs")

module.exports = (req, res, db)=>(
    checkPathAndMethod({req, method:'POST', auth:'/api/signup', cb:async()=>{
        let body = await getBody(req)
        try{
            let dataToAdd = {
                name: body.name,
                description: body.description,
                price: body.price,
                tag: body.tag,
                img: body.img
            }
            let result = await db.collection('products').insertOne(dataToAdd)
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