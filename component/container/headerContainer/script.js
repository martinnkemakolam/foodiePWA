import elementCreator from '../../../elementCreator.js';
import { controlller, view } from '../../../stateManager.js';
import fetcher from '../../../utility/client/fetcher.js';
import header from './header.pug'

elementCreator({
    name: 'header-element',
    atr: [],
    pugFunc: header,
    selector: [(model)=> model.authObject.email, (model)=> model.authObject.role],
    privateState: {
        tags: []
    },
    func: [
        {
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
                controlller.showOverlay()
            }
            if (e.target.dataset.btn === 'logout') {
                controlller.logout()
                controlller.showNotifications('Logout', "you've successfully logged out", './images/icons/success.png')
            }
        }
    },{
        event: "loaded",
        callback: async function(e){
            //TODO: Add layouts 
            // console.log("Loaded",e.target)    
            const {ok, response} = await fetcher({url: '/api/getAllTags', method: 'GET', headers: {
                "accept": "application/json",
                "content-type": "application/json"
            }}, this)
            if (ok) {
                this.setState("tags", [...response])
            }
        }
    }],
    // ref: [["authObject"]]
})