import { ObjectId } from "mongodb"
import getBody from "../utility/getBody.cjs"

const checkPathAndMethod = require("../utility/checkPathAndMethod.cjs")
const respnse = require("../utility/respnse.cjs")

module.exports =(req, res, db)=>(
    checkPathAndMethod({req, method:'DELETE', acceptedPath:'/api/deleteProduct', cb:async()=>{
        let body = await getBody(req)
        try{
            let param = {
                product_id: req.params.get('product_id')
            }
            if(ObjectId.isValid(param.product_id)){
                let result = await db.collection("products").deleteOne({_id: param.product_id})
                if (result.acknowledged) {
                    respnse(res, 200, {status: "success", data: result})
                }
                respnse(res, 400, {status: "failed", data: result})
            }
            respnse(res, 400, {status: "failed", data: result})
        }catch(e){
            respnse(res, 400, {errorMessage: e.message})
        }
    }}) 
)