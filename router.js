export let router = ()=>{
    let views = []
    let addRoute=(url, htmlString, isDyn)=>{
        let urlMatch = url.match(':id')
        if (urlMatch){
            let inCompleteRegex = url.slice(0, urlMatch.index)
            let regex = inCompleteRegex + '(\w+)'   
            views.push({htmlString, url, regexTest: new RegExp(regex)})
        }else{
            views.push({htmlString, url})
        }
    }
    
    let currentRoute =()=>{
        let app = document.querySelector('#app')
        let {hash} = window.location
        let current = views.find((e)=>{
            if (e.regexTest && e.regexTest.test(hash)) {
                return e
            }else if (e.url === hash) {
                return e
            }{
                
            }
        })
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