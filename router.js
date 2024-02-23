export let router = ()=>{
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