let model = {
    product: [{
        name: 'Burger 1',
        foodsrc: './images/burger.jpg',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis consequatur expedita non iste eveniet accusantium alias aliquid officia illum.',
        price: '10',
        count: '0',
        uid: '001'
     }, 
     {
        name: 'Burger 1',
        foodsrc: '/images/burger.jpg',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis consequatur expedita non iste eveniet accusantium alias aliquid officia illum.',
        price: '30',
        count: '0',
        uid: '002'
    }, {
        name: 'Burger 1',
        foodsrc: '/images/burger.jpg',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis consequatur expedita non iste eveniet accusantium alias aliquid officia illum.',
        price: '15',
        count: '0',
        uid: '003'
    },
    ],
    isLoggedin: false,
    isAuthenticated: false,
    loginForm: false,
    showOverlay: false,
    sum: 0
}
// 'foodsrc', 'name', 'detail', 'price', 'count'
 let checkoutPrice=(model)=>{
    let sum = 0
    model.product.forEach((ele)=>{
        sum = sum + +ele.count * +ele.price 
    })
    model.sum = sum
    return {model}
}

let render = (elements)=>{
    if(elements?.length > 0) {
        elements.forEach( element=> element.render())
    }else{
        elements.render()
    }
}

export let view =()=> (checkoutPrice(model))

export let controlller = {
    addToCart: (arg, elements)=>{
        model.cart.push(arg)
        render(elements)
    },
    editProductCount: (increment, uid, elements)=>{
        let currentProduct = model.product.find((value, index)=> value.uid === uid)
        if (currentProduct){
            if (increment) {
                currentProduct.count = +currentProduct.count + 1
            }else{
                currentProduct.count = +currentProduct.count - 1
            }
        }
        render(elements)
    },
    removeFromCart: (uid, elements)=>{
        let currentProduct = model.product.find((value, index)=> value.uid === uid)
        if (currentProduct) {
            currentProduct.count = 0
        }
        render(elements)
    },
    showOverlay: (elements)=>{
        model.showOverlay = !model.showOverlay
        render(elements)
    },
    switchForm: (elements)=>{
        model.loginForm = !model.loginForm
        render(elements)
    }
}