import fetcher from "../functions/fetcher"

export const readAttributions = async (query) => {
/*     if (!id){
        console.log("Bad identification payload to login")
        return
    } */

    let res = await fetcher(`/attributions`, 'GET')
    if (res.ok){
        return res
    }else{
        return null
    }

}