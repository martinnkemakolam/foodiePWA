import {router} from "./router"
import data from "./component/unitComponent"
// import './style.css'
// we can't seem to work with offline files and importing files 
let route = router()
class app extends HTMLElement{
    connectedCallback(){
        route.addRoute('#/',`<product-page></product-page>`)
        route.addRoute('#/cart',`<cart-page></cart-page>`)
        route.addRoute('#/cms',`<view3-component></view3-component>`)
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