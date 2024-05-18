import elementCreator from '../../../elementCreator.js'
import { controlller } from '../../../stateManager.js'
import card from './card.pug'

elementCreator({
    name: 'card-element',
    pugFunc: card,
    atr: ['src', 'name', 'detail', 'count', 'uid', 'price'],
    func: [{
        event: 'click',
        callback: function (e) {
            if('addtocart' in e.target.dataset) {
                controlller.editProductCount(true, this.value.uid, document.querySelector('.foodGrid').parentElement)
                controlller.showNotifications('Added to cart', `${this.value.name + ' at $'+ this.value.price} has been added to your cart`, this.value.src)
            }
        }
    }]
})