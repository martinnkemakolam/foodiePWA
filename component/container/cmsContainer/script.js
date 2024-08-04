import elementCreator from '../../../elementCreator.js'
import cms from './cmsholder.pug'

elementCreator({
    name: "cmsholder-element",
    selector: [(model)=>model.product],
    pugFunc: cms,
    ref: [['product']]
})