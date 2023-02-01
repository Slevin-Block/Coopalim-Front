import React from 'react'
import Title from '../../Atoms/Title/Title'
import SignupForm from '../../Organisms/SignupForm/SignupForm'
import { Section } from './Signup.styled'
import { useSignup } from './useSignup'

const Signup = () => {
    const { defaultValues, editMode } = useSignup()
    
    if (defaultValues === null) return (<>Error</>)
    return (
        <>
            <Title >{`${editMode ? 'Edition' : 'Création'} d'un compte`}</Title>
            <Section>
                <SignupForm defaultValues={defaultValues} editMode={editMode} />
            </Section>
        </>
    )
}

export default Signup