const assert = require('assert');
// const { it } = require('mocha');
const { boot, shutdown } = require('../index.cjs');
// let connectionString = "mongodb://localhost:27017/FoodiePWA"
describe('server tests', ()=>{
    before(()=>{
        boot()
    })
    it('should respond to post request', ()=>{
        fetch('https://localhost:3080/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                data: 'My data'
            })
        }).then(async(res)=>{
            console.log(res, text)
            let text = await res.text()
            assert.equal(text, 'My data')
        })
    })
    after(()=>{
        shutdown()
    })
})