import React from 'react'
import Title from '../../Atoms/Title/Title'
import SignupForm from '../../Organisms/SignupForm/SignupForm'
import styles from './Signup.module.css'
import { useSignup } from './useSignup'

const Signup = () => {
    const { defaultValues, editMode } = useSignup()
    
    if (defaultValues === null) return (<>Error</>)
    return (
        <>
            <Title >{`${editMode ? 'Edition' : 'Création'} d'un compte`}</Title>
            <section className={styles.section}>
                <SignupForm defaultValues={defaultValues} editMode={editMode} />
            </section>
        </>
    )
}

export default Signup