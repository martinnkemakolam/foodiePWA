import elementCreator from "../../../elementCreator.js";
import dynproduct from './product[id].pug'

elementCreator({
    name: "dynamicproduct-page",
    pugFunc: dynproduct,
    selector: [(model, ele)=> model.showFooter, (model, ele)=> model.product.filter(e=> e._id === ele.value.param)[0]]
    // ref: [['product']]
})