module.exports = (res, statusCode, response)=>{
    res.writeHead(statusCode, {
        'Content-Type': 'application/json'
    })
    res.end(JSON.stringify(response))
}