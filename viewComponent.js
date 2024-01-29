class view1 extends HTMLElement{
    connectedCallback(){
        this.render()
    }
    render=()=>{
        this.innerHTML = ''
        let template = document.querySelector('#view1').content
        let clone  = template.cloneNode(true)
        this.appendChild(clone)
    }
}


class view2 extends HTMLElement{
    connectedCallback(){
        this.render()
    }
    render=()=>{
        this.innerHTML = ''
        let template = document.querySelector('#view2').content
        let clone  = template.cloneNode(true)
        this.appendChild(clone)
    }
}

class view3 extends HTMLElement{
    connectedCallback(){
        this.render()
    }
    render=()=>{
        this.innerHTML = ''
        let template = document.querySelector('#view3').content
        let clone  = template.cloneNode(true)
        this.appendChild(clone)
    }
}

customElements.define('view1-component', view1)
customElements.define('view2-component', view2)
customElements.define('view3-component', view3)