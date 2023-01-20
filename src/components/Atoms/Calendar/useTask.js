import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useRecoilValue } from "recoil"
import useSWR from 'swr'
import fetcher from "../../../global/functions/fetcher"
import { sessionState } from "../../../global/Providers/session"


export const taskExample = (day) => {
        return {  
            label : "Test",
            
            description : "Oh my Godness",
            startTime : new Date(dayjs(day).hour(12).minute(15)),
            endTime : new Date(dayjs(day).hour(14).minute(15)),

            numberOfParticipators : 4,
            numberOfNovice :        1,
            numberOfAutonomous :    3,
            neededAttributions :    [],

            particiaptors :      [],

            isUrgent : true,
        }}

export const useTask = () => {
    const session = useRecoilValue(sessionState)
    const navigate = useNavigate()

    // Current month and year
    const [month, onMonthChange] = useState(new Date());
    const refMonthYearObj = (date) => { return {month : dayjs(date).month(), year : dayjs(date).year()} }
    const monthObj = refMonthYearObj(month)

    // Use useSWRInfinite will be better ... but how ... see (https://swr.vercel.app/docs/pagination#useswrinfinite)
    const {data, mutate} = useSWR([`/tasks?month=${monthObj.month}&year=${monthObj.year}`, 'GET', null, session?.token],
                                ([url, method, payload, token]) => fetcher(url, method, payload, token), {revalidateOnFocus : false})

    useEffect(() => {
        if (data?.status === 400) mutate()
        if (session === null) navigate('/')
    }, [session])

    // Store day, occurancy of each and compile isUrgent
    const tasks = data?.status === 200 ?  data?.data
                    .filter(task => dayjs(task.startTime).month() === dayjs(month).month())
                    .map(task => {return {day : dayjs(task.startTime).date(), isUrgent : task.isUrgent, qty : 1}})
                    .flatMap((task, i, tasks) => {
                        if(i > 0 && tasks.slice(0, i).map(t => t.day).includes(task.day)) return []
                        const arr = tasks.filter(t => t.day === task.day)
                        const obj = {...task}
                        obj.month = monthObj.month
                        obj.qty = arr.length
                        obj.isUrgent = arr.reduce((a,b) => a && b.isUrgent, true)
                        return {...obj}
                    })
                    : []


    const sendTask = async(day) => {
        const res = await fetcher('/tasks', 'POST', taskExample(day), session?.token)
        mutate()
        console.log(res)
    }

    return { month, onMonthChange, tasks, sendTask, }
}