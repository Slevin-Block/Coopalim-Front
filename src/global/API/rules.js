import fetcher from "../functions/fetcher"

export const readRules = async (query) => {
/*     if (!id){
        console.log("Bad identification payload to login")
        return
    } */

    let res = await fetcher(`/rules`, 'GET')
    if (res.ok){
        return res
    }else{
        return null
    }

}