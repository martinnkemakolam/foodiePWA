import elementCreator from "../../../elementCreator"
import footer from './footer.pug'

elementCreator({
    name: "footer-element",
    pugFunc: footer,
    func: [
        {
            event: "click",
            callback: function(e){
                if ("install" in e.target.dataset) {
                    let prompt = promptEvent()
                    prompt.installFunc()
                }
                if("close" in e.target.dataset) {
                    controlller.hideBanner()
                }
            }
        }
    ]
})