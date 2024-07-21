// Our model

let model = {
    authObject: {
        email: null,
        token: null,
        role: null,
    },
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


    const checkDifference = ({computedState, stateLn, ele, val})=>{
        let stringState = JSON.stringify(stateLn)
        let stringComputed = JSON.stringify(computedState)
        // console.log('reached')
        // console.log(stringState, stringComputed)
        if(stringState !== stringComputed){
            model = val
            console.log("this is",ele)
            ele.render()
        }
    }

    subscribtion.forEach((ele)=>{
        let element = document.querySelectorAll(ele)
        element.forEach((element)=>{
            if (element === null) {
                return
            }
            console.log(element)
            element.reference.forEach((arr)=>{
                let currentObj
                let stateRef
                arr.forEach((val, id)=>{
                    if (id === 0) {
                        currentObj = computedState[val]
                        stateRef = model[val]
                        if (id === arr.length - 1) {
                            if(element?.selector?.length > 0){
                                currentObj = element.selector[0](computedState, element)
                                stateRef = element.selector[0](model, element)
                            }
                            checkDifference({computedState: currentObj, stateLn: stateRef, ele: element, val: computedState})
                            return
                        }
                        return
                    }
                    if (id === arr.length - 1) {
                        if(element?.selector?.length > 0){
                            console.log('ran')
                            currentObj = element.selector[0](computedState, element)
                            stateRef = element.selector[0](model, element)
                        }
                        checkDifference({computedState: currentObj, stateLn: stateRef, ele: element, val: computedState})
                        return
                    }
                    stateRef = stateRef[val]
                    currentObj = currentObj[val]
                })
            })
        })
    })
}

let computedState =()=>{
    let stringObj = JSON.stringify(model)
    return JSON.parse(stringObj)
}


export let view =()=> Object.freeze(checkoutPrice(model))


window.globalState = view()


export let controlller = {
    editProductCount: (increment, uid)=>{
        let newModel = computedState()
        let currentProduct = newModel.product.find((value)=> +value.uid === +uid)
        if (currentProduct){
            if (increment) {
                currentProduct.count = +currentProduct.count + 1
                let newProduct = newModel.product.map((prod)=>{
                    if (prod.uid === currentProduct.uid) {
                        return currentProduct
                    }else{
                        return prod
                    }
                })
                newModel.product = newProduct
                console.log(newModel)
                callSubscription({computedState: newModel})
            }else{
                if(+currentProduct.count === 0){
                    return
                }else{
                    currentProduct.count = +currentProduct.count - 1
                    let newProduct = newModel.product.map((prod)=>{
                        if (prod.uid === currentProduct.uid) {
                            return currentProduct
                        }else{
                            return prod
                        }
                    })
                    newModel.product = newProduct
                    console.log(newModel)
                    callSubscription({computedState: newModel})
                }
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
    },
    changeFetchState: (done)=>{
        let newModel = computedState()
        newModel.isFetching = done
        callSubscription({computedState: newModel})
    },
    addAuthObject: ({payload})=>{
        window.localStorage.setItem("auth", JSON.stringify(payload))
        let newModel = computedState()
        newModel.authObject.email = payload.email
        newModel.authObject.token = payload.token
        newModel.authObject.role = payload.role
        callSubscription({computedState: newModel})
    },
    logout:()=>{
        let newModel = computedState()
        newModel.authObject.email = null
        newModel.authObject.token = null
        newModel.authObject.role = null
        callSubscription({computedState: newModel})
    }
}