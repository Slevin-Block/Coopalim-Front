import { useEffect, useState } from 'react'

import { useForm } from "react-hook-form"
import { TaskSchema as schema } from '../../../assets/pattern/formPattern'
import { yupResolver } from '@hookform/resolvers/yup'

import fetcher from '../../../global/functions/fetcher'

import { useRecoilState, useRecoilValue } from "recoil"
import { attributionsState } from "../../../global/Providers/attributions"
import { sessionState } from '../../../global/Providers/session'
import { infoBulleState } from '../../../global/Providers/infoBulle'


export const useTaskForm = (data, mode, onClose) => {

    // We need attribution list to prepare defaultValues
    const attributions = useRecoilValue(attributionsState)
    const session = useRecoilValue(sessionState)
    const [, setInfoBulle] = useRecoilState(infoBulleState)
    const [confirmation, setConfirmation] = useState({edit : false, delete : false})


    // DefaultValues to load into form
    const defaultValues = {
        label: data?.label || '',
        description: data?.description || '',
        isUrgent: data?.isUrgent === undefined ? true : data.isUrgent,
        day: data?.startTime,
        startTime: data?.startTime,
        endTime: data?.endTime,
        participators: data?.participators ? [...data?.participators] : [],
        neededAttributions: attributions?.map(att => { return { ...att, check: data?.neededAttributions?.includes(att._id) ? true : false } }),
        numberOfParticipators: data?.numberOfParticipators || 3,
        numberOfNovice: data?.numberOfNovice || 2,
        numberOfAutonomous: data?.numberOfAutonomous || 1,
    }

    // React Hook Form
    const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm({ defaultValues, resolver: yupResolver(schema) })

    // Generate good data to send into DB
    const onSubmit = (newData) => {

        const dayBase = new Date(newData.day)
        const startHourBase = new Date(newData.startTime)
        const endHourBase = new Date(newData.endTime)
        const startTime = new Date(dayBase.getFullYear(), dayBase.getMonth(), dayBase.getDate(), startHourBase.getHours(), startHourBase.getMinutes())
        const endTime = new Date(dayBase.getFullYear(), dayBase.getMonth(), dayBase.getDate(), endHourBase.getHours(), endHourBase.getMinutes())
        const obj = (mode !== 'participate') ?
            {
                label: newData?.label,
                description: newData?.description,
                //template
                participators: newData.participators,
                startTime: startTime,
                endTime: endTime,
                isUrgent: newData?.isUrgent,
                neededAttributions: newData?.neededAttributions?.flatMap(att => att.check ? att._id : []),
                numberOfParticipators: newData?.numberOfParticipators || 0,
                numberOfNovice: newData?.numberOfNovice || 0,
                numberOfAutonomous: newData?.numberOfAutonomous || 0,
            } :
            {
                taskId : data._id,
                userId : session.user.id,
            }

        if (mode === 'edit') obj.id = data._id
        
        if (mode === 'create'){
            (async()=>{
                const res = await fetcher('/tasks', 'POST', obj, session.token)
                if (res.status === 201) setInfoBulle({open : true, msg : `Tâche créée !`})
                else setInfoBulle({open : true, msg : `Erreur !`, warning : true})
                onClose()
            })()
        }

        if (mode === 'edit'){
            (async()=>{
                const res = await fetcher('/tasks', 'PUT', obj, session.token)
                if (res.status === 200) setInfoBulle({open : true, msg : `Modification effectuée !`})
                else setInfoBulle({open : true, msg : `Erreur !`, warning : true})
                onClose()
            })()
        }

        if (mode === 'participate'){
            (async()=>{
                const res = await fetcher(`/shifts`, 'POST', obj, session.token)
                if (res.status === 200) setInfoBulle({open : true, msg : `Modification effectuée !`})
                else setInfoBulle({open : true, msg : `Erreur !`, warning : true})
                onClose()
            })()
        }


    }

    return { register, handleSubmit, onSubmit, errors, getValues, setValue, confirmation, setConfirmation}
}   