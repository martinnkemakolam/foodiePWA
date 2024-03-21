import elementCreator from "../elementCreator.js";
import {controlller} from "../stateManager.js";
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
import overlay from "./pug/overlay.pug"
import checkoutform from "./pug/checkoutform.pug"
import signin from "./pug/signin.pug"
import { objHasAnEmptyValue } from "../utility/utility.js";
import { getValue } from "../utility/utility.js";
let data = {
    imgsrc: undefined
}
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
    },{
        event: 'click',
        callback: function(e){
            if('login' in e.target.dataset) {
                controlller.showOverlay(document.querySelector('overlay-element'))
            }
        }
    }]
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
                    controlller.showOverlay(document.querySelector('cart-page'))
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
                controlller.deleteProduct(this.value.uid)
            }else if ('edit' in e.target.dataset) {
                // route to edit page
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
    atr: ['imgsrc'],
    func: [
        {
            event: "change",
            callback: function(e){
                if('file' in e.target.dataset){
                    let file = e.target.files[0]
                    let fileReader = new FileReader()
                    fileReader.onload=(e)=>{
                        let result = e.target.result
                        this.value.imgsrc = result
                        data.imgsrc = result
                        this.render()
                    }
                    fileReader.readAsDataURL(file)
                }
            }
        }
    ]
})

elementCreator({
    name: 'form-element',
    pugFunc: form,
    func: [
        {
            event: "click",
            callback: function(e){
                if ('add' in e.target.dataset) {
                    e.preventDefault();
                    
                    let payload = {
                        name: getValue.bind(this)("#name"),
                        detail: getValue.bind(this)("#detail"),
                        foodsrc: data.imgsrc,
                        price: getValue.bind(this)("#price")
                    }
                    
                    if (objHasAnEmptyValue(payload)){
                        alert('cant have an empty field')
                        return
                    }
                    controlller.addProduct(payload)
                }
            }
        },
    ]
})

elementCreator({
    name: 'overlay-element',
    pugFunc: overlay,
    func: [{
            event: 'click',
            callback: function(e){
                if ('close' in e.target.dataset) {
                    controlller.showOverlay(this)
                }
            }
        }]
})

elementCreator({
    name: 'checkoutform-element',
    pugFunc: checkoutform
})

elementCreator({
    name: 'signin-element',
    pugFunc: signin,
    func: [{
        event: 'click',
        callback: function(e){
            if('toggle' in e.target.dataset){
                controlller.switchForm(this)
            }
        }
    }]
})
// for view
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