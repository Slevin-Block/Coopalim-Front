import fetcher from "./fetcher"



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
