const checkPathAndMethod = require("../utility/checkPathAndMethod.cjs")
const respnse = require("../utility/respnse.cjs")

module.exports =(req, res, db)=>(
    checkPathAndMethod({req, method:'GET', acceptedPath:'/api/getProductByTag', cb:async()=>{
        try{
            let result = await db.collection('products').find({tag: req.params.get('tag')}).toArray()
            console.log(req.params.get('tag'))
            respnse(res, 200, result)
        }catch(e){
            respnse(res, 400, {errorMessage: e.message})
        }
    }}) 
)