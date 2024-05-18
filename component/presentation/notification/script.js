import elementCreator from "../../../elementCreator.js";
import notification from './notification.pug'

elementCreator({
    name: "notification-element",
    pugFunc: notification,
    ref: [['notification', 'show'], ['notification', 'src'], ['notification', 'title'], ['notification', 'msg']]
})
