import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { sessionState } from './Providers/session'
import { refreshLogin } from './API/connection'
import { rulesState } from './Providers/rules'
import { attributionsState } from './Providers/attributions'
import { loadingState } from './Providers/Loading'
import useSWR from 'swr'
import fetcher from './functions/fetcher'

export const useLoader = () => {

    // Principals fetchings with SWR
    const { data : auth, mutate}        = useSWR('/authorization',() => refreshLogin())
    const { data: rulesFetched }        = useSWR(['/rules', 'GET'], ([url, method]) => fetcher(url, method), {revalidateOnFocus : false})
    const { data: attributionsFetched } = useSWR(['/attributions', 'GET'], ([url, method]) => fetcher(url, method), {revalidateOnFocus : false})

    // Mirors 
    const [isLoading, setIsLoading] = useRecoilState(loadingState)
    const [, setSession] = useRecoilState(sessionState)
    const [, setRules] = useRecoilState(rulesState)
    const [, setAttributions] = useRecoilState(attributionsState)

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

    return {isLoading}
}