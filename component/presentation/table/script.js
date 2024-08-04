import elementCreator from "../../../elementCreator.js";
import table from './table.pug'
elementCreator({
    name: 'table-element',
    pugFunc: table,
    selector: [(model)=>model.product.filter((ele)=> ele.count>0)]
    // ref: [['product']]
})