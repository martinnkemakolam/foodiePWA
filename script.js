let data = []
let cartBody = document.querySelector('.head')
let total = document.querySelector('.total p')
let cartAdder = document.querySelectorAll('.btn')
let last = document.querySelector('.shoppingCart')
let cartContent = document.querySelector('.bodyHold')
let removeAll = document.querySelector('.head button')
let restImg = document.querySelector('.rest')
let cartIcon = document.querySelector('.cart')
let cartRemove = document.querySelectorAll('.icon')
let myCart = document.querySelector('.myCart')
let checkoutBtn = document.querySelector('#checkout')
let orderPage = document.querySelector('.order')
let installBtn = document.querySelector('#install')
let menuBtn = document.querySelectorAll('.category')
let submit = document.querySelector('#submit')
let notification = document.querySelector('#notification')

let db = indexedDB.open('syncDatabase')
db.onupgradeneeded =(e)=>{
    db.result.createObjectStore('payloads')
}
navigator.serviceWorker.register('sw.js')
.then((sw)=>{
    if(sw.active === true){
        // submit.onclick=()=>{
        //     sw.sync.register('place-order').then(()=>{
        //         let payload = {
        //             address: '',
        //             city: '',
        //             state: '',
        //             number: '',
        //             name: '',
        //         }
        //         localStorage.setItem('place-order', JSON.stringify(payload))
        //     })
        // }
    }
})

// setting up push notification


// let subcription = await SW.pushManager.getSubscription()
// if (!subcription) {
//     SW.pushManager.subscribe({
//         userVisibleOnly: true,
//         applicationServerKey: ''
//     })
// }

let promptObj;

// let showCart = ()=>{
//     myCart.classList.remove('left')
// }


// const showNotifications = (arg)=>{
//     notification.innerHTML = arg
//     notification.style.left = "0"
//     setTimeout(()=>{
//         notification.style.left = "-100%"
//     }, 3000)
// }


// let removeCart = ()=>{
//     myCart.classList.add('left')
// }
// let showForm = ()=>{
//     orderPage.classList.add('show')
// }
// let removeForm = ()=>{
//     orderPage.classList.remove('show')
// }


// cartIcon.onclick = showCart


// cartRemove.forEach((ele)=>{
//     ele.onclick =()=>{
//         removeForm()
//         removeCart()
//     }
// })


// menuBtn.forEach((ele)=>{
//     ele.onclick =()=>{
//         let title = document.querySelector('.foodContainer h2')
//         let paragarph = document.querySelector('.foodContainer p')
//         // change paragraph text
//         menuBtn.forEach(ele => ele.classList.remove('active'))
//         ele.classList.add('active')
//         title.textContent = ele.querySelector('p').textContent

//     }
// })

// checkoutBtn.onclick =()=>{
//     showForm() 
//     removeCart()
// }

// function addToCart(e) {
//     console.log('called')
//     restImg.classList.add('remove')
//         console.log('added')
//         if (data.length > 0) {
//             last.children[last.children.length - 3].remove()
//         }
//         var price = e.target.parentElement.children[0].innerHTML
//         var name = e.target.parentElement.parentElement.children[1].innerHTML
//         var imgSrc = e.target.parentElement.parentElement.children[0].src
//         data.push({
//             price: price,
//             name: name,
//             imgSrc: imgSrc,
//             value: 1
//         })
//         let newCart = document.createElement('div')
//         newCart.classList.add('.bodyHold')
//         htmlMaker(data).forEach((node)=>{
//             newCart.appendChild(node)
//         })
//         cartBody.insertAdjacentElement('afterend', newCart)
//         total.innerHTML = `$${totalFunc()}`
//         console.log(data)
// }

// cartAdder.forEach((btn)=>{
//         btn.onclick=(e)=>{
//         addToCart(e)
//     }
// })




// function htmlMaker(dataArg) {
//     let arr = []


//     dataArg.forEach((object, id)=>{
//         let body = document.createElement('div')
//         body.classList.add('body')
//         let obj = document.createElement('div')
//         obj.classList.add('obj')
//         let h1 = document.createElement('h1')
//         h1.innerText = object.name
//         let img = document.createElement('img')
//         img.src = object.imgSrc
//         let quantity = document.createElement('div')
//         quantity.classList.add('quantity')
//         let buttonAdd = document.createElement('button')
//         buttonAdd.onclick=(e)=>{
//             let multiple
//             let price
//             data = data.map((obj, objID)=>{
//                 if (objID === id) {
//                     multiple = obj.value + 1
//                     price = obj.price
//                     return {
//                         price: obj.price,
//                         name: obj.name,
//                         imgSrc: obj.imgSrc,
//                         value: obj.value + 1
//                     }
//                 }else{
//                     return obj
//                 }
//             })
//             console.log(price)
//             e.target.parentElement.children[1].innerHTML = `${ +e.target.parentElement.children[1].innerHTML + 1}`
//             e.target.parentElement.parentElement.children[3].innerHTML = `$${+price.slice(1) * multiple}`
//             total.innerHTML = `$${totalFunc()}`
//         }
//         buttonAdd.innerText = '+'
//         let buttonRemove = document.createElement('button')
//         buttonRemove.innerText = '-'
//         buttonRemove.onclick=(e)=>{
//             let multiple
//             let price
//             if (+e.target.parentElement.children[1].innerHTML == 1) {
//                 console.log('reach')
//                 e.target.parentElement.parentElement.parentElement.classList.add('remove')
//                 console.log(e.target.parentElement.parentElement.parentElement)
//                 removeData(id)
//             }else{ 
//             data = data.map((obj, objID)=>{
//                 if (objID === id) {
//                     multiple = obj.value - 1
//                     price = obj.price
//                     return {
//                         price: obj.price,
//                         name: obj.name,
//                         imgSrc: obj.imgSrc,
//                         value: obj.value - 1
//                     }
//                 }else{
//                     return obj
//                 }
//             })
//             e.target.parentElement.children[1].innerHTML = `${+e.target.parentElement.children[1].innerHTML - 1}`
//             e.target.parentElement.parentElement.children[3].innerHTML = `$${+price.slice(1) * multiple}`
//             }
//             total.innerHTML = `$${totalFunc()}`
//         }
//         let span = document.createElement('span')
//         span.innerText = object.value
//         let p = document.createElement('p')
//         p.innerText = `$${+object.price.slice(1) * object.value}`

//         quantity.appendChild(buttonAdd)
//         quantity.appendChild(span)
//         quantity.appendChild(buttonRemove)
//         obj.appendChild(img)
//         obj.appendChild(h1)
//         obj.appendChild(quantity)
//         obj.appendChild(p)
//         body.appendChild(obj)
//         arr.push(body)
//     })
    
//     return arr
// }


// function cartRender() {
//     cartContent.innerHTML = data.map((obj, id) => `<cart-list name="${obj.name}" price="${obj.price}" count="${obj.value}" imgSrc="${obj.imgSrc}" elementid="${obj.uid}"></cart-list>`).join(' ')
//     if (data.length === 0) {
//         restImg.classList.remove('remove')
//     }
// }
 
// function removeData(arg) {
//     console.log(arg)
//     last.children[last.children.length - 3].remove()
//     let newDta = data.filter((el, id)=> id !== arg)
//     data = newDta
//     if (data.length === 0) restImg.classList.remove('remove')
//     let newCart = document.createElement('div')
//         newCart.classList.add('.bodyHold')
//         htmlMaker(data).forEach((node)=>{
//             newCart.appendChild(node)
//         })
//         cartBody.insertAdjacentElement('afterend', newCart)
//     if (data.length === 0) {
//         last.children[last.children.length - 3].remove()
//     }
//     console.log(data)
// }


// function totalFunc() {
//     let finalP = 0
//     data.forEach((ele, id)=>{
//         console.log(+ele.price, +ele.value)
//         finalP += (+ele.price * +ele.value)
//     })
//     total.innerHTML = `$${finalP}`
// }



// removeAll.onclick=()=>{
//     data = []
//     cartRender()
//     totalFunc()
// }

// let showFooter = (hide)=>{
//     let footer = document.querySelector('footer')
//     footer.style.display = hide ? 'flex' : 'none'
// }
window.addEventListener('beforeinstallprompt', (e)=>{
    console.log(e)
    e.preventDefault()
    promptObj = e
    // showFooter(true)
})
// window.onbeforeinstallprompt=(e)=>{
//     e.preventDefault()
//     console.log('called', e)
// }
// window.addEventListener('beforeinstallprompt', (e)=>{
//     // console.log('called', e)
//     promptObj = e
// })

// installBtn.onclick= async()=>{
//     promptObj.prompt()
//     let userChoice = await promptObj.userChoice
//     userChoice.outcome === "dismissed" ? showFooter(true) : showFooter(false)
// }




// customElements.define('cart-list', cartList)
// customElements.define('food-list', foodList)
// customElements.define('food-category', foodCategory)
