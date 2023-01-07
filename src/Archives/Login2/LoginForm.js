import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import useSWR from 'swr'
import { loginFetcher } from '../connection v2 beta'

export const useLoginForm = (params) => {
    const [payload, setPayload] = useState(null)
    const [, setRender] = useState()
    const {register, handleSubmit, formState : {errors, isSubmitSuccessful}} = useForm(params)
    const { data, mutate, error } = useSWR("login_user", (payload) => loginFetcher(payload));

    const onSubmit = async (fields) => {
    console.log(fields)
        if (fields){
            setPayload(fields)
            console.log(fields)
        }else{
            console.log("identifiaction error") 
        }
    }
    useEffect(() => {
    console.log("Trying stopping refetching")
        mutate()
    },[])

    const handleChange = (e) => {
        if (errors[e.target.name]?.message !== undefined){
            delete errors[e.target.name]?.message
            setRender("")
        }
    }
    return {data, isSubmitSuccessful, register, errors, isSubmitSuccessful, handleSubmit, onSubmit, handleChange}
}