import { subscriber, view } from "./stateManager.js"
export default function elementCreator({name,atr = [],pugFunc,func = [], ref, selector}) {
    class test extends HTMLElement {
        constructor(){
            super()
        }
        static observedAttributes = [...atr, 'param']
        value = {
            param: undefined 
        }
        populateValue=(()=>{
            atr.forEach((name)=>{
                this.value[name] = ''
            })
        })()
        selector = selector?.length > 0 ? [...selector] : []
        attributeChangedCallback(name, oldValue, newValue){
            this.value[name] = newValue
        }
        reference= ref || [[]]
        render(){
            console.log(this.selector)
            let virtualDom = this.cloneNode(true)
            let pugHtml = pugFunc({prop: this.value, state: view(), url: document.location.hash})
            virtualDom.innerHTML = pugHtml
            this.innerHTML = virtualDom.innerHTML
            func.forEach(({event,callback})=>{
                this.addEventListener(event, callback, false)
            })
        }
        connectedCallback(){
            this.render()
        }
    }
    customElements.define(name, test)
    subscriber(name)
    return `<${name}></${name}>`
}