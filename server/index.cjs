const respnse = require('./utility/respnse.cjs')

const getSingleProduct = require('./paths/getSingleProduct.cjs')
const http = require('http');
// let URL = require('node:url');
const login = require('./paths/login.cjs');
const {dbConnection, getDb} = require("./utility/databaseUtil.cjs");
const signup = require('./paths/signup.cjs');
const getAllProducts = require('./paths/getAllProducts.cjs');
const getAllTags = require('./paths/getAllTags.cjs');
const getProductsByTag= require('./paths/getProductsByTag.cjs');


const observer = {
    routes: [],
    addRoute:(route)=> {
        observer.routes.push(route)
        return observer
    },
    callAllRoutes:(req, res, db)=>{
        const value = observer.routes.every(route=>{
            const routeValue = route(req, res, db)
            console.log(routeValue, 'routevalue')
            if (typeof routeValue === "undefined") {
                return true
            }
            return routeValue
        })
        return value
    }
}

//ADD API Routes to observer
observer
.addRoute(login)
.addRoute(signup)
.addRoute(getAllProducts)
.addRoute(getAllTags)
.addRoute(getProductsByTag)
.addRoute(getSingleProduct)

dbConnection((err)=>{
    if(err){
        console.error(err)
        return
    }
    const server = http.createServer(async(req, res)=>{
        //MiddleWare
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        res.setHeader("Access-Control-Max-Age", 3600)

        if(req.method === 'OPTIONS'){
            res.end()
        }
        
        //db
        const db = getDb()
        const headers = res.getHeader('Authorization')
        // console.log(headers, res.headers)
        const url = new URL(req.url, `http://${req.headers.host}`);
        
        
        req.params = url.searchParams
        req.href = url.href
        req.path = url.pathname
        console.log(req.params, req.href, req.path)
        let matchedRoute = observer.callAllRoutes(req, res, db)
        if (matchedRoute){
            console.log(matchedRoute, 'general val 2')
            respnse(res, 404, "No route found")
        }
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