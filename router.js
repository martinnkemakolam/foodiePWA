export let router = ()=>{
    let views = []
    let addRoute=(url, htmlString)=>{
        let urlMatch = url.match(':id')
        if (urlMatch){
            let inCompleteRegex = url.slice(0, urlMatch.index)
            let regex = inCompleteRegex + '(.+)'   
            views.push({htmlString, url, regexTest: new RegExp(regex)})
        }else{
            views.push({htmlString, url})
        }
    }
    
    let currentRoute =()=>{
        let app = document.querySelector('#app')
        let {hash} = window.location
        let param
        let current = views.find((e)=>{
            if (e.regexTest && e.regexTest.test(hash)) {
                let arr = hash.split('/')
                param = arr[arr.length - 1]
                return e
            }else if (e.url === hash) {
                param = undefined
                return e
            }
        })
        if (current) {
            app.render(current.htmlString(param))
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