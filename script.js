let data = []
let cartBody = document.querySelector('.head')
let cartAdder = document.querySelectorAll('.btn')
cartAdder.forEach((btn)=>{
        btn.onclick=(e)=>{
        console.log('added')
        let last = document.querySelector('.shoppingCart')
        if (data.length > 0) {
            last.children[last.children.length - 2].remove()
        }
        var price = e.target.parentElement.children[0].innerHTML
        var name = e.target.parentElement.parentElement.children[1].innerHTML
        var imgSrc = e.target.parentElement.parentElement.children[0].src
        data.push({
            price: price,
            name: name,
            imgSrc: imgSrc
        })
        let newCart = document.createElement('div')
        newCart.classList.add('.bodyHold')
        htmlMaker(data).forEach((node)=>{
            newCart.appendChild(node)
        })
        cartBody.insertAdjacentElement('afterend', newCart)
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
            e.target.parentElement.children[1].innerHTML = `${ +e.target.parentElement.children[1].innerHTML + 1}`
        }
        buttonAdd.innerText = '+'
        let buttonRemove = document.createElement('button')
        buttonRemove.innerText = '-'
        buttonRemove.onclick=(e)=>{
            if (+e.target.parentElement.children[1].innerHTML == 1) {
                console.log('reach')
                e.target.parentElement.parentElement.parentElement.classList.add('remove')
                removeData(id)
                setTimeout(()=>{
                    e.target.parentElement.parentElement.parentElement.remove()
                }, 1500)
            }
            e.target.parentElement.children[1].innerHTML = `${+e.target.parentElement.children[1].innerHTML - 1}`
        }
        let span = document.createElement('span')
        span.innerText = '1'
        let p = document.createElement('p')
        p.innerText = object.price

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
    console.log(arr.length)
    return arr
}

function removeData(arg) {
    let newDta = data.filter((el, id)=> id !== arg)
    data = newDta
    console.log(data)
}