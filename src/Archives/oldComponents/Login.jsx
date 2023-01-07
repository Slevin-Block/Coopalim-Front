import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema as schema } from '../assets/pattern/pattern';
import Field from './Field';
import { login } from '../../functions/connection';
import { useQueryClient } from '@tanstack/react-query'
import { useRecoilState } from 'recoil';
import { userState } from '../atoms/user';

const useCustomFrom = (params) => {
    const navigate = useNavigate();
    const [, setRender] = useState()
    const {register, handleSubmit, formState : {errors}} = useForm(params)
    const [user, setUser] = useRecoilState(userState)
    //const queryClient = useQueryClient()

    const onSubmit = async (data) => {
        const res = await login(data)
        if (res){
            setUser(res)
            console.log("USER : ", user)
            //queryClient.setQueryData(['user'], user => user)
            navigate('/')
        }else (console.log("identifiaction error"))
    }
    const handleChange = (e) => {
        if (errors[e.target.name]?.message !== undefined){
            delete errors[e.target.name]?.message
            setRender("")
        }
    }
    return {register, errors, handleSubmit, onSubmit, handleChange}
}


const Login = () => {

    const {register, errors,handleSubmit, onSubmit, handleChange} = useCustomFrom({
        defaultValues : { login : 'Alex', password : '1234abCD&$' },
        resolver      : yupResolver(schema)
    })

    
    const fieldsGroup = [
        { field: "login", label: "Login", type: "text"},
        { field: "password", label: "Mot de passe", type: "password"},
    ]

    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {fieldsGroup.map((fields,k) => 
                <Field
                        key={k}
                        fields={fields}
                        register={register}
                        errors={errors}
                        handleChange={handleChange}
                />
            )}
            <input type="submit" value="envoyer"/>
        </form>
    )
}

export default Login