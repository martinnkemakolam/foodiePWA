let observed = []

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
            console.log('called')
            this.render()
        }
        render(){
            populateCalls && populateCalls.call(this)
            this.innerHTML = ''
            let temp = document.querySelector(`${template}`).content
            // console.log(temp)
            let clone  = temp.cloneNode(true)
            clone.childNodes.forEach(child=>{
                let findNode =(arg)=> {
                    // console.log(arg)
                    if(arg.tagName !== 'SELECT' && arg.hasChildNodes()){
                        arg.childNodes.forEach(node=> findNode(node))
                    }else{
                        // console.log(arg.dataset)
                        atr.forEach((ele)=>{
                            // console.log(ele
                            if (arg.dataset && ele.includes('src') && ele in arg.dataset && arg.tagName === 'IMG') {
                                console.log('reached 2')
                                arg.src = this.value[ele]
                                return
                            }
                            if( arg.dataset && ele in arg.dataset){
                                console.log('reached 1')
                                arg.innerHTML = this.value[ele]
                                return
                            }
                        })
                        func.forEach(({event, target, callback})=>{
                            if( arg.dataset && target in arg.dataset ){
                                // console.log(arg)/
                                console.log('reached', target, arg.dataset, arg)
                                arg.addEventListener(event, callback)
                                // console.log(arg)
                            }
                        })
                        // let {src} = arg
                        // console.log(src)

                        imgSrc && imgSrc.forEach(({src, tag})=>{
                            if (arg.dataset && tag in arg.dataset) {
                                // console.log('img')
                                console.log(arg)
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
            console.log('worked', e.target.value);
        },
        target: 'input'
    }, {
        event: 'change',
        callback: (e)=>{
            console.log('worked', e.target.value);
        },
        target: 'option'
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
        callback: ()=>{
            console.log('worked')
        },
        target: 'addtocart'
    }]
})