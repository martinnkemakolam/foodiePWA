const assert = require('assert');
// const { it } = require('mocha');
const mongoose = require('mongoose');
const { boot, shutdown } = require('../index.cjs');
let connectionString = "mongodb://localhost:27017/FoodiePWA"
describe('server tests', ()=>{
    before(()=>{
        boot()
    })
    it('should respond to get', ()=>{
        console.log('work')
        fetch('localhost:900').then((res)=>{
           assert.ok(res.ok)
        })
    })
    it('should get data from mongodb', async()=>{
        console.log('work')
        mongoose.connect(connectionString)
        let productModel = mongoose.model('product', {product: String})
        let product = new productModel({product: 'hey'})
        product.save((err, result)=>{
            if(err) {
                console.error(err)
                // return
                process.exit(1)
            }
            console.log('this is', result.product)
            // assert(true, result.product.length > 0)
            process.exit(0)
        })
    })
    after(()=>{
        shutdown()
    })
})