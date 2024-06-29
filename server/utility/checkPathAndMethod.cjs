module.exports = (req,method, acceptedPath,cb)=>{
    // console.log('runn', req.url, req.method)
    if (req.method === method && req.path === acceptedPath){
        // console.log('runnn')
        cb()
    }
}