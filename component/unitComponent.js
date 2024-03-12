import elementCreator from "../elementCreator";
import {controlller} from "../stateManager";
import header from "./pug/header.pug"
import card from "./pug/card.pug"
import cardHolder from "./pug/cardHolder.pug"
import table from "./pug/table.pug"
import roll from "./pug/roll.pug"
import checkout from "./pug/checkout.pug"
import count from "./pug/count.pug"
import cms from "./pug/cms.pug"
import cmsholder from "./pug/cmsholder.pug"
import product from "./pug/product.pug"
import cart from "./pug/cart.pug"
import cmspage from "./pug/cmspage.pug"
import add from "./pug/add.pug"
import img from "./pug/img.pug"
import form from "./pug/form.pug"
// state management


// have each function call a render on element in mention
let data = {}
export default data
elementCreator({
    name: 'header-element',
    atr: [],
    pugFunc: header,
    func: [{
        event: 'input',
        callback: function(e){
                if ('input' in e.target.dataset) {
                    console.log('worked', document.querySelector('.foodGrid'), this);
                }
        },
    }, {
        event: 'change',
        callback: function(e){
            if ('option' in e.target.dataset) {
                console.log('worked', e.target.value);   
            }
        }
    }],
    imgSrc: [],
    populateCalls: null
})
elementCreator({
    name: 'card-element',
    pugFunc: card,
    atr: ['src', 'name', 'detail', 'count', 'uid', 'price'],
    func: [{
        event: 'click',
        callback: function (e) {
            if('addtocart' in e.target.dataset) {
                controlller.editProductCount(true, this.value.uid, document.querySelector('.foodGrid').parentElement)
                // console.log(model.product)
            } else if ('minus' in e.target.dataset) {
                controlller.editProductCount(false, this.value.uid, document.querySelector('.foodGrid').parentElement)
                // console.log(model.product)
            }else if ('plus' in e.target.dataset){
                // console.log('called plus', e.target.dataset)
                controlller.editProductCount(true, this.value.uid, document.querySelector('.foodGrid').parentElement)
                // console.log(model.product)
            }        
        }
    }],
})

elementCreator({
    name: 'holder-element',
    pugFunc: cardHolder

})

elementCreator({
    name: 'table-element',
    pugFunc: table
})

elementCreator({
    name: 'roll-element',
    pugFunc: roll,
    atr: ['imgsrc', 'name', 'number', 'count', 'price', 'total'],
    func: [{
        event: 'click',
        callback: function(e){
            if ('plus' in e.target.dataset) {
                controlller.editProductCount(true, this.value.number, [document.querySelector('table-element'), document.querySelector('checkout-element')])   
            }else if('minus' in e.target.dataset) {
                controlller.editProductCount(false, this.value.number, [document.querySelector('table-element'), document.querySelector('checkout-element')])   
            }else if ('remove' in e.target.dataset){
                controlller.removeFromCart(this.value.number, [document.querySelector('table-element'), document.querySelector('checkout-element')])
            }
        }
    }]
})

elementCreator({
    name: 'checkout-element',
    pugFunc: checkout,
    func: [
        {
            event: 'click',
            callback: function (e){
                if ('checkout' in e.target.dataset) {
                    alert('Checkout')
                }
            }
        }
    ]
})



elementCreator({
    name: "amount-element",
    pugFunc: count,
    atr: ['count']
})


elementCreator({
    name: "cms-element",
    pugFunc: cms,
    atr: ['imgsrc', 'name', 'extra', 'price'],
    func: [{
        event: "click",
        callback: function(e){
            if ('delete' in e.target.dataset) {
            }else if ('edit' in e.target.dataset) {
            }
        }
    }]
})

elementCreator({
    name: "cmsholder-element",
    pugFunc: cmsholder
})

elementCreator({
    name: 'addimage-element',
    pugFunc: img,
    atr: ['imgsrc']
})

elementCreator({
    name: 'form-element',
    pugFunc: form,
})

// for views 

elementCreator({
    name: 'product-page',
    pugFunc: product
})

elementCreator({
    name: 'cart-page',
    pugFunc: cart
})

elementCreator({
    name: 'cms-page',
    pugFunc: cmspage
})

elementCreator({
    name: 'add-page',
    pugFunc: add
})