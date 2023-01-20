import { useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { sessionState } from '../../../global/Providers/session'
import useSWR from 'swr'
import fetcher from "../../../global/functions/fetcher"
import { deleteUser } from '../../../global/API/users'
import { useNavigate } from 'react-router-dom'


export const useUsers = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const session = useRecoilValue(sessionState)
    const {data, mutate} = useSWR(  ['/users', 'GET', null, session?.token],
                                    ([url, method, payload, token])=> fetcher(url, method, payload, token))

    useEffect(() => {
        if (session) {
            mutate()
            data && setIsLoading(false)
        }
    }, [session, data])

    const action = async (type, id) => {
        switch (type) {
            case "delete":
                const res = await deleteUser(id, session.token)
                console.log(res)
                mutate()
                break;
            case "edit" :
                const user = data.data.find(user => user.id === id)
                navigate('/signup', {state : user})
                break
        
            default: console.log("Type error"); break;
        }
    }

    return {isLoading, action, data}
}