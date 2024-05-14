import fs from 'fs';

let directory = "../../component"
let pathToWrite = '../../unitComponent.js'
let files = fs.readdirSync(directory)
let filesSubdir = files.map((file)=>{
    return fs.readdirSync(`${directory}/${file}`)
})
let scriptPath = filesSubdir.map((arrOfFiles, id)=>{
    return arrOfFiles.map((lastDir)=>{
        let fileDirToRead = `${directory}/${files[id]}/${lastDir}`
        let fileDirToImport = `./component/${files[id]}/${lastDir}`
        if (!fs.readdirSync(fileDirToRead).includes('script.js')){
            throw Error(`No script file found in ${fileDirToRead}`)
        }
        return `import("${fileDirToImport}/script.js");`
    })
})

let contentToWrite = scriptPath.map(arr=>{
    return arr.join(' ')
}).join('\r\n')
let data = `${contentToWrite} \r\n export {}`
fs.writeFile(pathToWrite, data, (err)=>{
    if(err){
        throw Error('Error writing to file ' + pathToWrite)
    }
    console.log('Done writing to file ' + pathToWrite)
})
