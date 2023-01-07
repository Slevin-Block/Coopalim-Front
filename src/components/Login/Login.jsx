import React from 'react'
import { useCustomFrom } from './CustomLoginForm';
import Field from '../../components/Field';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema as schema } from '../../assets/pattern/formPattern';



const Login = () => {

    const {register, errors, handleSubmit, onSubmit, handleChange} = useCustomFrom({
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