import cms from './cms.pug'
import elementCreator from "../../../elementCreator"

elementCreator({
    name: "cms-element",
    pugFunc: cms,
    atr: ['imgsrc', 'name', 'extra', 'price', 'uid'],
    func: [{
        event: "click",
        callback: function(e){
            if ('delete' in e.target.dataset) {
                console.log(this.value.uid)
                controlller.deleteProduct(this.value.uid)
            }else if ('edit' in e.target.dataset) {
                // route to edit page
            }
        }
    }]
})