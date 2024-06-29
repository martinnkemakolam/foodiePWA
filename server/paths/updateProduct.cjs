import { ObjectId } from "mongodb"
import getBody from "../utility/getBody.cjs"

const checkPathAndMethod = require("../utility/checkPathAndMethod.cjs")
const respnse = require("../utility/respnse.cjs")

module.exports =(req, res, db)=>{
    checkPathAndMethod(req, 'UPDATE', '/api/updateProduct', async()=>{
        let body = await getBody(req)
        let upadate = {
            title: body.tittle,
            description: body.description,
            image: body.img,
            price: body.price,
            tag: body.tag
        }
        try{
            let param = {
                product_id: req.params.get('product_id')
            }
            if(ObjectId.isValid(param.product_id)){
                let result = await db.collection("products").updateOne({
                    _id: param.product_id,
                }, {$set:upadate})
                if (result.acknowledged) {
                    respnse(res, 200, {status: "success", data: result})
                }
                respnse(res, 400, {status: "failed", data: result})
            }
            respnse(res, 400, {status: "failed", data: result})
        }catch(e){
            respnse(res, 400, {errorMessage: e.message})
        }
    })
}