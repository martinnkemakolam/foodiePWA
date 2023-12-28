// let cache = await caches.open('cache1')
let arrOfRequest = ['index.html', 'script.js', 'style.css', '/images/burger.jpg', '/images/images.jpg', '/images/no food.png']
let fetchStrategy = async(reqString)=>{

    let cache = await caches.open('cache1')
    let cacheRes = await cache.match(reqString, {
        ignoreSearch: true
    })
    if (cacheRes) {
        let newData = await fetch(reqString.clone())
        cache.put(reqString, newData.clone())
        return cacheRes 
    }
    let reqToCache = reqString.clone()
    let data = await fetch(reqToCache)
    if (data.status === 200) {
        cache.put(reqToCache, data.clone())
        // return data
    }
    return data
    // console.log(cacheRes)
    // return fetch(reqString)
}

oninstall=(evt)=>{
    evt.waitUntil(
        (async()=>{
            let cache = await caches.open('cache1')
            return cache.addAll(arrOfRequest)
        })()// setTimeout(()=> console.log('called'), 4000)
    )
}

onactive=(evt)=>{
    evt.skipWaiting()
}

onfetch= async(evt)=>{
    let req = evt.request
    // let cacheResult = await cache.match(req)
    evt.respondWith(
        // arrOfRequest.filter(async(eleReq)=>{
        //     if (req === eleReq) {                
        //         let match = await cache.match(eleReq)
        //         return match
        //     }else{
                
        //     }
        // })
        fetchStrategy(req)
    )
}

//  offline operation 
