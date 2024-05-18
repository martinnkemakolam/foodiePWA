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
    let callSubscription=({computedState})=>{
        let checkDifference = ({computedState, stateLn, ele, val})=>{
            let stringState = JSON.stringify(stateLn)
            let stringComputed = JSON.stringify(computedState)
            if(stringState !== stringComputed){
                state = val
                ele.render(state)
            }
        }
        subscribtion.forEach((ele)=>{
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
        let stringObj = JSON.stringify(state)
        return JSON.parse(stringObj)
    }
    return {
        subscriber: (arg)=>{
            subscribtion.push(arg)
        },
        controller:{
            changeValue1:(payload)=>{
                let newState = computedState()
                newState.value1 = payload
                callSubscription({computedState: newState})
            },
            changeValue2:(payload)=>{
                let newState = computedState()
                newState.value2 = payload
                callSubscription({computedState: newState})
            }

        }
    }
}
let {controller, subscriber} = stateManager()
let templateDiv=(state)=>{
    return `
    <div data-func>
        ${state.value1}
    </div>
    `
}
let templateDiv2=(state)=>{
    return `
    <div data-fun2>
        ${state.vale2}
    </div>
    `
}

window.elementCreator = ({name,atr = [],pugFunc,func = [], reference})=>{
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
        reference = reference || []
        render(stateVal){
            let pugHtml = pugFunc(stateVal)
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
            reference: [['value1']]
        })
        window.elementCreator({
            name: 'second-element',
            atr: [],
            pugFunc: templateDiv2,
            func: [{
                event: 'click',
                callback: function (e) {
                    if('fun2' in e.target.dataset) {
                        // controller.changeValue2('new val 2')
                        controller.changeValue1('changed from 2')
                    }
                },
            }],
            reference: [['value2']]
        })
    })
    it('should create a custom element with a render method', () => {
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
        assert.notEqual(newState.value1, state.value1)
    })
    it('should check for change between state used in element and the new computed value of state and rerender', ()=>{
        let beforeStateChange = window.document.querySelector('test-element').innerHTML
        window.document.querySelector('second-element').querySelector('div').click()
        let ele = window.document.querySelector('test-element').innerHTML
        assert.notEqual(ele, beforeStateChange)
    })
})