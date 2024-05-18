import elementCreator from "../../../elementCreator.js"
import { controlller } from "../../../stateManager.js"
import productdetail from './productdetail.pug'

elementCreator({
    name: "productdetail-element",
    atr: ["name", "detail", "extradetail", "count", "price", "src", "uid"],
    pugFunc: productdetail,
    func: [
        {
            event: 'click',
            callback: function(e){
                if ('plus' in e.target.dataset) {
                    controlller.editProductCount(true, this.value.uid)
                    controlller.showNotifications('Added to cart', `${this.value.name + ' at $'+ this.value.price} has been added to your cart`, this.value.src)
                }
                if ('minus' in e.target.dataset) {
                    controlller.editProductCount(false, this.value.uid)
                    controlller.showNotifications('Removed from cart', `${this.value.name + ' at $'+ this.value.price} has been removed to your cart`, this.value.src)
                }
                if ('addtocart' in e.target.dataset) {
                    controlller.editProductCount(true, this.value.uid)
                    controlller.showNotifications('Added to cart', `${this.value.name + ' at $'+ this.value.price} has been added to your cart`, this.value.src)
                }
            }
        }
    ]
})