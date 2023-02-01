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
            day : new Date(day.getFullYear(), day.getMonth(), day.getDate()),
            startTime : new Date(dayjs(day).year(), dayjs(day).month(), dayjs(day).date(), 15, 45),
            endTime : new Date(dayjs(day).year(), dayjs(day).month(), dayjs(day).date(), 17, 30),

            numberOfParticipators : 4,
            numberOfNovice :        1,
            numberOfAutonomous :    3,
            neededAttributions :    [],

            participators :         ['63aefb12df967589367c73bd', '63d12fbbec57e421f5a3dc46'],

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
                    // We conserve only task of the current month
                    .filter(task => dayjs(task.startTime).month() === dayjs(month).month())

                    // We concerve only data we needed, day, isUrgent, qty
                    .map(task => {return {day : dayjs(task.startTime).date(), isUrgent : task.isUrgent, qty : 1, ids : task._id}})

                    // We aggregate data, qty, isUrgent and ids 
                    .flatMap((task, i, tasks) => {
                        if(i > 0 && tasks.slice(0, i).map(t => t.day).includes(task.day)) return []
                        const arr = tasks.filter(t => t.day === task.day)
                        const obj = {...task}
                        obj.month = monthObj.month
                        obj.qty = arr.length
                        obj.isUrgent = arr.reduce((a,b) => a || b.isUrgent, false)
                        obj.ids = arr.map(task => task.ids)
                        return {...obj}
                    })
                    : []



    const isAdmin = session?.user?.rule === '63b85947008e71f329ecd4bc'
    
    return { isAdmin, month, onMonthChange, tasks, mutate, globalData : data?.data }
}