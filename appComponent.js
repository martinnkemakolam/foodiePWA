import {router} from "./router"
import view1 from "./view/viewComponent"
import data from "./component/unitComponent"
// we can't seem to work with offline files and importing files 
let route = router()
class app extends HTMLElement{
    connectedCallback(){
        route.addRoute('#/',`<view1-component></view1-component>`)
        route.addRoute('#/cart',`<view2-component></view2-component>`)
        route.addRoute('#/checkout',`<view3-component></view3-component>`)
        route.start()
    }
    render=(str)=>{
        this.innerHTML = str
    }
}

customElements.define('app-component', app)

// register SW
navigator.serviceWorker.register('sw.js')

let promptObj;

window.addEventListener('beforeinstallprompt', (e)=>{
    console.log(e)
    e.preventDefault()
    promptObj = e
    // showFooter(true)
})