import React from 'react'

import { useCustomLoginForm } from './useCustomLoginForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema as schema } from '../../../assets/pattern/formPattern';

import Input from '../../Atoms/Input/Input';
import PasswordInput from '../../Atoms/PasswordInput/PasswordInput';
import Button from '../../Atoms/Button/Button';
import Title from '../../Atoms/Title/Title';
import { Form, Section } from './Login.styled';



const Login = () => {

    const { register,  handleSubmit, onSubmit, errors } = useCustomLoginForm({
        defaultValues: { login: '', password: '' },
        resolver: yupResolver(schema)
    })
    
    return (
        <>
            <Title >Identification</Title>
            <Section>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input label='Login :' register={register} field="login" icon="user" error={errors?.login?.message} tooltipLabel="Nom d'utilisateur"/>

                    <PasswordInput label='Mot de passe :' register={register} field="password" error={errors?.password?.message}/>

                    <Button type="submit" name='send' >Envoyer</Button>
                </Form>
            </Section>
        </>
    )
}

export default Login