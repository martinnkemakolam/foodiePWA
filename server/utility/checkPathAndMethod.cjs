module.exports = ({req,method, acceptedPath, auth, cb})=>{
    // console.log('runn', req.url, req.method)
    if (req.method === method && req.path === acceptedPath){
        if(auth){
            cb()
        }else{
            cb()
        }
        return false
    }
}