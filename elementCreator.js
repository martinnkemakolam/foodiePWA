import { view } from "./stateManager"
// import pug from "pug"
export default function elementCreator({name,atr = [],pugFunc,func = [],populateCalls}) {
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
            // if (oldValue !== newValue) {
                this.render()   
            // }
        }
        render(){
            this.innerHTML = ''
            let pugHtml = pugFunc({prop: this.value, state: view()})
            this.innerHTML = pugHtml
            // pug.renderFile(pugPath, this.value, (err, html)=>{
            //     if (err) {
            //         console.error(err)
            //         return
            //     }
            //     console.log(html)
            // })
            // console.log(temp)
            func.forEach(({event,callback})=>{
                this.addEventListener(event, callback, false)
            })
            // let atributeAdder=(atr=[], arg)=>{
            //     atr.forEach((ele)=>{
            //         // console.log(ele
            //         if (arg.dataset && ele.includes('src') && ele in arg.dataset && arg.tagName === 'IMG') {
            //             // console.log('reached 2')
            //             arg.src = this.value[ele]
            //             return
            //         }
            //         if( arg.dataset && ele in arg.dataset){
            //             // console.log('reached 1')
            //             arg.innerHTML = this.value[ele]
            //             return
            //         }
            //     })
            // }
            // let imageAdder=(imgSrc=[], arg)=>{
            //     imgSrc.forEach(({src, tag})=>{
            //         if (arg.dataset && tag in arg.dataset) {
            //             arg.src = src
            //         }
            //     })
            // }
            // this.childNodes.forEach(child=>{
            //     let findNode =(arg)=> {
            //         // console.log(arg)
            //         if(arg.tagName !== 'SELECT' && arg.tagName !== 'BUTTON' && arg.hasChildNodes()){
            //             atributeAdder(atr, arg)
            //             arg.childNodes.forEach(node=> findNode(node))
            //         }else{
            //             // console.log(arg.dataset)
            //             // console.log(arg.tagName)
            //             atributeAdder(atr, arg)           
            //             // func && func.forEach(()=>{
                            
            //             //     if( arg.dataset && target in arg.dataset ){
            //             //         console.log('reached', target, arg.dataset, arg)
            //             //         arg.addEventListener(event, callback)
            //             //     }
            //             // })
            //             imageAdder(imgSrc, arg)
            //         }
            //     }
            //     findNode(child)
            // })
            // this.appendChild(clone)
            if (populateCalls){
                let call = populateCalls.call(this)
                call(view(), (arg)=> this.querySelector(arg))
            }
        }
        connectedCallback(){
            // console.log('connected', this)
            // console.log(pugPath)
            this.render()
        }
    }
    customElements.define(name, test)
}