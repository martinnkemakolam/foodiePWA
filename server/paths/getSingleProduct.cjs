const { ObjectId } = require("mongodb")

const checkPathAndMethod = require("../utility/checkPathAndMethod.cjs")
const respnse = require("../utility/respnse.cjs")

module.exports =(req, res, db)=>(
    checkPathAndMethod({req, method:'GET', acceptedPath:'/api/getSingleProduct', cb:async()=>{
        try{
            let param = {
                product_id: req.params.get('product_id')
            }
            if(ObjectId.isValid(param.product_id)){
                let result = await db.collection("products").findOne({_id: param.product_id})
                if (result === null) {
                    respnse(res, 200, {status: "success", data: result})
                }
                respnse(res, 400, {errorMessage: result})
            }
            respnse(res, 400, {errorMessage: result})
        }catch(e){
            respnse(res, 400, {errorMessage: e.message})
        }
    }}) )