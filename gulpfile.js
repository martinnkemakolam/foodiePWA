import GulpClient from "gulp";
import fs from "fs";

let getFiles=()=>{
    let directory = "./component"
    let files = fs.readdirSync(directory)
    let filesSubdir = files.map((file)=>{
        return fs.readdirSync(`${directory}/${file}`)
    })
    return filesSubdir.map((arrOfFiles, id)=>{
        // console.log(arrOfFiles)
        return arrOfFiles.map((lastDir)=>{
            let fileDirToRead = `${directory}/${files[id]}/${lastDir}`
            if (!fs.readdirSync(fileDirToRead).includes('script.js')){
                throw Error(`No script file found in ${fileDirToRead}`)
                return
            }
            console.log(`${fileDirToRead}/script.js`)
            return `${fileDirToRead}/script.js`
        })
    })
}
// GulpClient.task('run', ()=>{
//     let files = getFiles()
//     console.log(files)
// })
let files = getFiles()
export let task = console.log('this is',)