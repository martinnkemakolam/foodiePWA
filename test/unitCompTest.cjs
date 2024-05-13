const assert = require("assert");
// const { assert } = require("console");
let fs = require("fs");
describe('Unit component test',() => {
    let directory = "../component"
    let files = fs.readdirSync(directory)
    let filesSubdir = files.map((file)=>{
        return fs.readdirSync(`${directory}/${file}`)
    })
    let scriptPath = filesSubdir.map((arrOfFiles, id)=>{
        return arrOfFiles.map((lastDir)=>{
            let fileDirToRead = `${directory}/${files[id]}/${lastDir}`
            if (!fs.readdirSync(fileDirToRead).includes('script.js')){
                throw Error(`No script file found in ${fileDirToRead}`)
                return
            }
            return `${fileDirToRead}/script.js`
        })
    })
    let containerPath = scriptPath[0]
    let pagesPath = scriptPath[1]
    it('should read files in a directory',()=>{
        assert.equal(true, files.length === 3)
    })
    it('should check if files in a directory has a sub directory', ()=>{
        assert.equal(true, filesSubdir.length > 0)
    })
    it('should check for script files and return the paths to import', ()=>{
        console.log(scriptPath[0])
        assert.equal(true,  scriptPath.includes('script.js'))
    })
})