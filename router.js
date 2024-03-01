export let router = ()=>{
    let views = []
    let addRoute=(url, htmlString)=>{
        views.push({url, htmlString})
    }
    
    let currentRoute =()=>{
        let app = document.querySelector('#app')
        let {hash} = window.location
        let current = views.find((e)=> e.url === hash)
        if (current) {
            app.render(current.htmlString)
        }else{
            app.render('no page found')
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