// const { response } = require("express");

// let cache = await caches.open('cache1')
let arrOfRequest = ['index.html', 'script.js', 'style.css', 'sw.js', 'manifest.json', '/images/burger1.png', '/images/burger2.png','/images/burger.jpg', '/images/images.png','/images/no food.png']
let fetchStrategy = async(reqString)=>{
    let openCache = await caches.open('cache1')
    let matchedCache = await openCache.match(reqString.clone());
    try {
        // let data = await fetch(reqString.clone());
        // if (matchedCache) {
        //     openCache.put(matchedCache, data)
        // }
        // return data.clone()



        let cache = await caches.open('cache1')
        let cacheRes = await cache.match(reqString, {
            ignoreSearch: true
        })
        let newData = await fetch(reqString.clone())
        if (cacheRes) {
            cache.put(reqString, newData.clone())
            return cacheRes 
        }
        return newData



        // let reqToCache = reqString.clone()
        // let data = await fetch(reqToCache)
        // if (data.status === 200) {
        //     cache.put(reqToCache, data.clone())
        //     // return data
        // }
        // return data
    } catch (error) {
        // if (req.method === 'GET' && req.headers.get('accept').includes('text/html')) {
        //             return caches.match('index.html')
        //         }
        return matchedCache || new Response()
    }
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
    self.skipWaiting();
}

onactive=(evt)=>{
    self.clients.claim();
}

onfetch= async(evt)=>{
    let req = evt.request
    // let cacheResult = await cache.match(req)
    // if (arrOfRequest.includes(req)) {
    //     fetch(req).catch(e=>{
    //         evt.respondWith()
    //     })   
    // }
    evt.respondWith(
        fetchStrategy(req)
        // caches.match(req).then(()=>{
        //     if (response) {
        //         return response
        //     }
        //     return fetch(req.clone()).then((res)=>{
        //         return res
        //     })
        // }).catch(()=>{
        //     if (req.method === 'GET' && req.headers.get('accept').includes('text/html')) {
        //         return caches.match('/')
        //     }
        // })
    )
}

//  offline operation 
