import env from "react-dotenv";

const fetcher = async (path, method, body = null, token = null) => {
    const baseURL = env.API_URL
    const options = {}

    options.method = method.toUpperCase()

    options.headers = new Headers({
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
    });
    
    // Add JWT into header
    token && options.headers.append('Authorization', `Bearer ${token}`)
    
    body && (options.body = JSON.stringify(body))

    const obj = {}
    try {
        const res = await fetch(`${baseURL}${path}`, options)
        obj.status = res.status
        if (parseInt(obj.status / 10) === 20) {
            obj.data = await res.json()
            obj.ok = true
        }else{
            obj.data = await res.json()
            obj.ok = false
        }
    }catch(err){
        obj.status = 502
        obj.data = undefined
        obj.ok = false
    }
    return obj
}

export default fetcher