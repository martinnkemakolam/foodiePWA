const checkPathAndMethod = require("../utility/checkPathAndMethod.cjs")
const respnse = require("../utility/respnse.cjs")

module.exports =(req, res, db)=>(
    checkPathAndMethod({req, method: 'GET', acceptedPath: '/api/getAllTags', cb:async()=>{
        try{
            let result = await db.collection('tags').find().toArray()
            respnse(res, 200, result)
        }catch(e){
            respnse(res, 400, {errorMessage: e.message})
        }
    }}) 
)