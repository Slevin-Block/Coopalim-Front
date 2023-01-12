import React from 'react'
import styles from './Login.module.css'

import { useCustomForm } from './CustomLoginForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema as schema } from '../../assets/pattern/formPattern';

import InputField from '../Atoms/InputField/InputField';
import PasswordInputField from '../Atoms/PasswordInputField/PasswordInputField';
import ButtonField from '../Atoms/ButtonField/ButtonField';
import TitleField from '../Atoms/TitleField/TitleField';



const Login = () => {

    const { register,  handleSubmit, onSubmit, errors, handleChange } = useCustomForm({
        defaultValues: { login: 'Alex', password: '1234abCD&$' },
        resolver: yupResolver(schema)
    })
    
    return (
        <>
            <TitleField label="Identification" />
            <section className={styles.section}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <InputField label='Login :' register={register} handleChange={handleChange} field="login" error={errors.login} tooltipLabel="Nom d'utilisateur"/>
                    {errors?.login?.message && <p className={styles.error}>{errors?.login?.message}</p>}

                    <PasswordInputField label='Mot de passe :' register={register} field="password" error={errors.password}/>
                    {errors?.password?.message && <p className={styles.error}>{errors?.password?.message}</p>}

                    <ButtonField type="submit" label="Envoyer" className={styles.button}/>
                </form>
            </section>
        </>
    )
}

export default Login