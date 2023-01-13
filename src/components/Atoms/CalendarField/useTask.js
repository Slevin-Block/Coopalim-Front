import dayjs from "dayjs"
import { useEffect } from "react"
import { useRecoilValue } from "recoil"
import useSWR from 'swr'
import fetcher from "../../../global/functions/fetcher"
import { sessionState } from "../../../global/Providers/session"

export const useTask = () => {
    const session = useRecoilValue(sessionState)
    const {data, mutate} = useSWR('/tasks',(url) => fetcher(url, 'GET', null, session?.token))

    useEffect(() => {
        if (data?.status === 400) mutate()
    }, [session])


    const sendTask = async(day) => {
        const task = {  
            label : "Test",
            
            description : "Oh my Godness",
            startTime : new Date(dayjs(day).hour(12).minute(15)),
            endTime : new Date(dayjs(day).hour(14).minute(15)),

            numberOfParticipators : 4,
            numberOfNovice :        1,
            numberOfAutonomous :    3,
            neededAttributions :    [],

            particiaptors :      [],

            isNotUrgent : true,
        }
        const res = await fetcher('/tasks', 'POST', task, session?.token)
        mutate()
        console.log(res)
    }

    return {tasks : data?.data,sendTask}
}