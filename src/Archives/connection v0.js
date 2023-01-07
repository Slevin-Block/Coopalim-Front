import axios from "axios"
import env from "react-dotenv";


export const login = async (payload) => {

    if (!payload || !payload?.login || !payload?.password){
        console.log("Bad identification payload to login")
        return
    }

    const instance = axios.create({
        baseURL : env.API_URL
    })

    console.log('trying login')

    let res
    try{
        res = await instance.post('/login', payload)
    }catch(err){
        console.log(err.response.data)
        return
    }
    console.log("auth success")
    instance.defaults.headers.common['authorization'] = `Bearer ${res.data.accessToken}`
    localStorage.setItem('COOPALIM - TM', JSON.stringify(res.data.refreshToken));
    sessionStorage.setItem('COOPALIM - TM', JSON.stringify(res.data.accessToken));
    console.log(res.data.user)
    return res.data.user
}

export const autoLogin = async () => {

    // Try to login with Auth Token
    const accessToken= JSON.parse(sessionStorage.getItem('COOPALIM - TM')) || undefined
    if (accessToken === undefined){
        console.log("No auth token")
        return byRefreshToken()
    }
    
    const instance = axios.create({
        baseURL : env.API_URL
    })
    instance.defaults.headers.common['authorization'] = `Bearer ${accessToken}`
    let res
    try{
        res = await instance.get('/login')
    }catch(err){
        if (err.response.status === 401) return byRefreshToken()
        console.log(err.response.data)
        return null
    }

    return res.data.user
}

const byRefreshToken = async () => {
    
    // Try to login with Auth Token
    const refreshToken= JSON.parse(localStorage.getItem('COOPALIM - TM')) || undefined
    if (refreshToken === undefined){
        console.log("No refresh token")
        return null
    }
    const instance = axios.create({
        baseURL : env.API_URL
    })
    instance.defaults.headers.common['authorization'] = `Bearer ${refreshToken}`
    let res
    try{
        res = await instance.get('/refreshtoken')
    }catch(err){
        console.log("Error : " + err.response)
        return
    }
    localStorage.setItem('COOPALIM - TM', JSON.stringify(res.data.refreshToken));
    sessionStorage.setItem('COOPALIM - TM', JSON.stringify(res.data.accessToken ));
    return res.data.user
}

export const logout = async () => {

    // Grabbing access and refresh token to render with logout
    const accessToken= JSON.parse(sessionStorage.getItem('COOPALIM - TM')) || undefined
    const refreshToken= JSON.parse(localStorage.getItem('COOPALIM - TM')) || undefined
    if (!accessToken || !refreshToken){
        console.log("No auth or refresh token")
        return null
    }

    // Call API to perform logout
    const instance = axios.create({
        baseURL : env.API_URL
    })
    instance.defaults.headers.common['authorization'] = `Bearer ${accessToken}`
    let res
    try{
        res = await instance.post('/logout', {refreshToken})
    }catch(err){
        console.log("Error : " + err.response)
        return
    }
    if (res.status === 200) console.log(res.data)
    sessionStorage.removeItem('COOPALIM - TM')
    localStorage.removeItem('COOPALIM - TM')
}