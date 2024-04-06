import {router} from "./router.js"
import data from "./component/unitComponent.js"
import { controlller } from "./stateManager.js"

let route = router()
class app extends HTMLElement{
    connectedCallback(){
        route.addRoute('#/',(param)=>`
        <notification-element></notification-element>
        <product-page param=${param}></product-page>
        <footer-element></footer-element>
        `)
        route.addRoute('#/cart',(param)=>`
        <notification-element></notification-element>
        <cart-page param=${param}></cart-page>
        <footer-element></footer-element>
        `)
        route.addRoute('#/cms',(param)=>`
        <notification-element></notification-element>
        <cms-page param=${param}></cms-page>
        <footer-element></footer-element>
        `)
        route.addRoute('#/cms/add',(param)=>`
        <notification-element></notification-element>
        <add-page param=${param}></add-page>
        <footer-element></footer-element>
        `)
        route.addRoute('#/cms/edit/:id',(param)=>`
        <notification-element></notification-element>
        <edit-page param=${param}></edit-page>
        <footer-element></footer-element>`)
        route.addRoute('#/orders', (param)=> `
        <order-page param=${param}></order-page>
        <footer-element></footer-element>`)
        route.addRoute('#/product/:id', (param)=>`
        <notification-element></notification-element>
        <dynamicproduct-page param=${param}></dynamicproduct-page>
        <footer-element></footer-element>`)
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
    promptObj= e
    // controlller.showFoater(e)
})

