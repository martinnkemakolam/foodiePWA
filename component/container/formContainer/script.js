import elementCreator from '../../../elementCreator.js'
import { getValue, objHasAnEmptyValue } from '../../../utility/client/utility.js'
import form from './form.pug'

elementCreator({
    name: 'form-element',
    pugFunc: form,
    atr: ['name', 'detail', 'price', 'imgsrc', 'edit', 'uid'],
    func: [
        {
            event: "click",
            callback: function(e){
                e.preventDefault()
                if ('add' in e.target.dataset) {
                    let payload = {
                        name: getValue.bind(this)("#name"),
                        detail: getValue.bind(this)("#detail"),
                        foodsrc: this.value.imgsrc,
                        price: getValue.bind(this)("#price")
                    }
                    if (objHasAnEmptyValue(payload)){
                        controlller.showNotifications('Error message', 'All fields are required to be filled', './images/icons/error.jpeg')
                        return
                    }
                    controlller.addProduct(payload)
                }else if ('edit' in e.target.dataset) {
                    let payload = {
                        name: getValue.call(this, ["#name"]),
                        detail: getValue.call(this, ["#detail"]),
                        foodsrc: this.value.imgsrc,
                        count: 0,
                        price: getValue.call(this, ["#price"]),
                        uid: this.value.uid
                    }
                    if (objHasAnEmptyValue(payload)) {
                        controlller.showNotifications('Error message', 'All fields are required to be filled', './images/icons/error.jpeg')
                        return
                    }
                    controlller.editProduct(payload)
                }
            }
        }
    ]
})