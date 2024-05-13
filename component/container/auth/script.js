import elementCreator from '../../../elementCreator'
import signin from './signin.pug'

elementCreator({
    name: 'signin-element',
    pugFunc: signin,
    func: [{
        event: 'click',
        callback: function(e){
            if('toggle' in e.target.dataset){
                controlller.switchForm(this)
            }
        }
    }]
})