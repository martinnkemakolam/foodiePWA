module.exports = (req,method,url,cb)=>{
    console.log('runn', req.url, req.method)
    if (req.method === method && req.url === url){
        console.log('runnn')
        cb()
    }
}