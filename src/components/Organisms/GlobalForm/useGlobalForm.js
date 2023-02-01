import {useEffect, useReducer, useState} from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

import useSWR from 'swr'
import fetcher from '../../../global/functions/fetcher'
import { useForm } from 'react-hook-form'
import { sessionState } from '../../../global/Providers/session'
import { infoBulleState } from '../../../global/Providers/infoBulle'

export const useGlobalForm = (refObj) => {

    const { data: dataFetched, mutate} = useSWR([refObj.path, 'GET'], ([url, method]) => fetcher(url, method), {revalidateOnFocus : false})

    const session = useRecoilValue(sessionState)
    const [reference, setReference] = useRecoilState(refObj.state)
    const [confirmation, setConfirmation] = useState(false)
    const [, setInfoBulle] = useRecoilState(infoBulleState)

    const {register, formState : {errors} , trigger, handleSubmit, setValue, getValues } = useForm(
        {defaultValues : Object.fromEntries(refObj.fields.map(field => [field.name, field.defaultValue]))}
    )

    const reducer = (state, action) => {
        switch (action.type) {
            case 'create':
                for (let field of refObj.fields){
                    setValue(field.name, field.defaultValue)
                }
                return {mode:'create', title:'Création', selected:null};
            case 'from': return {mode:'create', title:'Création', selected:null};
            case 'edit':
                confirmation && setConfirmation(false)
                if (state.selected !== action.payload || state.mode==='delete') {
                    const obj = reference.find(ref => ref._id === action.payload)
                    for (let field of refObj.fields){
                        setValue(field.name, obj[field.name])
                    }
                    return {mode:'edit', title:'Edition', selected : action.payload};
                }else{
                    for (let field of refObj.fields){
                        setValue(field.name, field.defaultValue)
                    }
                    return {mode:'create', title:'Création', selected:null};
                }
            case 'delete':
                return {mode:'delete', title:'Suppression', selected:action.payload};


            default: break;
        }
    }

    const [state, dispatch] = useReducer(reducer, {mode:'create', title:'Création', selected:null})

    const onSubmit = (data) => {
        if(state.mode==='edit') {
            (async()=>{
                const res = await fetcher(refObj.path, 'PUT', {...data, id : state.selected}, session.token)
                console.log(res)
                if (res.status === 200) {
                    setInfoBulle({open : true, msg : `Modification effectuée !`})
                    dispatch({type : 'create'})
                    mutate()
                }else setInfoBulle({open : true, msg : `Erreur !`, warning : true})
            })()
        }

        if(state.mode==='create') {
            (async()=>{
                const res = await fetcher(refObj.path, 'POST', data, session.token)
                if (res.status === 201) {
                    setInfoBulle({open : true, msg : `Création effectuée !`})
                    dispatch({type : 'create'})
                    mutate()
                }else setInfoBulle({open : true, msg : `Erreur !`, warning : true})
            })()
        }
    }

    const onDelete = async (payload) =>{
        const res = await fetcher(`${refObj.path}/${payload}`, 'DELETE', null, session.token)
        if (res.status === 200) {
            setInfoBulle({open : true, msg : `Suppression effectuée !`})
            dispatch({type : 'create'})
            mutate()
        }else setInfoBulle({open : true, msg : `Erreur !`, warning : true})
    }

    // Rules Provider Link
    useEffect(() => { setReference(dataFetched?.data) },[dataFetched])




    return {reference, dispatch, state, handleSubmit, onSubmit, register, errors, getValues, setValue, confirmation, setConfirmation, onDelete}
}

