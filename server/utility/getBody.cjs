module.exports = (request)=>{
    return new Promise((resolve, reject)=>{
        let body = []
        request.on('data', (chunk)=>{
            body.push(chunk)
        }).on('end', ()=>{
            body = JSON.parse(Buffer.concat(body).toString())
            resolve(body)
        }).on('error', err=>{
            console.error(err.stack)
            reject(err.stack)
        })
    })
}