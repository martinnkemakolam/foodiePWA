import { view } from "./stateManager.js"
export default function elementCreator({name,atr = [],pugFunc,func = []}) {
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
        attributeChangedCallback(name, oldValue, newValue){
            this.value[name] = newValue
        }
        render(){
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
}