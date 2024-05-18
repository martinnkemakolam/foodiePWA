let model = {
    product: [
        {
        name: 'Burger 1',
        foodsrc: './images/burger1.webp',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis consequatur expedita non iste eveniet accusantium alias aliquid officia illum.',
        price: '10',
        count: '0',
        uid: '001',
        review: [
        ]

     }, 
     {
        name: 'Burger 2',
        foodsrc: './images/burger1.webp',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis consequatur expedita non iste eveniet accusantium alias aliquid officia illum.',
        price: '30',
        count: '0',
        uid: '002',
        review: [
        ]
    }, {
        name: 'Burger 3',
        foodsrc: './images/burger1.webp',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis consequatur expedita non iste eveniet accusantium alias aliquid officia illum.',
        price: '15',
        count: '0',
        uid: '003',
        review: [{
            name: "Dummy user",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis consequatur expedita non iste eveniet accusantium alias aliquid officia illum.",
            star: 3,
            
        }]
    },{
        name: 'Burger 12',
        foodsrc: './images/burger1.webp',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis consequatur expedita non iste eveniet accusantium alias aliquid officia illum.',
        price: '15',
        count: '0',
        uid: '0012',
        review: [
        ]
    }
    ],
    isLoggedin: false,
    isAuthenticated: true,
    loginForm: false,
    showOverlay: false,
    sum: 0,
    notification: {
        show: false,
        title: '',
        msg: '',
        src: ''
    },
    showFooter: false,
}

let checkoutPrice=(model)=>{
    let sum = 0
    model.product.forEach((ele)=>{
        sum = sum + +ele.count * +ele.price 
    })
    model.sum = sum
    return {model}
}

let subscribtion = []

export let subscriber =(arg)=>{
    subscribtion.push(arg)
}

let callSubscription=({computedState})=>{
    let checkDifference = ({computedState, stateLn, ele, val})=>{
        let stringState = JSON.stringify(stateLn)
        let stringComputed = JSON.stringify(computedState)
        if(stringState !== stringComputed){
            model = val
            ele.render()
        }
    }
    subscribtion.forEach((ele)=>{
        console.log(ele, subscribtion)
        ele.reference.forEach((arr)=>{
            let currentObj
            let stateRef
            arr.forEach((val, id)=>{
                if (id === 0) {
                    currentObj = computedState[val]
                    stateRef = state[val]
                }
                if (id === arr.length - 1) {
                    checkDifference({computedState: currentObj, stateLn: stateRef, ele: ele, val: computedState})
                }
                
                stateRef = stateRef[val]
                currentObj = currentObj[val]

            })
        })
    })
}

let computedState =()=>{
    let stringObj = JSON.stringify(model)
    return JSON.parse(stringObj)
}


export let view =()=> Object.freeze(checkoutPrice(model))
 

export let controlller = {
    addToCart: (arg)=>{
        let newModel = computedState()
        newModel.cart.push(arg)
        callSubscription({computedState: newModel})
    },
    editProductCount: (increment, uid)=>{
        let currentProduct = model.product.find((value, index)=> +value.uid === +uid)
        if (currentProduct){
            if (increment) {
                let newModel = computedState()
                newModel.count = +currentProduct.count + 1
                callSubscription({computedState: newModel})
            }else{
                let newModel = computedState()
                newModel.count = +currentProduct.count - 1
                callSubscription({computedState: newModel})
            }
        }
    },
    removeFromCart: (uid)=>{
        let currentProduct = model.product.find((value, index)=> value.uid === uid)
        if (currentProduct) {
            let newModel = computedState()
            newModel.count = 0
            callSubscription({computedState: newModel})
        }
    },
    showOverlay: ()=>{
        let newModel = computedState()
        newModel.showOverlay = !model.showOverlay
        callSubscription({computedState: newModel})
    },
    switchForm: ()=>{
        let newModel = computedState()
        newModel.loginForm = !model.loginForm
        callSubscription({computedState: newModel})
    },
    addProduct: (payload)=>{
        let newModel = computedState()
        newModel.product.push({
            ...payload, count: 0, uid: Math.floor(Math.random() * 1000) 
        })
        callSubscription({computedState: newModel})
    },
    editProduct: (payload)=>{
        let newModel = computedState()
        let uid = payload.uid
        newModel.product = newModel.product.map((ele)=>{
            if (ele.uid === uid) {
                return payload
            }else{
                return ele
            }
        })
        callSubscription({computedState: newModel})
    },
    deleteProduct: (uid)=>{
        let newModel = computedState()
        newModel.product = newModel.product.filter((ele)=> ele.uid !== uid)
        callSubscription({computedState: newModel})
    },
    showBanner: ()=>{
        let newModel = computedState()
        newModel.showFooter = true
        callSubscription({computedState: newModel})
    },
    hideBanner: ()=>{
        let newModel = computedState()
        newModel.showFooter = false
        callSubscription({computedState: newModel})
    },
    showNotifications: (title, msg, src)=>{
        let newModel = computedState()
        newModel.notification.show = true
        newModel.notification.title = title
        newModel.notification.msg = msg
        newModel.notification.src = src
        callSubscription()
        setTimeout(()=>{
            newModel.notification.show = false
            newModel.notification.title = ""
            newModel.notification.msg = ""
            newModel.notification.src = ""
            callSubscription({computedState: newModel})
        }, 2000)
    }
}
