let router = ()=>{
    let views = []
    let addRoute=(url, htmlString)=>{
        views.push({url, htmlString})
    }
    
    let currentRoute =()=>{
        let {hash} = window.location
        let current = views.find((e)=> e.url === hash)
        if (current) {
            document.querySelector('#app').render(current.htmlString)
        }else{
            document.querySelector('#app').render('no page found')
        }
    }
    let start=()=>{
        addEventListener('hashchange', currentRoute)
        if (!location.hash) {
            location.hash = '#/'
        }
        currentRoute()
    }
    return {
        addRoute, start
    }
}

let stateManager =()=>{
    return {
    }
} 
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