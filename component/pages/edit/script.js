import elementCreator from "../../../elementCreator.js";
import edit from './edit.pug'
elementCreator({
    name: 'edit-page',
    pugFunc: edit,
    selector: [(model, ele)=> model.showFooter, (model, ele)=>model.product.filter(e=> e._id === ele.value.param)[0]]
})