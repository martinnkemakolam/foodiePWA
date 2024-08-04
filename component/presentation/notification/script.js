import elementCreator from "../../../elementCreator.js";
import notification from './notification.pug'

elementCreator({
    name: "notification-element",
    pugFunc: notification,
    selector: [(model)=> model.notification]
    // ref: [['notification', 'show']]
})
