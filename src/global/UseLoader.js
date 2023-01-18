import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { sessionState } from './Providers/session'
import { refreshLogin } from './API/connection'
import { rulesState } from './Providers/rules'
import { readRules } from './API/rules'
import { attributionsState } from './Providers/attributions'
import { readAttributions } from './API/attributions'

export const useLoader = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [session, setSession] = useRecoilState(sessionState)
    const [rules, setRules] = useRecoilState(rulesState)
    const [attributions, setAttributions] = useRecoilState(attributionsState)

    // Session fetching
    useEffect(() => {
        (async () => {
            if (!session){
                const res = await refreshLogin()
                setSession(res)
                setIsLoading(true)
            }
        })()
    },[])

    // Rules fetching
    useEffect(() => {
        (async () => {
            if (!rules){
                const res = await readRules()
                setRules(res?.data)
            }
        })()
    },[])

    // Attributions fetching
    useEffect(() => {
        (async () => {
            if (!attributions){
                const res = await readAttributions()
                setAttributions(res?.data)
            }
        })()
    },[])
    
    return {isLoading}
}