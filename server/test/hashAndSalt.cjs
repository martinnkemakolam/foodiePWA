let assert = require('assert');
let hashAndSalt = require("../utility/hashAndSalt.cjs")


describe('Hash and salt test', () => {
    it('should generate a random value from password', ()=>{
        let value = hashAndSalt('Password')
        assert.notEqual(value, 'Password')    
    })
    it('should chaeck if a previous value is equal to a stored value', ()=>{
        let storedValue = hashAndSalt('Password')
        let previousValue = hashAndSalt('Password')
        assert.equal(storedValue, previousValue)
    })
})