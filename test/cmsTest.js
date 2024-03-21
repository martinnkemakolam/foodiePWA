import assert from 'assert'
import {view, controlller} from '../stateManager.js'
let {model} = view()
let {product} = model
describe('When user is using CMS functionality',()=>{
    it('should add a new data to model when user uses addProduct func', ()=>{
        assert.equal(0, product.length)
        controlller.addProduct({
            name: 'Burger Ten',
            foodsrc: "./images/burger.jpg",
            description: "This is a description for the burger product",
            price: 200
        })
        assert.equal(1, product.length)
    })
    it('should edit a product in model', ()=>{
        controlller.editProduct({
            name: 'West Central cloth',
            foodsrc: "./images/burger.jpg",
            description: "This is a description for the burger product",
            price: 200,
            uid: model.product[0].uid
        })
        assert.equal(model.product[0].name, 'West Central cloth')
    })
    it('should delete added ptoduct', ()=>{
        assert.equal(model.product.length, 1)
        controlller.deleteProduct(model.product[0].uid)
        assert.equal(model.product.length, 0)
    })
})