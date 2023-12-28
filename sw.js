// let cache = await caches.open('cache1')
let arrOfRequest = ['index.html', 'script.js', 'style.css', '/images/burger.jpg', '/images/images.jpg', '/images/no food.png']
let fetchStrategy = async(reqString)=>{

    let cache = await caches.open('cache1')
    let cacheRes = await cache.match(reqString)
    if (cacheRes) {
        let newData = await fetch(reqString)
        cache.put(reqString, newData.clone())
    }
    // console.log(cacheRes)
    return cacheRes || fetch(reqString)
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
