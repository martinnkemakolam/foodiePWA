// import fs from 'fs';

// getFiles=()=>{
//     let directory = "../component"
//     let files = fs.readdirSync(directory)
//     let filesSubdir = files.map((file)=>{
//         return fs.readdirSync(`${directory}/${file}`)
//     })
//     return filesSubdir.map((arrOfFiles, id)=>{
//         arrOfFiles.map((lastDir)=>{
//             let fileDirToRead = `${directory}/${files[id]}/${lastDir}`
//             if (!fs.readdirSync(fileDirToRead).includes('script.js')){
//                 throw Error(`No script file found in ${fileDirToRead}`)
//                 return
//             }
//             return `${fileDirToRead}/script.js`
//         })
//     })
// }
// export let files = getFiles()