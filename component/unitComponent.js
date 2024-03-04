import elementCreator from "../elementCreator";
import {controlller} from "../stateManager";

// state management


// have each function call a render on element in mention
let data = {}
export default data
elementCreator({
    name: 'header-element',
    atr: [],
    template: '#header',
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
    template: '#foodcard',
    atr: ['foodsrc', 'name', 'detail', 'count', 'uid', 'price'],
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
    // imgSrc: [{src: './images/icons/cart.png', tag: 'carticon'}],
    populateCalls: function(){
        // console.log(this)
        return(state, element)=>{
            console.log(this.value.count)
            element('amount-element').setAttribute('count', this.value.count)
        }
    }
})

elementCreator({
    name: 'holder-element',
    template: '#container',
    populateCalls: function(){
        return (state, element)=>{
            if (state.product.length > 0) {
                // console.log(model.product)
                element('.foodGrid').innerHTML = state.product.map(ele => `<card-element name="${ele.name}" foodsrc="${ele.foodsrc}" detail="${ele.detail}" price="$${ele.price}" count="${ele.count}" uid="${ele.uid}">
                </card-element>`).join(' ')
            }
        }
    }
})

elementCreator({
    name: 'table-element',
    template: '#table-element',
    populateCalls: function(){
        return (state, element)=>{
            let data = state.product.filter((ele)=>ele.count > 0)
            // console.log(data)
            if (state.product.length > 0) {
                element('tbody').innerHTML = `
                <tr>
                    <th class="wide">Product details</th>
                    <th class="medium">Quality</th>
                    <th class="medium">Price</th>
                    <th class="medium">Total</th>
                    <th class="medium"></th>
                </tr>
                ${
                    data.map(ele => `<roll-element imgSrc="${ele.foodsrc}" number="${ele.uid}" name="${ele.name}" count="${ele.count}" price="$${ele.price}" total="$${ele.price * ele.count}"></roll-element>`).join(' ')
                }
                `
            }
        }
    }
})

elementCreator({
    name: 'roll-element',
    template: '#roll-element',
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
    }],
    populateCalls: function (){
        return (state, element)=>{
            element('amount-element').setAttribute('count', this.value.count)
        }
    }
})

elementCreator({
    name: 'checkout-element',
    template: '#checkout-element',
    func: [
        {
            event: 'click',
            callback: function (e){
                if ('checkout' in e.target.dataset) {
                    alert('Checkout')
                }
            }
        }
    ],
    populateCalls: function(){
        return (state, element)=>{
            let data = state.product.filter((ele)=>ele.count > 0)
            let sum = 0
            data.forEach((ele)=>{
                sum += +ele.count * +ele.price
            })
            // let sum = data.map(e => e.price).reduce((sum, a)=> +sum + a, 0)
            element('.subtotal').innerHTML = `$${sum}`
    
        }    
    }
})



elementCreator({
    name: "amount-element",
    template: "#amount-element",
    atr: ['count']
})


elementCreator({
    name: "cms-element",
    template: "#cms-element",
    atr: ['imgsrc', 'name', 'extra'],
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
    template: "#cmsholder-element",
    populateCalls: function(){
        return (state, element)=>{
            element('holder').innerHTML = `
            ${state.product.map(()=> `<cms-element></csm-element>`).join(' ')}
            `
        }
    }
})