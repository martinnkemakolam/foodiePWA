import { ObjectId } from "mongodb"
const checkPathAndMethod = require("../utility/checkPathAndMethod.cjs")
const respnse = require("../utility/respnse.cjs")

module.exports =(req, res, db)=>(
    checkPathAndMethod({req, method: 'GET', acceptedPath: '/api/getOrder', cb:async()=>{
        try{
            let param = {
                user_id: req.params.get('user_id')
            }
            if(ObjectId.isValid(param.user_id)){
                let result = await db.collection("user").findOne({_id: param.user_id})
                result && respnse(res, 200, {status: "success", data: result.order}) || respnse(res, 400, {status: "failed", data: result})
            }
            respnse(res, 400, {status: "failed", data: result})
        }catch(e){
            respnse(res, 400, {errorMessage: e.message})
        }
    }}) 
)