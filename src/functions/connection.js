import env from "react-dotenv";

/**
 * 
 * @param {*} path 
 * @param {*} method 
 * @param {*} body 
 * @param {*} token 
 * @returns 
 */
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
        if (obj.status === 200) {
            obj.data = await res.json()
            obj.ok = true
        }else{
            obj.data = null
            obj.ok = false
        }
    }catch(err){
        obj.data = null
        obj.ok = false
    }
    return obj
}

export const login = async (payload) => {
    if (!payload || !payload?.login || !payload?.password){
        console.log("Bad identification payload to login")
        return
    }
    console.log('trying login')
    let res = await fetcher('/login', 'POST', payload)
    if (res.ok){
        localStorage.setItem('COOPALIM - TM', JSON.stringify(res.data.refreshToken));
        return {user : res.data.user, token : res.data.accessToken}
    }else{
        return null
    }
}

export const refreshLogin = async () => {
    let res
    const refreshToken= JSON.parse(localStorage.getItem('COOPALIM - TM'));
    if (!refreshToken){
        return null
    }
    res = await fetcher('/authorization', 'GET', null, refreshToken);
    if (res.ok){
        localStorage.setItem('COOPALIM - TM', JSON.stringify(res.data.refreshToken));
        return {user : res.data.user, token : res.data.accessToken}
    }else{
        return null
    }
}




export const logout = async () => {

    // Grabbing refresh token to render with logout
    const refreshToken= JSON.parse(localStorage.getItem('COOPALIM - TM')) || undefined

    if (!refreshToken){
        console.log("No auth or refresh token")
        return null
    }

    // Call API to perform logout
    localStorage.removeItem('COOPALIM - TM')
    try{
        await fetcher('/logout', 'GET', null, refreshToken)
        console.log("Tokens have been removed !")
    }catch(err){
        console.log("Error : " + err)
        return
    }
}
