import { useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { logout as logoutProcess } from '../../functions/connection'
import { infoBulleState } from '../../Providers/infoBulle'
import { sessionState } from '../../Providers/session'
import { userState } from '../../Providers/user'

export const useConnectionStatus = () => {
    const navigate = useNavigate()
    const user = useRecoilValue(userState)
    const [,setInfoBulle] = useRecoilState(infoBulleState)
    const [,setSession] = useRecoilState(sessionState)
    const isLogged = !!user

    const logout = async () => {
        setSession(null)
        setInfoBulle({open : true, msg : "Vous avez été déconnecté avec succès"})
        await logoutProcess()
        navigate('/')
    }

    return {isLogged, logout}
}