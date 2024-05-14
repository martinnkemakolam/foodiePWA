import {router} from "./router.js"
import { controlller } from "./stateManager.js"
import('./unitComponent.js')

let route = router()
class app extends HTMLElement{
    connectedCallback(){
        route.addRoute('#/',(param)=>`
        <product-page param=${param}></product-page>
        `)
        route.addRoute('#/cart',(param)=>`
        <cart-page param=${param}></cart-page>
        `)
        route.addRoute('#/cms',(param)=>`
        <cms-page param=${param}></cms-page>
        `)
        route.addRoute('#/cms/add',(param)=>`
        <add-page param=${param}></add-page>
        `)
        route.addRoute('#/cms/edit/:id',(param)=>`
        <edit-page param=${param}></edit-page>`)
        route.addRoute('#/orders', (param)=> `
        <order-page param=${param}></order-page>`)
        route.addRoute('#/product/:id', (param)=>`
        <dynamicproduct-page param=${param}></dynamicproduct-page>
        `)
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
    e.preventDefault()
    promptObj = e
    controlller.showBanner()
})
window.addEventListener('appinstalled', ()=>{
    console.log('called')
    controlller.hideBanner()
})

export let promptEvent= ()=>{
    promptObj.userChoice.then((choice)=>{
        if (choice === 'accepted'){
            controlller.hideBanner()
        }else{
            controlller.showBanner()
        }
    })
    return {
        installFunc:()=> promptObj.prompt(),
    }
}

