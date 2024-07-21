import elementCreator from "../../../elementCreator.js"
import cardHolder from "./cardHolder.pug"


elementCreator({
    name: 'holder-element',
    pugFunc: cardHolder,
    func: [
        {
            event: 'loaded',
            callback: function(e){
                console.log(e.target)
            }
        }
    ]
})