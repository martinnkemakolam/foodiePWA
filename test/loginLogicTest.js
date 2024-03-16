import assert from "assert"
import {view, controlller} from "../stateManager.js"
let {model} = view()
let {showOverlay, switchForm} = controlller
describe('Show', () => {
    it('should show overlay', () => {
        // default state of show overlay false
        assert.equal(model.showOverlay, false)
        showOverlay()
        assert.equal(model.showOverlay, true)
    })
    it('should close overlay', () => {
        assert.equal(model.showOverlay, true)
        showOverlay()
        assert.equal(model.showOverlay, false)
    })
    describe('Switch form view in overlay', ()=>{
        it('should Switch the form state', ()=>{
            // form default state false
            assert.equal(model.loginForm, false)
            switchForm()
            assert.equal(model.loginForm, true)
            switchForm()
            assert.equal(model.loginForm, false)
        })
    })
})