import elementCreator from "../../../elementCreator.js";
import order from './order.pug'

elementCreator({
    name: 'order-page',
    pugFunc: order,
    selector: [(model)=>model.order, (model)=>model.showFooter]
})