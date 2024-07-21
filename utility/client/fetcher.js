let base
let header
let lastResponse
export default async ({url, method, headers, body}, controlObj)=>{
    try {
        controlObj.setState("isLoading", true)
        let data = await fetch(base ?? `http://localhost:3080` + url, {
            method: method,
            headers: headers,
            body: JSON.stringify(body)
        })
        if (data.ok) {
            let obj = await data.json()
            controlObj.setState("isLoading", false)
            return {
                ok: true,
                response: obj
            }   
        }else{
            let obj = await data.json()
            controlObj.setState("isLoading", false)
            return {
                ok: false,
                response: obj
            }
        }
    } catch (error) {
        // Create a custom error page that shows when something goes wrong
        console.error(error)
        // controlller.changeFetchState(false)
        controlObj.setState("isLoading", false)
        return {
            error: error.message,
        }
    }
}

export const makePersistent = ()=>{
    
}
export const addBase=(baseURL)=>{
    base = baseURL
}
export const addHeader=(headers)=>{
    header = header
} 