let model = {
    product: [{
        name: 'Burger 1',
        foodsrc: '/images/burger.jpg',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis consequatur expedita non iste eveniet accusantium alias aliquid officia illum.',
        price: '10',
        count: '0',
        uid: '001'
    }, {
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
    }]
}
// 'foodsrc', 'name', 'detail', 'price', 'count'

let cloneDeep=(x)=>{
    return JSON.parse(JSON.stringify(x))
}

export let view =()=> model

export let controlller = {
    addToCart: (arg, element)=>{
        model.cart.push(arg)
        element.render()
    },
    editProductCount: (increment, uid, element)=>{
        let currentProduct = model.product.find((value, index)=> value.uid === uid)
        if (currentProduct){
            if (increment) {
                currentProduct.count = +currentProduct.count + 1
            }else{
                currentProduct.count = +currentProduct.count - 1
            }
        }
        element.render()
    }
}