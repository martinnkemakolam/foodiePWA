import {router} from "./router.js"
import data from "./component/unitComponent.js"
// import './style.css'
// we can't seem to work with offline files and importing files 
let route = router()
class app extends HTMLElement{
    connectedCallback(){
        route.addRoute('#/',`<product-page></product-page>`)
        route.addRoute('#/cart',`<cart-page></cart-page>`)
        route.addRoute('#/cms',`<cms-page></cms-page>`)
        route.addRoute('#/cms/add', `<add-page></add-page>`)
        route.addRoute('#/cms/edit/:id', `<edit-page></edit>`)
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