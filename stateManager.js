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
    if (computedState === undefined) {
        throw Error(`callSubscription function must be caled with a computedState`)
    }
    let checkDifference = ({computedState, stateLn, ele, val})=>{
        let stringState = JSON.stringify(stateLn)
        let stringComputed = JSON.stringify(computedState)
        console.log('reached')
        console.log(stringState, stringComputed)
        if(stringState !== stringComputed){
            model = val
            console.log('cause rerender in: ',ele)
            ele.render()
        }
    }
    subscribtion.forEach((ele)=>{
        // console.log(ele, subscribtion)
        let element = document.querySelector(ele)
        // console.log(element, ele)
        if (element === null) {
            // console.log(`doesn't exist ${ele}`)
            return
        }
        // console.log(`exist ${ele}`)
        element.reference.forEach((arr)=>{
            let currentObj
            let stateRef
            arr.forEach((val, id)=>{
                if (id === 0) {
                    // console.log(model[val])
                    currentObj = computedState[val]
                    stateRef = model[val]
                    console.log(ele,currentObj, stateRef, val)
                    if (id === arr.length - 1) {
                        checkDifference({computedState: currentObj, stateLn: stateRef, ele: element, val: computedState})
                        return
                    }
                    return
                }
                if (id === arr.length - 1) {
                    checkDifference({computedState: currentObj, stateLn: stateRef, ele: element, val: computedState})
                    return
                }
                // console.log('state ref: ', stateRef)
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
        newModel.showOverlay = !newModel.showOverlay
        callSubscription({computedState: newModel})
    },
    switchForm: ()=>{
        let newModel = computedState()
        console.log(newModel.loginForm, newModel)
        newModel.loginForm = !model.loginForm
        console.log(newModel.loginForm, newModel)
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
        callSubscription({computedState: newModel})
        setTimeout(()=>{
            let newModel = computedState()
            newModel.notification.show = false
            newModel.notification.title = ""
            newModel.notification.msg = ""
            newModel.notification.src = ""
            callSubscription({computedState: newModel})
        }, 2000)
    }
}
