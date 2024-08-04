import elementCreator from '../../../elementCreator.js'
import cmspage from './cmspage.pug'

elementCreator({
    name: 'cms-page',
    pugFunc: cmspage,
    selector: [(model)=> model.authObject, (model)=> model.showFooter],
    // ref: [["authObject", "email"]]
})
