const assert = require("assert");
// const { assert } = require("console");
let fs = require("fs");
describe('Unit component test',() => {
    let directory = "../../component"
    let pathToWrite = '../../unitComponent.js'
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
            return `import("${fileDirToRead}/script.js");`
        })
    })
    let containerPath = scriptPath[0]
    let pagesPath = scriptPath[1]
    let presentationPath = scriptPath[2]
    let contentToWrite = scriptPath.map(arr=>{
        return arr.join(' ')
    }).join('\r\n')
    it('should read files in a directory',()=>{
        assert.equal(true, files.length === 3)
    })
    it('should check if files in a directory has a sub directory', ()=>{
        assert.equal(true, filesSubdir.length > 0)
    })
    it('should check for script files and return the paths to import', ()=>{
        console.log(scriptPath[0])
        assert.equal(true,  containerPath[0].includes('script.js') && pagesPath[0].includes('script.js') && presentationPath[0].includes('script.js'))
    })
    it('should write to a file', ()=>{
        fs.writeFile(pathToWrite, contentToWrite, (err)=>{
            if(err){
                throw Error('Error writing to file ' + pathToWrite)
            }
            fs.readFile(pathToWrite, (err, data)=>{
                if (err) {
                    throw Error('Error reading file ' + pathToWrite)
                }
                assert.equal(true, data.length > 0)
                fs.truncate(pathToWrite, 0, err =>{
                    if (err) {
                        throw Error('Error clearing file ' + pathToWrite)
                    }
                    console.log('cleared file')
                })
            })
        })
    })
})
