// state management
let state = {
    cart: []
}
addtocart=(arg)=>{
    state.cart.push(arg)
}
function elementCreator({name,atr,template,func,imgSrc,populateCalls}) {
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
        }
        render(){
            populateCalls && populateCalls.call(this)
            this.innerHTML = ''
            let temp = document.querySelector(`${template}`).content
            // console.log(temp)
            let clone  = temp.cloneNode(true)
            func.forEach(({event,callback})=>{
                this.addEventListener(event, callback, false)
            })
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
        callback: (e)=>{
            if ('input' in e.target.dataset) {
                console.log('worked', e.target.value);   
            }
        },
    }, {
        event: 'change',
        callback: (e)=>{
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
    atr: ['foodsrc', 'name', 'detail', 'price'],
    func: [{
        event: 'click',
        callback: (e)=>{
            if('addtocart' in e.target.dataset) {
                console.log('called', e.target.dataset)
            }    
        }
    }],
    imgSrc: [{src: './images/icons/cart.png', tag: 'carticon'}]
})