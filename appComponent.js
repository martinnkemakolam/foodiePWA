import {router} from './route.js'
let route = router()
export class app extends HTMLElement{
    connectedCallback(){
        route.addRoute('#/',`<view1-component></view1-component>`)
        route.addRoute('#/cart',`<view2-component></view2-component>`)
        route.addRoute('#/checkout',`<view3-component></view3-component>`)
        route.start()
    }
    render=(str)=>{
        console.log('str', str)
        this.innerHTML = str
    }
}

customElements.define('app-component', app)