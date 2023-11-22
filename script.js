let data = []
let cartBody = document.querySelector('.head')
let total = document.querySelector('.total p')
let cartAdder = document.querySelectorAll('.btn')
let last = document.querySelector('.shoppingCart')
let removeAll = document.querySelector('.head button')
let restImg = document.querySelector('.rest')
let cartIcon = document.querySelector('.cart')
let cartRemove = document.querySelectorAll('.icon')
let myCart = document.querySelector('.myCart')
let checkoutBtn = document.querySelector('#checkout')
let orderPage = document.querySelector('.order')
let showCart = ()=>{
    myCart.classList.remove('left')
}
let removeCart = ()=>{
    myCart.classList.add('left')
}
let showForm = ()=>{
    orderPage.classList.add('show')
}
let removeForm = ()=>{
    orderPage.classList.remove('show')
}


cartIcon.onclick = showCart
cartRemove.forEach((ele)=>{
    ele.onclick =()=>{
        removeForm()
        removeCart()
    }
})

checkoutBtn.onclick =()=>{
    showForm() 
    removeCart()
}



cartAdder.forEach((btn)=>{
        btn.onclick=(e)=>{
        restImg.classList.add('remove')
        console.log('added')
        if (data.length > 0) {
            last.children[last.children.length - 3].remove()
        }
        var price = e.target.parentElement.children[0].innerHTML
        var name = e.target.parentElement.parentElement.children[1].innerHTML
        var imgSrc = e.target.parentElement.parentElement.children[0].src
        data.push({
            price: price,
            name: name,
            imgSrc: imgSrc,
            value: 1
        })
        let newCart = document.createElement('div')
        newCart.classList.add('.bodyHold')
        htmlMaker(data).forEach((node)=>{
            newCart.appendChild(node)
        })
        cartBody.insertAdjacentElement('afterend', newCart)
        total.innerHTML = `$${totalFunc()}` 
        console.log(data)
    }
})




function htmlMaker(dataArg) {
    let arr = []


    dataArg.forEach((object, id)=>{
        let body = document.createElement('div')
        body.classList.add('body')
        let obj = document.createElement('div')
        obj.classList.add('obj')
        let h1 = document.createElement('h1')
        h1.innerText = object.name
        let img = document.createElement('img')
        img.src = object.imgSrc
        let quantity = document.createElement('div')
        quantity.classList.add('quantity')
        let buttonAdd = document.createElement('button')
        buttonAdd.onclick=(e)=>{
            let multiple
            let price
            data = data.map((obj, objID)=>{
                if (objID === id) {
                    multiple = obj.value + 1
                    price = obj.price
                    return {
                        price: obj.price,
                        name: obj.name,
                        imgSrc: obj.imgSrc,
                        value: obj.value + 1
                    }
                }else{
                    return obj
                }
            })
            console.log(price)
            e.target.parentElement.children[1].innerHTML = `${ +e.target.parentElement.children[1].innerHTML + 1}`
            e.target.parentElement.parentElement.children[3].innerHTML = `$${+price.slice(1) * multiple}`
            total.innerHTML = `$${totalFunc()}`
        }
        buttonAdd.innerText = '+'
        let buttonRemove = document.createElement('button')
        buttonRemove.innerText = '-'
        buttonRemove.onclick=(e)=>{
            let multiple
            let price
            if (+e.target.parentElement.children[1].innerHTML == 1) {
                console.log('reach')
                e.target.parentElement.parentElement.parentElement.classList.add('remove')
                console.log(e.target.parentElement.parentElement.parentElement)
                removeData(id)
            }else{ 
            data = data.map((obj, objID)=>{
                if (objID === id) {
                    multiple = obj.value - 1
                    price = obj.price
                    return {
                        price: obj.price,
                        name: obj.name,
                        imgSrc: obj.imgSrc,
                        value: obj.value - 1
                    }
                }else{
                    return obj
                }
            })
            e.target.parentElement.children[1].innerHTML = `${+e.target.parentElement.children[1].innerHTML - 1}`
            e.target.parentElement.parentElement.children[3].innerHTML = `$${+price.slice(1) * multiple}`
            }
            total.innerHTML = `$${totalFunc()}`
        }
        let span = document.createElement('span')
        span.innerText = object.value
        let p = document.createElement('p')
        p.innerText = `$${+object.price.slice(1) * object.value}`

        quantity.appendChild(buttonAdd)
        quantity.appendChild(span)
        quantity.appendChild(buttonRemove)
        obj.appendChild(img)
        obj.appendChild(h1)
        obj.appendChild(quantity)
        obj.appendChild(p)
        body.appendChild(obj)
        arr.push(body)
    })
    
    return arr
}

function removeData(arg) {
    console.log(arg)
    last.children[last.children.length - 3].remove()
    let newDta = data.filter((el, id)=> id !== arg)
    data = newDta
    if (data.length === 0) restImg.classList.remove('remove')
    let newCart = document.createElement('div')
        newCart.classList.add('.bodyHold')
        htmlMaker(data).forEach((node)=>{
            newCart.appendChild(node)
        })
        cartBody.insertAdjacentElement('afterend', newCart)
    if (data.length === 0) {
        last.children[last.children.length - 3].remove()
    }
    console.log(data)
}
function totalFunc() {
    let finalP = 0
    data.forEach((obj)=>{
       finalP += +obj.price.slice(1) * obj.value
    })
    return finalP
}

removeAll.onclick=()=>{
    if (data.length > 0) {
    data = []
    total.innerHTML = `$0`
    last.children[last.children.length - 3].remove()
    restImg.classList.remove('remove')   
    }
}
