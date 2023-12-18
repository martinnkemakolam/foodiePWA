// let cache = await caches.open('cache1')
let arrOfRequest = ['index.html', 'script.js', 'style.css', 'sw.js','manifest.json', '/images/burger.jpg', '/images/burger1.png', '/images/burger2.png' , '/images/images.jpg', '/images/no food.png']
let fetchStrategy = async(reqString)=>{
    let cache = await caches.open('cache1')
    let cacheRes = await cache.match(reqString) 
    let newData = await fetch(reqString)
    cache.put(reqString, newData.clone())
    return cacheRes || newData
}

oninstall=(evt)=>{
    evt.waitUntil(
        (async()=>{
            let cache = await caches.open('cache1')
            cache.addAll(arrOfRequest)
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
