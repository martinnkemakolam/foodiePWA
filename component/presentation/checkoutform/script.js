import checkoutform from './checkoutform.pug'
import elementCreator from "../../../elementCreator.js";

elementCreator({
    name: 'checkoutform-element',
    pugFunc: checkoutform,
    // ref: [['sum']]
    selector: [(model)=> model.sum]
})