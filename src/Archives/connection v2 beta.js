import env from "react-dotenv";

// Connection v2

/**
 * 
 * @param {*} path 
 * @param {*} method 
 * @param {*} body 
 * @param {*} token 
 * @returns 
 */
const fetcher = (path, method, body = null, token = null) => {
    const baseURL = env.API_URL
    
    // Add Method, Body, Token and Full JSON header 
    const options = {method : method.toUpperCase()}
    body && (options.body = JSON.stringify(body))
    token && options.headers.append('Authorization', `Bearer ${token}`)
    options.headers = new Headers({
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
    });
    
    return fetch(`${baseURL}${path}`, options).then(res => res.json())
}

export const loginFetcher = (payload) => {
    console.log("Payload : ", payload)
    if (payload === null) return null
    console.log('trying login')
    return fetcher('/login', 'POST', payload)
}

const withLoginData = (data) => {
    localStorage.setItem('COOPALIM - TM', JSON.stringify(data.refreshToken));
    return {user : data.user, token : data.accessToken}
}

/* 
export const autoLogin = async () => {
    console.log("AUTOLOGIN")
    let res
    const refreshToken= JSON.parse(localStorage.getItem('COOPALIM - TM'));
    if (!refreshToken){
        //console.log("refresh token inexistent")
        return null
    }
    //console.log("Old RT : ", refreshToken)
    try{
        res = await fetcher('/authorization', 'GET', null, refreshToken);
    }catch(err) {
        console.log("unautorize")
        return null
    }
    console.log('Connection successful')
    //console.log("New RT : ", res.refreshToken)
    localStorage.setItem('COOPALIM - TM', JSON.stringify(res.refreshToken));
    return {user : res.user, token : res.accessToken};
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
 */