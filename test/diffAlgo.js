import assert from "assert"
import {JSDOM} from "jsdom"
const dom = new JSDOM(`
    <div>
        <div>Hello</div>
        <p>My name is martn</p>
    </div>
`, {url: 'http://localhost'})
global.window = dom.window
global.document = dom.window.document
describe('Algorithm to decide what should rerender or not', () => {
    let element = document.querySelector('div')
    let virtual = element.cloneNode(true)
    it('should get element', () => {
        assert.ok(element)
    })
    it('should create a virtual element and they should equal', () => {
        assert.ok(virtual)
        assert.equal(element.innerHTML, virtual.innerHTML)
    });
    it('should manipulate the virtual element', ()=>{
        let prior = virtual.innerHTML
        virtual.innerHTML = `
        <div>
            <div>Hello</div>
            <p>Manupilated</p>
        </div>`
        assert.notEqual(prior, virtual.innerHTML)
    })
    it('should edit main dom to fit virtual', ()=>{
        element.innerHTML = virtual.innerHTML
        assert.equal(virtual.innerHTML, element.innerHTML)
    })
})