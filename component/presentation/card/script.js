import elementCreator from '../../../elementCreator.js'
import { controlller } from '../../../stateManager.js'
import card from './card.pug'
import { view } from '../../../stateManager.js'
import { document } from 'postcss'

elementCreator({
    name: 'card-element',
    pugFunc: card,
    atr: ['src', 'name', 'detail', 'count', 'uid', 'price'],
    selector: [(state, ref)=> state.product.find((product)=> product.uid === ref.value.uid).count],
    func: [{
        event: 'click',
        callback: function (e) {
            if('addtocart' in e.target.dataset) {
                console.log(this.value.uid)
                controlller.editProductCount(true, this.value.uid)
                controlller.showNotifications('Added to cart', `${this.value.name + ' at $'+ this.value.price} has been added to your cart`, this.value.src)
            }
        }
    }],
    ref: [['product']]
})