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
    } 
    ]
}
// 'foodsrc', 'name', 'detail', 'price', 'count'

let cloneDeep=(x)=>{
    return JSON.parse(JSON.stringify(x))
}
let checkoutPrice =()=> {
    let sum = 0
    model.product.forEach((ele)=>{
        sum = sum + +ele.count * +ele.price 
    })
    return sum
}
export let view =()=> ({
    model,
    sum: checkoutPrice(),
    isLoggedin: false,
    isAuthenticated: false,
    loginForm: true,
    showOverlay: true
})

export let controlller = {
    addToCart: (arg, elements)=>{
        model.cart.push(arg)
        if(elements.length > 0) {
            elements.forEach( element=> element.render())
        }else{
            elements.render()
        }
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
        if(elements.length > 0) {
            elements.forEach( element=> element.render())
        }else{
            elements.render()
        }
    },
    removeFromCart: (uid, elements)=>{
        let currentProduct = model.product.find((value, index)=> value.uid === uid)
        if (currentProduct) {
            currentProduct.count = 0
        }
        if(elements.length > 0) {
            elements.forEach( element=> element.render())
        }else{
            elements.render()
        }
    }
}