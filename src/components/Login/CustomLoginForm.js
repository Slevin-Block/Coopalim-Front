import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useRecoilState } from 'recoil';
import { sessionState } from '../../global/Providers/session';
import { login } from '../../global/functions/connection';

export const useCustomForm = (params) => {
    const navigate = useNavigate();
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
    return {register, errors, handleSubmit, onSubmit}
}