import elementCreator from "../elementCreator";
import { controlller, view } from "../stateManager";

// state management


// have each function call a render on element in mention

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
        callback: function(){
            return (e)=>{
                if ('option' in e.target.dataset) {
                    console.log('worked', e.target.value);   
                }
            }
        }
    }],
    imgSrc: [],
    populateCalls: null
})
elementCreator({
    name: 'card-element',
    template: '#foodcard',
    atr: ['foodsrc', 'name', 'detail', 'price', 'count', 'uid'],
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
    imgSrc: [{src: './images/icons/cart.png', tag: 'carticon'}],
    populateCalls: function(){
    }
})

elementCreator({
    name: 'holder-element',

    template: '#container',
    populateCalls: function(){
        let model = view()
        if (model.product.length > 0) {
            console.log(model.product)
            this.querySelector('.foodGrid').innerHTML = model.product.map(ele => `<card-element name="${ele.name}" foodsrc="${ele.foodsrc}" detail="${ele.detail}" price="$${ele.price}" count="${ele.count}" uid="${ele.uid}">
            </card-element>`).join(' ')
        }
    }
})