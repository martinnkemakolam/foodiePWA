import { subscriber, view } from "./stateManager.js"

// function createProxy(target) {
//     return new Proxy(target, {
//         set(target, property, value, receiver) {
//             console.log(target, property, value, receiver)y
//             if (value && typeof value === 'object') {
//                 console.log(target, property, value, receiver)
//                 value = createProxy(value);
//             }
//             console.log(target, property, value, receiver)
//             return Reflect.set(target, property, value, receiver);
//         }
//     });
// }


export default function elementCreator({name,atr = [],pugFunc,func = [], ref, selector,  privateState= {}}) {
    
    class test extends HTMLElement {
        constructor(){
            super()
        }
        static observedAttributes = [...atr, 'param']
        value = {
            param: undefined 
        }
        privateValue = {
            isLoading: false,
            ...privateState,
        }
        loadedEvent = new Event('loaded')
        
        
        // privateValue2 = createProxy({
        //     isLoading: false,
        //     nest: {
        //         value: {
        //             boy: ''
        //         }
        //     },
        //     ...privateState,
        // })


        setState=(watchValue, newValue)=>{

            
            // sets privateValue and causes a rerender, doesn't support nested routes


            let oldValue = this.privateValue[watchValue]
            if (JSON.stringify(oldValue) !== JSON.stringify(newValue)) {
                this.privateValue[watchValue] = newValue
                this.render()
            }
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

            // const shadow = this.attachShadow({mode: "open"})
            // let pugHtml = pugFunc({prop: this.value, state: view(), url: document.location.hash, privateState: this.privateValue})
            // shadow.innerHTML = pugHtml
            // func.forEach(({event,callback})=>{
            //     shadow.addEventListener(event, callback.bind(this), false)
            // })


            let pugHtml = pugFunc({prop: this.value, state: view(), url: document.location.hash, privateState: this.privateValue})
            this.innerHTML = pugHtml
            func.forEach(({event,callback})=>{
                this.addEventListener(event, callback, false)
            })
        }
        connectedCallback(){
            this.render()
            this.dispatchEvent(this.loadedEvent)
        }
    }
    customElements.define(name, test)
    subscriber(name)
    return `<${name}></${name}>`
}