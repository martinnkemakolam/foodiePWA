let cacheName = 'marketplace'
let resourcesToCache = ['index.html', 'app.js', 'style.css', 'manifest.json', 'sw.js']

let fetchStrategy =async(request)=>{
    
    let match = await caches.match(request.clone(), {
        ignoreSearch: true
    })
    try{
        let freshData = await fetch(request.clone())
        if (freshData.ok && match) {
            let cache = await caches.open(cacheName)
            cache.put(request.clone(), freshData.clone())
            return freshData
        }else{
            return freshData
        }
    } catch (e) {
        if(match){
            return match
        }else{
            return request
        }
    }
}

oninstall= async(e)=>{
    e.waitUntil(
        caches.open(cacheName).then((cache)=>{
            cache.addAll(resourcesToCache)
        })
    )
    self.skipWaiting()
}

onfetch=(e)=>{
    let url = e.request
    e.respondWith(
        fetchStrategy(url)
    )
}