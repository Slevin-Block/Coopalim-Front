import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { userState } from './Providers/user'
import { sessionState } from './Providers/session'
import { refreshLogin } from './functions/connection'

export const useUser = (initialValue) => {
    const [user, setUser] = useState(initialValue)
    const [session, setSession] = useRecoilState(sessionState)
    let recoilUser = useRecoilValue(userState)


    useEffect(() => {
        (async () => {
            if (!session){
                const res = await refreshLogin()
                setSession(res)
            }
        })()
    },[])

    useEffect(() => {
        setUser(recoilUser)
    }, [recoilUser])

    return user
}