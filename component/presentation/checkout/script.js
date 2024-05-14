import elementCreator from '../../../elementCreator.js'
import checkout from './checkout.pug'

elementCreator({
    name: 'checkout-element',
    pugFunc: checkout,
    func: [
        {
            event: 'click',
            callback: function (e){
                if ('checkout' in e.target.dataset) {
                    controlller.showOverlay(document.querySelector('cart-page'))
                }
            }
        }
    ]
})
