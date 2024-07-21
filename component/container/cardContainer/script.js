import elementCreator from "../../../elementCreator.js"
import { controlller, view } from "../../../stateManager.js"
import fetcher from "../../../utility/client/fetcher.js"
import cardHolder from "./cardHolder.pug"


elementCreator({
    name: 'holder-element',
    pugFunc: cardHolder,
    // privateState: {loaded: 0},
    func: [
        {
            event: 'loaded',
            callback: async function(e){
                if(view().model.product.length > 0){
                    return
                }
                const {ok, response} =  await fetcher({url: "/api/getAllProducts", method: 'GET', headers: { 'Content-Type': 'application/json'}}, this)
                if (ok) {
                    console.log(response)
                    controlller.addProduct({payload: response})
                    console.log()
                }
            }
        }
    ],
    ref: [['product']]
})