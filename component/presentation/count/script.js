import elementCreator from "../../../elementCreator.js";
import count from './count.pug'

elementCreator({
    name: "amount-element",
    pugFunc: count,
    atr: ['count']
})