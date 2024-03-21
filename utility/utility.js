export let objHasAnEmptyValue=(obj)=> {
    console.log(obj)
    let value = false
    Object.values(obj).forEach(ele=>{
        if(typeof ele === 'undefined' || typeof ele === "null" || ele.length === 0){
            value = true
        }
    })
    return value
}
export let getValue = function(e){
    console.log(e)
    return this.querySelector(e).value
}