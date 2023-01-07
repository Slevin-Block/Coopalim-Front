import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useRecoilState } from 'recoil';
import { sessionState } from '../../Providers/session';
import { login } from '../../functions/connection';

export const useCustomFrom = (params) => {
    const navigate = useNavigate();
    const [, setRender] = useState()
    const {register, handleSubmit, formState : {errors}} = useForm(params)
    const [, setSession] = useRecoilState(sessionState)

    const onSubmit = async (payload) => {
        const data = await login(payload)
        if (data){
            setSession(data)
            navigate('/')
        }else{
            console.log("identifiaction error")
        }
    }
    const handleChange = (e) => {
        if (errors[e.target.name]?.message !== undefined){
            delete errors[e.target.name]?.message
            setRender("")
        }
    }
    return {register, errors, handleSubmit, onSubmit, handleChange}
}