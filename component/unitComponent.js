import elementCreator from "../elementCreator";
import {controlller} from "../stateManager";
import header from "./pug/header.pug"
import card from "./pug/card.pug"
import cardHolder from "./pug/cardHolder.pug"
import table from "./pug/table.pug"
import roll from "./pug/roll.pug"
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
    // imgSrc: [{src: './images/icons/cart.png', tag: 'carticon'}],
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
    // ,
    // populateCalls: function (){
    //     return (state, element)=>{
    //         element('amount-element').setAttribute('count', this.value.count)
    //     }
    // }
})

// elementCreator({
//     name: 'checkout-element',
//     pugFunc:
//     func: [
//         {
//             event: 'click',
//             callback: function (e){
//                 if ('checkout' in e.target.dataset) {
//                     alert('Checkout')
//                 }
//             }
//         }
//     ],
//     populateCalls: function(){
//         return (state, element)=>{
            
//             // let sum = data.map(e => e.price).reduce((sum, a)=> +sum + a, 0)
//             element('.subtotal').innerHTML = `$${sum}`
    
//         }    
//     }
// })



// elementCreator({
//     name: "amount-element",
//     pugFunc:
//     atr: ['count']
// })


// elementCreator({
//     name: "cms-element",
//     pugFunc:
//     atr: ['imgsrc', 'name', 'extra'],
//     func: [{
//         event: "click",
//         callback: function(e){
//             if ('delete' in e.target.dataset) {
//             }else if ('edit' in e.target.dataset) {
//             }
//         }
//     }]
// })

// elementCreator({
//     name: "cmsholder-element",
//     pugFunc:
//     populateCalls: function(){
//         return (state, element)=>{
//             element('holder').innerHTML = `
//             ${state.product.map(()=> `<cms-element></csm-element>`).join(' ')}
//             `
//         }
//     }
// })
