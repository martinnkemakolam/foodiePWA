import elementCreator from "../../../elementCreator.js";
import product from './product.pug'

elementCreator({
    name: 'product-page',
    pugFunc: product,
    selector: [(model, ele)=> model.showFooter]
})