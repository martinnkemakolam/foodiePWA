const assert = require('assert');
// const { it } = require('mocha');
const { boot, shutdown } = require('../index.cjs');
boot
shutdown
describe('server tests', ()=>{
    before(()=>{
        boot()
    })
    it('should respond to get', ()=>{
        fetch('localhost:900').then((res)=>{
           assert.ok(res.ok)
        })
    })
    it('should render a page with a text', ()=>{
        fetch('localhost:900').then((res)=>{
            return res.json()
         }).then(json =>{
            assert.equal('Our data', json.data)
         })
    })
    after(()=>{
        shutdown()
    })
})