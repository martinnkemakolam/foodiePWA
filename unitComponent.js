class foodCategory extends HTMLElement{
    constructor(){
        super()
    }
    src = ''
    name = '' 
    static observedAttributes = ['src', 'name']
    attributeChangedCallback(name, oldValue, newValue){
        this[name] = newValue
    }
    connectedCallback(){
        let shadow = this.attachShadow({mode: 'open'}),
        template = document.querySelector("#cartCategory").content,
        templateNode = template.cloneNode(true)
        templateNode.querySelector('#name').textContent = this.name
        templateNode.querySelector('#image').src = this.src
        templateNode.querySelector('#category').dataset.name = this.name
        templateNode.querySelector('#category').onclick =(e)=>{
            let title = document.querySelector('.foodContainer h2')
            title.textContent = this.name
            // e.target.classList.add('active')
            shadow.querySelector('#category').classList.add('active')
            // fetch data and set to paragraph
        }
        shadow.appendChild(templateNode)
    }
}



class foodList extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
      }
    static observedAttributes = ['name', 'description', 'price', 'img', 'uid']
    
    name = ''
    description = ''
    price = ''
    img = ''
    uid = ''

    attributeChangedCallback(nameChg, oldVal, newVal){
        this[nameChg] = newVal
        console.log(this[nameChg])
    }

    connectedCallback(){
        let root = this.attachShadow({mode: "open"})
        let template = document.querySelector('#foodList').content
        let templateNode = template.cloneNode(true)
        templateNode.querySelector('#name').innerHTML = this.name
        templateNode.querySelector('#description').innerHTML = this.description
        templateNode.querySelector('#imgSrc').src = this.img
        templateNode.querySelector('#price').innerHTML = `$${this.price}`
        templateNode.querySelector('#addBtn').onclick = ()=>{
            if (data.find((ele)=> ele.uid === this.uid)){
                showNotifications('Already in cart')
                return
            }
            data.push({
                price: this.price,
                name: this.name,
                imgSrc: this.img,
                value: 1,
                uid: this.uid
            })
            restImg.classList.add('remove')
            showNotifications('Added to cart')
            // totalFunc()
            cartRender()
            totalFunc()
        }
        root.appendChild(templateNode)
    }
}



class cartList extends HTMLElement {
    constructor(){
        super()
    }
    static observedAttributes = ['name', 'price', 'count', 'imgSrc', 'elementid']
    name = ''
    price = ''
    count = ''
    imgSrc = ''
    elementid = ''
    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue
        this.reRender()
    }
    shadow = this.attachShadow({mode: 'open'})
    cartListTmplate = document.querySelector('#cartList').content
    cartListNode = this.cartListTmplate.cloneNode(true)
    connectedCallback(){
        
        this.cartListNode.querySelector('#count').innerHTML = this.count
        this.cartListNode.querySelector('#name').innerHTML = this.name
        this.cartListNode.querySelector('#price').innerHTML = `$${this.price}`
        this.cartListNode.querySelector('#addBtn').onclick =()=>{
            console.log(this.elementId)
            data = data.map((obj)=>{
                if (obj.uid == +this.elementid) {
                    console.log('reached')
                    return {
                        price: obj.price,
                        name: obj.name,
                        imgSrc: obj.imgSrc,
                        value: +this.count + 1,
                        uid: this.elementid
                    }
                }else{
                    return obj
                }
            })
            console.log(data)
            this.setAttribute('count', + this.count + 1)
            totalFunc()
        }
        this.cartListNode.querySelector('#removeBtn').onclick =()=>{
            console.log('called 2')
            if (this.count == 1) {
                console.log('reached here')
                data = data.filter((ele)=> this.elementid != ele.uid)
                cartRender()
            }
            data = data.map((obj)=>{
                if (obj.uid == +this.elementid) {
                    console.log('reached')
                    return {
                        price: obj.price,
                        name: obj.name,
                        imgSrc: obj.imgSrc,
                        value: +this.count - 1,
                        uid: this.elementid
                    }
                }else{
                    return obj
                }
            })
            console.log(data)
            this.setAttribute('count', +this.count - 1)
            totalFunc()
        }
        this.shadow.appendChild(this.cartListNode)
        // console.log(this.querySelector('#addBtn'))
    }
    reRender(){
        if (this.shadowRoot.children.length > 0) {
            this.shadowRoot.querySelector('#count').innerHTML = this.count
            this.shadowRoot.querySelector('#price').innerHTML = `$${this.count * this.price}`
            // this.shadowRoot.querySelector('#count').innerHTML = data[0].name
        }
    }
}


customElements.define('cart-list', cartList)
customElements.define('food-list', foodList)
customElements.define('food-category', foodCategory)