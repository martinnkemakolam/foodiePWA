import elementCreator from '../../../elementCreator.js'
import cart from './cart.pug'

elementCreator({
    name: 'cart-page',
    pugFunc: cart,
    selector: [(model)=> model.showFooter]
})