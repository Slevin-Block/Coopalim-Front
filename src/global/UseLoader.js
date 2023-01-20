import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { sessionState } from './Providers/session'
import { refreshLogin } from './API/connection'
import { rulesState } from './Providers/rules'
import { readRules } from './API/rules'
import { attributionsState } from './Providers/attributions'
import { readAttributions } from './API/attributions'
import { loadingState } from './Providers/Loading'
import { infoBulleState } from './Providers/infoBulle'
import useSWR from 'swr'
import fetcher from './functions/fetcher'

export const useLoader = () => {

    // Principals fetchings with SWR
    const { data : auth, mutate}        = useSWR('/authorization',() => refreshLogin())
    const { data: rulesFetched }        = useSWR(['/rules', 'GET'], ([url, method]) => fetcher(url, method), {revalidateOnFocus : false})
    const { data: attributionsFetched } = useSWR(['/attributions', 'GET'], ([url, method]) => fetcher(url, method), {revalidateOnFocus : false})

    // Mirors 
    const [isLoading, setIsLoading] = useRecoilState(loadingState)
    const [session, setSession] = useRecoilState(sessionState)
    const [rules, setRules] = useRecoilState(rulesState)
    const [attributions, setAttributions] = useRecoilState(attributionsState)
    const [, setInfoBulle] = useRecoilState(infoBulleState)

    // If SWR find a session or if the refreshLogin process is unsuccessful
    useEffect(() => {
        let intervall
        if (!!auth && auth?.status !== 502 || auth === null){

            auth?.status === 200 && setSession(auth.data)
            setIsLoading(false)
        } else {
            intervall = setInterval(() => { mutate()
                                            setIsLoading(true) }, 5000)
        }

        return () => { clearInterval(intervall) }
    },[auth])


    // Rules Provider Link
    useEffect(() => { setRules(rulesFetched?.data) },[rulesFetched])

    // Attributions Provider Link
    useEffect(() => { setAttributions(attributionsFetched?.data) },[attributionsFetched])

    /* console.log("-------CONNECTION--------")
    console.log("auth : ", auth)
    console.log("status : " + auth?.status)
    console.log("SESSION : ", session)
    console.log("RULES : ", rules)
    console.log("ATTRIBUTIONS : ", attributions)
    console.log("------------------------") */
    return {isLoading}
}