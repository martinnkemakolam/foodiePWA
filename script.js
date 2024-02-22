navigator.serviceWorker.register('sw.js')

let promptObj;

window.addEventListener('beforeinstallprompt', (e)=>{
    console.log(e)
    e.preventDefault()
    promptObj = e
    // showFooter(true)
})