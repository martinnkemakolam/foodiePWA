import elementCreator from "../../../elementCreator.js"
import img from './img.pug'

elementCreator({
    name: 'addimage-element',
    pugFunc: img,
    atr: ['imgsrc'],
    func: [
        {
            event: "change",
            callback: function(e){
                if('file' in e.target.dataset){
                    let file = e.target.files[0]
                    let fileReader = new FileReader()
                    fileReader.onload=(e)=>{
                        let result = e.target.result
                        this.value.imgsrc = result
                        document.querySelector('form-element').setAttribute('imgsrc', result)
                        this.render()
                    }
                    fileReader.readAsDataURL(file)
                }
            }
        }
    ]
})
