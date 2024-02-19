// state management
let cloneDeep=(x)=>{
    return JSON.parse(JSON.stringify(x))
}

let model = {
    cart: [],
    product: [{
        name: 'Burger 1',
        foodsrc: '/images/burger.jpg',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis consequatur expedita non iste eveniet accusantium alias aliquid officia illum.',
        price: '10',
        count: '0'
    }]
}
// 'foodsrc', 'name', 'detail', 'price', 'count'
// let view =()=> cloneDeep(model)

let controlller = {
    addToCart: (arg, element)=>{
        model.cart.push(arg)
        element.render()
    }
}
// have each function call a render on element in mention
addtocart=(arg, ele)=>{
    state.cart.push(arg)
    ele.render()
}
function elementCreator({name,atr = [],template,func = [],imgSrc = [],populateCalls}) {
    class test extends HTMLElement {
        constructor(){
            super()
        }
        static observedAttributes = atr
        value = {}
        populateValue=(()=>{
            atr.forEach((name)=>{
                this.value[name] = ''
            })
        })()
        attributeChangedCallback(name, oldValue, newValue){
            this.value[name] = newValue
            // console.log('called')
            this.render()
            populateCalls && populateCalls.call(this)
        }
        render(){
            this.innerHTML = ''
            let temp = document.querySelector(`${template}`).content
            // console.log(temp)
            func.forEach(({event,callback})=>{
                this.addEventListener(event, callback, false)
            })
            let clone  = temp.cloneNode(true)
            clone.childNodes.forEach(child=>{
                let findNode =(arg)=> {
                    // console.log(arg)
                    if(arg.tagName !== 'SELECT' && arg.tagName !== 'BUTTON' && arg.hasChildNodes()){
                        arg.childNodes.forEach(node=> findNode(node))
                    }else{
                        // console.log(arg.dataset)
                        // console.log(arg.tagName)
                        atr.forEach((ele)=>{
                            // console.log(ele
                            if (arg.dataset && ele.includes('src') && ele in arg.dataset && arg.tagName === 'IMG') {
                                // console.log('reached 2')
                                arg.src = this.value[ele]
                                return
                            }
                            if( arg.dataset && ele in arg.dataset){
                                // console.log('reached 1')
                                arg.innerHTML = this.value[ele]
                                return
                            }
                        })
                        // func && func.forEach(()=>{
                            
                        //     if( arg.dataset && target in arg.dataset ){
                        //         console.log('reached', target, arg.dataset, arg)
                        //         arg.addEventListener(event, callback)
                        //     }
                        // })

                        imgSrc && imgSrc.forEach(({src, tag})=>{
                            if (arg.dataset && tag in arg.dataset) {
                                arg.src = src
                            }
                        })
                        
                    }
                }
                findNode(child)
            })
            this.appendChild(clone)
        }
        connectedCallback(){
            this.render()
        }
    }
    customElements.define(name, test)
}

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
    atr: ['foodsrc', 'name', 'detail', 'price', 'count'],
    func: [{
        event: 'click',
        callback: function (e) {
            if('addtocart' in e.target.dataset) {
                let argument = {
                    name: this.value.name,
                    foodsrc: this.value.foodsrc,
                    detail: this.value.detail,
                    price: this.value.price,
                    count: 1
                }
                controlller.addToCart(argument, document.querySelector())
            } else if ('minus' in e.target.dataset) {
                console.log('called minus', e.target.dataset)
            }else if ('plus' in e.target.dataset){
                console.log('called plus', e.target.dataset)
            }        
        }
    }],
    imgSrc: [{src: './images/icons/cart.png', tag: 'carticon'}],
    populateCalls: function(){
        // this.setAttribute('count', '1')
    }
})

elementCreator({
    name: 'holder-element',

    template: '#container',
    populateCalls: function(){
        // if (model.product.length > 0) {
        //     this.querySelector('.foodGrid').innerHTML = model.product.map(ele => `<card-element name="${ele.name}" foodsrc="${ele.foodsrc}" detail="${ele.detail}" price="$${ele.price}" count="${ele.count}">
        //     </card-element>`).join(' ')
        // }
        console.log(document.querySelector('.foodGrid'))
    }
})