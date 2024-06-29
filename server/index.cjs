let http = require('http');
// let URL = require('node:url');
let login = require('./paths/login.cjs');
const {dbConnection, getDb} = require("./utility/databaseUtil.cjs");
const signup = require('./paths/signup.cjs');
const getAllProducts = require('./paths/getAllProducts.cjs');
const getAllTags = require('./paths/getAllTags.cjs');
const getProductsByTag= require('./paths/getProductsByTag.cjs');


dbConnection((err)=>{
    if(err){
        console.error(err)
        return
    }
    console.log('running')
    let server = http.createServer(async(req, res)=>{
        //MiddleWare
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        res.setHeader("Access-Control-Max-Age", 3600)

        if(req.method === 'OPTIONS'){
            res.end()
        }
        
        //db
        let db = getDb()
        console.log(req.url)
        let url = new URL(req.url, `http://${req.headers.host}`);
        
        
        req.params = url.searchParams
        req.href = url.href
        req.path = url.pathname 
        console.log(req.params, req.href, req.path)
        
        //API Routes
        login(req, res, db)
        signup(req, res, db)
        getAllProducts(req, res, db)
        getAllTags(req, res, db)
        getProductsByTag(req, res, db)
    })
    function LoadServer(){
        server.listen(3080,()=>{
            console.log('listening on port', 3080);
        })
    }
    function closeServer(){
        server.close()
    }
    if (require.main === module) {
        LoadServer()
    }else{
        exports.boot = LoadServer
        exports.shutdown = closeServer
    }
})