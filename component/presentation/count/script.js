import elementCreator from "../../../elementCreator";
import count from './count.pug'

elementCreator({
    name: "amount-element",
    pugFunc: count,
    atr: ['count']
})