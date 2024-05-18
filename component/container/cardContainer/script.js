import elementCreator from "../../../elementCreator.js"
import cardHolder from "./cardHolder.pug"


elementCreator({
    name: 'holder-element',
    pugFunc: cardHolder,
    ref: [['product']]
})