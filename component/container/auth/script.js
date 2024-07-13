import elementCreator from '../../../elementCreator.js'
import { controlller } from '../../../stateManager.js'
import fetcher from '../../../utility/client/fetcher.js';
import signin from './signin.pug'

elementCreator({
    name: 'signin-element',
    pugFunc: signin,
    privateState: {
        loginForm: false
    },
    func: [{
        event: 'click',
        callback: async function(e){
            // e.preventDefault();
            let value = {
                email: this.querySelector('input[type="email"]').value,
                password: this.querySelector('input[type="password"]').value
            }
            if('toggle' in e.target.dataset){
                this.setState('loginForm', !this.privateValue.loginForm)
                // this.privateValue2.nest.value = true
            }if ('signin' in e.target.dataset) {
                if (value.password.length < 5 || value.email.length < 5) {
                    // Check validity of input object
                    return   
                }
                let data = await fetcher({url: `/api/login`, headers: {'Content-Type': 'application/json'}, method: 'POST', body: value}, this)
                if (data?.ok) {
                    controlller.showOverlay()
                    controlller.addAuthObject({payload: {email: data.response?.email, token: data.response?.token, role: data.response?.role}})
                    console.log({email: data.response?.email, token: data.response?.token, role: data.response?.role})
                    controlller.showNotifications('Login', "You are now authenticated successfully", "./images/icons/success.png")
                }else{
                    controlller.addAuthObject({payload: {email: null, token: null, role: null}})
                    controlller.showNotifications('Login', "Authentication failed check email or password", "./images/icons/error.jpeg")
                }
            }if ('signup' in e.target.dataset) {
                if (value.password.length < 5 || value.email.length < 5) {
                    // Check validity of input object
                    return
                }
                let data = await fetcher({url: `/api/signup`, headers: {'Content-Type': 'application/json'}, method: 'POST', body: value}, this)
                if (data?.ok) {
                    this.setState('loginForm', true)
                    controlller.showNotifications('Account', "Created successfully", "./images/icons/success.png")
                }else{
                    controlller.showNotifications('Account', "Failed to create account", "./images/icons/error.jpeg")
                }
            }
        }
    }],
    ref: [['loginForm'], ['isFetching']]
})