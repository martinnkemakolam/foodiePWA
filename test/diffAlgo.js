import assert from "assert"
// import { json } from "express"
import {JSDOM} from "jsdom"
import { document } from "postcss"
const dom = new JSDOM(`
    <test-element></test-element>
    <second-element></second-element>
`, {url: 'http://localhost'})
global.window = dom.window
global.document = dom.window.document

let state = {
    value1: 'value1',
    value2: 'value2',
    nested: {
        value1: 'nested value1',
    }
}

let stateManager=()=>{
    let subscribtion = []
    let callSubscription=({computedState, reference})=>{
        let checkDifference = (state, computedState)=>{
            let stringState = JSON.stringify(state)
            let stringComputed = JSON.stringify(computedState)
            console.log(stringState, stringComputed)
            if(stringState === stringComputed){
                console.log('dif')
            }else{
                console.log('nahh')
            }
        }
        console.log('t')
        reference.forEach((arr)=>{
            let currentObj
            let stateRef
            console.log('th')
            arr.forEach((val, id)=>{
                if (id === 0) {
                    currentObj = computedState[val]
                    stateRef = state[val]
                }
                if (id === arr.length - 1) {
                    checkDifference(currentObj, stateRef)
                }
            })
        })
    }
    let computedState =()=>{
        let stringObj = JSON.stringify(state)
        return JSON.parse(stringObj)
    }
    return {
        subscriber: (arg)=>{
            subscribtion.push(arg)
        },
        controller:{
            changeValue1:(payload, reference)=>{
                let newState = computedState()
                newState.value1 = 'new val 1'
                newState.value2 = 'new val 2'
                newState.nested.value1 = 'new val 2'
                state.value1 = 'new val 1'
                callSubscription({computedState: newState, reference: [['nested', 'value1']]})
            },
            changeValue2:(payload, reference)=>{
                callSubscription(newValue)
            }

        }
    }
}
let {controller, subscriber} = stateManager()
let templateDiv=(state)=>{
    return `
    <div data-func>
        ${state}
    </div>
    `
}
let templateDiv2=(state)=>{
    return `
    <div data-fun2>
        ${state}
    </div>
    `
}

window.elementCreator = ({name,atr = [],pugFunc,func = [],state})=>{
    class test extends window.HTMLElement {
        constructor(){
            super()
        }
        static observedAttributes = [...atr, 'param']
        value = {
            param: undefined 
        }
        populateValue=(()=>{
            atr.forEach((name)=>{
                this.value[name] = ''
            })
        })()
        attributeChangedCallback(name, oldValue, newValue){
            this.value[name] = newValue
        }
        lastValueOfStar = state
        render(computedState){
            let pugHtml = pugFunc(computedState)
            this.innerHTML = pugHtml
            func.forEach(({event,callback})=>{
                this.addEventListener(event, callback, false)
            })
        }
        connectedCallback(){
            this.render(state)
        }
    }
    window.customElements.define(name, test)
    subscriber(window.document.querySelector(name))
}


describe('Rerendering test', () => {
    before(()=>{
        window.elementCreator({
            name: 'test-element',
            atr: [],
            pugFunc: templateDiv,
            func: [{
                event: 'click',
                callback: function (e) {
                    if('func' in e.target.dataset) {
                        controller.changeValue1('new val 1')
                    }
                }
            }], 
            state: state.value1
        })
        window.elementCreator({
            name: 'second-element',
            atr: [],
            pugFunc: templateDiv2,
            func: [{
                event: 'click',
                callback: function (e) {
                    if('fun2' in e.target.dataset) {
                        controller.changeValue2('new val 2')
                    }
                },
            }],
            state: state.value2
        })
    })
    it('should create a custom element with a render method', () => {
        // console.log(window.document.querySelector('test-element').innerHTML.length)
        assert.equal(true, (window.document.querySelector('test-element').innerHTML.length>3 && window.document.querySelector('second-element').innerHTML.length>3))
    })
    it('should call the click func and cause change in state', ()=>{
        window.document.querySelector('test-element').querySelector('div').click()
        assert.equal(state.value1, 'new val 1')
    })
    it('should create a new object thats a copy of the old object', ()=>{
        let stringObj = JSON.stringify(state)
        let newState = JSON.parse(stringObj)
        newState.value1 = 'new computed value 1'
        // console.log(newState, state)
        assert.notEqual(newState.value1, state.value1)
    })
    it('should check for change between state used in element and the new computed value of state and rerender', ()=>{
    })
})