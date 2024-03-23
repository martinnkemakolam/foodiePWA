let model = {
    product: [
        {
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
    isAuthenticated: true,
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

let render = ()=>{
    // loop through all elements and call a render method
    document.querySelector('product-page').render()
}

export let view =()=> Object.freeze(checkoutPrice(model))
 

export let controlller = {
    addToCart: (arg)=>{
        model.cart.push(arg)
        render()
    },
    editProductCount: (increment, uid)=>{
        let currentProduct = model.product.find((value, index)=> +value.uid === +uid)
        console.log(uid, currentProduct, model.product)
        if (currentProduct){
            if (increment) {
                currentProduct.count = +currentProduct.count + 1
            }else{
                currentProduct.count = +currentProduct.count - 1
            }
        }
        render()
    },
    removeFromCart: (uid)=>{
        let currentProduct = model.product.find((value, index)=> value.uid === uid)
        if (currentProduct) {
            currentProduct.count = 0
        }
        render()
    },
    showOverlay: ()=>{
        model.showOverlay = !model.showOverlay
        render()
    },
    switchForm: ()=>{
        model.loginForm = !model.loginForm
        render()
    },
    addProduct: (payload)=>{
        //post data to api
        model.product.push({
            ...payload, count: 0, uid: Math.floor(Math.random() * 1000) 
        })
    },
    editProduct: (payload)=>{
        let uid = payload.uid
        model.product = model.product.map((ele)=>{
            if (ele.uid === uid) {
                return payload
            }
        })
        render()
    },
    deleteProduct: (uid)=>{
        model.product = model.product.filter((ele)=> ele.uid !== uid)
        render()
    }
}
