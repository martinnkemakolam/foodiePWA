import elementCreator from "../../../elementCreator.js";
import { controlller } from "../../../stateManager.js";
import overlay from "./overlay.pug";
elementCreator({
    name: 'overlay-element',
    pugFunc: overlay,
    func: [{
            event: 'click',
            callback: function(e){
                if ('close' in e.target.dataset) {
                    controlller.showOverlay(this)
                }
            }
        }]
})