const express = require('express');
const webpush = require('web-push');
let bodyParser = require('body-parser');
let http = require('http');

let app = express();

// Middleware
app.use(bodyParser())
app.set('port', 900)
app.get('/product', (req, res, next)=>{
    res.send({data: []})
})

let server = http.createServer(app)
function LoadServer(){
    server.listen(app.get('port'),()=>{
        console.log('listening on port', app.get('port'));
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