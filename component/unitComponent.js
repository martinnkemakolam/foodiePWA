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
import edit from "./pug/edit.pug"
import order from "./pug/order.pug"
import footer from "./pug/footer.pug"
import notification from "./pug/notification.pug"
import dynproduct from "./pug/product[id].pug"
import productdetail from "./pug/productdetail.pug"
import { objHasAnEmptyValue } from "../utility/utility.js";
import { getValue } from "../utility/utility.js";
import { promptEvent } from "../appComponent.js";
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
                controlller.showNotifications('Added to cart', `${this.value.name + ' at $'+ this.value.price} has been added to your cart`, this.value.src)
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
    atr: ['imgsrc', 'name', 'extra', 'price', 'uid'],
    func: [{
        event: "click",
        callback: function(e){
            if ('delete' in e.target.dataset) {
                console.log(this.value.uid)
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
                        document.querySelector('form-element').setAttribute('imgsrc', result)
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
    atr: ['name', 'detail', 'price', 'imgsrc', 'edit', 'uid'],
    func: [
        {
            event: "click",
            callback: function(e){
                e.preventDefault()
                if ('add' in e.target.dataset) {
                    let payload = {
                        name: getValue.bind(this)("#name"),
                        detail: getValue.bind(this)("#detail"),
                        foodsrc: this.value.imgsrc,
                        price: getValue.bind(this)("#price")
                    }
                    if (objHasAnEmptyValue(payload)){
                        controlller.showNotifications('Error message', 'All fields are required to be filled', './images/icons/error.jpeg')
                        return
                    }
                    controlller.addProduct(payload)
                }else if ('edit' in e.target.dataset) {
                    let payload = {
                        name: getValue.call(this, ["#name"]),
                        detail: getValue.call(this, ["#detail"]),
                        foodsrc: this.value.imgsrc,
                        count: 0,
                        price: getValue.call(this, ["#price"]),
                        uid: this.value.uid
                    }
                    if (objHasAnEmptyValue(payload)) {
                        controlller.showNotifications('Error message', 'All fields are required to be filled', './images/icons/error.jpeg')
                        return
                    }
                    controlller.editProduct(payload)
                }
            }
        }
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

elementCreator({
    name: "notification-element",
    pugFunc: notification
})

elementCreator({
    name: "footer-element",
    pugFunc: footer,
    func: [
        {
            event: "click",
            callback: function(e){
                if ("install" in e.target.dataset) {
                    let prompt = promptEvent()
                    prompt.installFunc()
                }
                if("close" in e.target.dataset) {
                    controlller.hideBanner()
                }
            }
        }
    ]
})
elementCreator({
    name: "productdetail-element",
    atr: ["name", "detail", "extradetail", "count", "price", "src", "uid"],
    pugFunc: productdetail,
    func: [
        {
            event: 'click',
            callback: function(e){
                if ('plus' in e.target.dataset) {
                    controlller.editProductCount(true, this.value.uid)
                    controlller.showNotifications('Added to cart', `${this.value.name + ' at $'+ this.value.price} has been added to your cart`, this.value.src)
                }
                if ('minus' in e.target.dataset) {
                    controlller.editProductCount(false, this.value.uid)
                    controlller.showNotifications('Removed from cart', `${this.value.name + ' at $'+ this.value.price} has been removed to your cart`, this.value.src)
                }
                if ('addtocart' in e.target.dataset) {
                    controlller.editProductCount(true, this.value.uid)
                    controlller.showNotifications('Added to cart', `${this.value.name + ' at $'+ this.value.price} has been added to your cart`, this.value.src)
                }
            }
        }
    ]
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

elementCreator({
    name: 'edit-page',
    pugFunc: edit
})

elementCreator({
    name: 'order-page',
    pugFunc: order
})

elementCreator({
    name: "dynamicproduct-page",
    pugFunc: dynproduct
})