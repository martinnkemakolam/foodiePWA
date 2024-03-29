import {router} from "./router.js"
import data from "./component/unitComponent.js"
// import './style.css'
// we can't seem to work with offline files and importing files 
let route = router()
class app extends HTMLElement{
    connectedCallback(){
        route.addRoute('#/',(param)=>`<product-page param=${param}></product-page>`)
        route.addRoute('#/cart',(param)=>`<cart-page param=${param}></cart-page>`)
        route.addRoute('#/cms',(param)=>`<cms-page param=${param}></cms-page>`)
        route.addRoute('#/cms/add',(param)=>`<add-page param=${param}></add-page>`)
        route.addRoute('#/cms/edit/:id',(param)=>`<edit-page param=${param}></edit-page>`)
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