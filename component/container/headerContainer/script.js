import elementCreator from '../../../elementCreator';
import header from './header.pug'

elementCreator({
    name: 'header-element',
    atr: [],
    pugFunc: header,
    func: [{
        event: 'input',
        callback: function(e){
                if ('input' in e.target.dataset) {
                    console.log('worked', document.querySelector('.foodGrid'), this);
                }
        },
    }, { 
        event: 'change',
        callback: function(e){
            if ('option' in e.target.dataset) {
                console.log('worked', e.target.value);   
            }
        }
    },{
        event: 'click',
        callback: function(e){
            if('login' in e.target.dataset) {
                controlller.showOverlay(document.querySelector('overlay-element'))
            }
        }
    }]
})