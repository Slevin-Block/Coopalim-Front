import React from 'react'
import styles from './Login.module.css'

import { useCustomForm } from './CustomLoginForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema as schema } from '../../../assets/pattern/formPattern';

import Input from '../../Atoms/Input/Input';
import PasswordInput from '../../Atoms/PasswordInput/PasswordInput';
import Button from '../../Atoms/Button/Button';
import Title from '../../Atoms/Title/Title';



const Login = () => {

    const { register,  handleSubmit, onSubmit, errors, handleChange } = useCustomForm({
        defaultValues: { login: 'Fanny', password: 'azeAZE123$' },
        resolver: yupResolver(schema)
    })
    console.log(errors?.login?.message)
    console.log(errors?.password?.message)
    return (
        <>
            <Title >Identification</Title>
            <section className={styles.section}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <Input label='Login :' register={register} handleChange={handleChange} field="login" icon="user" error={errors?.login?.message} tooltipLabel="Nom d'utilisateur"/>

                    <PasswordInput label='Mot de passe :' register={register} field="password" error={errors?.password?.message}/>

                    <Button type="submit" name='send' >Envoyer</Button>
                </form>
            </section>
        </>
    )
}

export default Login