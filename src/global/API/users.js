import fetcher from "../functions/fetcher"

export const signup = async (payload, token) => {
    if (!payload){
        console.log("Bad identification payload to login")
        return
    }

    let res = await fetcher('/users', 'POST', payload, token)
    console.log(res)
    if (res.ok){
        return res
    }else{
        return null
    }
}

export const deleteUser = async (id, token) => {
    if (!id){
        console.log("Bad identification payload to login")
        return
    }

    let res = await fetcher(`/users/${id}`, 'DELETE', null, token)
    console.log(res)
    if (res.ok){
        return res
    }else{
        return null
    }
}

export const editUser = async (id, payload, token) => {
    if (!id){
        console.log("Bad identification payload to login")
        return
    }

    let res = await fetcher(`/users/${id}`, 'PUT', payload, token)
    console.log(res)
    if (res.ok){
        return res
    }else{
        return null
    }
}