import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { userState } from '../../Providers/user'
import { sessionState } from '../../Providers/session'
import { refreshLogin } from '../../functions/connection'
import { infoBulleState } from '../../Providers/infoBulle'

export const useUser = (initialValue) => {
    const [user, setUser] = useState(initialValue)
    const [session, setSession] = useRecoilState(sessionState)
    const [, setInfoBulle] = useRecoilState(infoBulleState)
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
        console.log(recoilUser)
        recoilUser && setInfoBulle({open : true, msg : `Bienvenue ${recoilUser.firstname}`})
    }, [recoilUser])

    return user
}