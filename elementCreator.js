export default function elementCreator({name,atr = [],template,func = [],imgSrc = [],populateCalls}) {
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
            this.innerHTML = ''
            let temp = document.querySelector(`${template}`).content
            // console.log(temp)
            func.forEach(({event,callback})=>{
                this.addEventListener(event, callback, false)
            })
            let atributeAdder=(atr=[], arg)=>{
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
            }
            let imageAdder=(imgSrc=[], arg)=>{
                imgSrc.forEach(({src, tag})=>{
                    if (arg.dataset && tag in arg.dataset) {
                        arg.src = src
                    }
                })
            }
            let clone  = temp.cloneNode(true)
            clone.childNodes.forEach(child=>{
                let findNode =(arg)=> {
                    // console.log(arg)
                    if(arg.tagName !== 'SELECT' && arg.tagName !== 'BUTTON' && arg.hasChildNodes()){
                        atributeAdder(atr, arg)
                        arg.childNodes.forEach(node=> findNode(node))
                    }else{
                        // console.log(arg.dataset)
                        // console.log(arg.tagName)
                        atributeAdder(atr, arg)           
                        // func && func.forEach(()=>{
                            
                        //     if( arg.dataset && target in arg.dataset ){
                        //         console.log('reached', target, arg.dataset, arg)
                        //         arg.addEventListener(event, callback)
                        //     }
                        // })
                        imageAdder(imgSrc, arg)
                    }
                }
                findNode(child)
            })
            this.appendChild(clone)
            populateCalls && populateCalls.call(this)
        }
        connectedCallback(){
            console.log('connected', this)
            this.render()
        }
    }
    customElements.define(name, test)
}