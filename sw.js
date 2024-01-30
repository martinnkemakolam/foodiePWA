// const { response } = require("express");

// let cache = await caches.open('cache1')
let arrOfRequest = ['./','./index.html', './unitComponent.js', './appComponent.js', './viewComponent.js','./script.js', './style.css', './manifest.json','./images/burger.jpg', './images/images.png','./images/no food.png']
let fetchStrategy = async(reqString)=>{
    // if (reqString.destination === 'script') {
    //     try {
    //         // console.log(reqString.clone())
    //         reqString.headers['Content-Type'] = 'application/javascript'   
    //     } catch (error) {
    //         console.log('this is an', error.message)
    //     }
    // }
    let openCache = await caches.open('cache2')
    let matchedCache = await openCache.match(reqString.clone(), {
        ignoreSearch: true
    });
    try {
        // let data = await fetch(reqString.clone());
        // if (matchedCache) {
        //     openCache.put(matchedCache, data)
        // }
        // return data.clone()



        let cache = await caches.open('cache2')
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
        // let reg = new RegExp(`https?://(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*(?:\/[^\/\s]*)?\.js$`)
        // console.log(matchedCache.url)
        // if (reg.test(matchedCache.url)) {
        //     matchedCache.headers.set('content-type', 'application/javascript')   
        //     console.log(matchedCache,  ...matchedCache.headers)
        // }
        return matchedCache || new Response()
    }
    // console.log(cacheRes)
    // return fetch(reqString)
}

oninstall=(evt)=>{
    evt.waitUntil(
        (async()=>{
            let cache = await caches.open('cache2')
            return cache.addAll(arrOfRequest)
        })()// setTimeout(()=> console.log('called'), 4000)
    )
    self.skipWaiting();
}

onactive=(evt)=>{
    // evt.waitUntil(
    //     caches.open('cache1').then(cache => cache.)
    // )
    self.clients.claim();
}


onsync=(evt)=>{
    if(evt.tag === 'place-order'){
        evt.waitUntil(
            fetch('/images/burger1.png')
        )
    }
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
