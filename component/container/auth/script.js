import elementCreator from '../../../elementCreator.js'
import { controlller } from '../../../stateManager.js'
import signin from './signin.pug'

elementCreator({
    name: 'signin-element',
    pugFunc: signin,
    func: [{
        event: 'click',
        callback: function(e){
            e.preventDefault();
            if('toggle' in e.target.dataset){
                controlller.switchForm(this)
            }if ('signin' in e.target.dataset) {
                fetch('http://localhost:3080/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        data: 'My data'
                    })
                }).then(async(res)=>{
                    let text = await res.text()
                    console.log(res, text)
                })
            }if ('signup' in e.target.dataset) {
                let value = {
                    email: this.querySelector('input[type="email"]').value,
                    password: this.querySelector('input[type="password"]').value
                }
                if (value.password.length < 5 || value.email.length < 5) {
                    return   
                }
                fetch('http://localhost:3080/api/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(value)
                }).then(async(res)=>{
                    let text = await res.json()
                    console.log(res, text)
                })
            }
        }
    }],
    ref: [['loginForm']]
})