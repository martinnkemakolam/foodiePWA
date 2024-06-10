let {MongoClient} = require("mongodb");

let connectionString = "mongodb://127.0.0.1:27017/foodiedb"

let dbInstance 
module.exports = {
    dbConnection: async(cb)=>{
        try{
            let resp = await MongoClient.connect(connectionString)
            dbInstance = resp.db()
            cb()
        }catch(e){
            console.error("Error connecting")
            cb(e.message)
        }
    },
    getDb: ()=>dbInstance
}