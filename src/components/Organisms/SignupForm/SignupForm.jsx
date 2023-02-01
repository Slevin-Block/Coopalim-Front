import React from 'react'


import { useCustomForm } from './useSignupForm';
import { addToSet } from '../../../global/functions/addToSet';

import { useRecoilValue } from 'recoil';
import { rulesState } from '../../../global/Providers/rules';

import Input from '../../Atoms/Input/Input';
import PasswordInput from '../../Atoms/PasswordInput/PasswordInput';
import Button from '../../Atoms/Button/Button';
import Title from '../../Atoms/Title/Title';
import Select from '../../Atoms/Select/Select';
import SelectionGroup from '../../Molecules/SelectionGroup/SelectionGroup';
import SwitchGroup from '../../Molecules/SwitchGroup/SwitchGroup';
import { Footer, Form, Section, SubSection } from './SignupForm.styled';
import { useMediaQuery } from '../../../global/useMediaQuery';
import Text from '../../Atoms/Text/Text';

const SignupForm = ({defaultValues, editMode}) => {

    const rules = useRecoilValue(rulesState)
    const {isDesktop, isTablet, isMobile} = useMediaQuery()


    /* if (isMobile) args = {...args, mode: "all" } */

    const { step, setStep, stepErrors, 
            register, errors, setValue, getValues, handleSubmit, trigger, onSubmit } = useCustomForm({defaultValues, editMode, isMobile })

    return (
        <>
            <Form onSubmit={(e) => handleSubmit(onSubmit)(e)}>

                <Section isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile}>
                    { (isDesktop || isTablet ||  step.page  ===0) &&
                        <SubSection>
                            <Title level={2}>Identification</Title>
                            
                            <Input          label='Login :'
                                            field='login'
                                            icon='user'
                                            register={register}
                                            tooltipLabel="Nom d'utilisateur"
                                            trigger={trigger}
                                            error = {errors?.login?.message}
                            />

                            <PasswordInput  label='Mot de passe :'
                                            field="password"
                                            register={register}
                                            error={errors?.password?.message}
                            />
                            

                            <PasswordInput  label='Confirmation du mot de passe :'
                                            field="passwordConfirmation"
                                            register={register}
                                            error={errors?.passwordConfirmation?.message}
                            />
                            {editMode && <Text type='information'>Ne rien renseigner dans les champs 'Mot de passe' si vous ne voulez pas le modifier</Text>}
                        </SubSection>
                    }

                    { (isDesktop || isTablet || step.page ===1) &&
                        <SubSection>
                            <Title level={2} >Renseignements</Title>

                            <Input          label='Prénom :' 
                                            field="firstname"
                                            icon="firstname"
                                            tooltipLabel="Prénom"
                                            register={register} 
                                            error={errors?.firstname?.message}
                            />

                            <Input          label='Nom de famille :'
                                            field="lastname"
                                            icon="lastname"
                                            tooltipLabel="Nom d'utilisateur"
                                            register={register}
                                            error={errors?.lastname?.message}
                            />

                            <Input          label='Email :'
                                            field="email"
                                            icon="mail"
                                            tooltipLabel="Votre adresse mail"
                                            register={register}
                                            error={errors?.email?.message}
                            />

                            <Input          label='Téléphone :'
                                            field="phone"
                                            icon="phone"
                                            tooltipLabel="Votre numéro de téléphone"
                                            register={register}
                                            error={errors?.phone?.message}
                            />
                        </SubSection>
                    }

                    { (isDesktop || isTablet || step.page ===2) &&
                        <SubSection>
                            <Title level={2} >Attributions et Rôle</Title>

                            <Select                 label="Rôle :"
                                                    placeholder={`Choisir un rôle`}
                                                    defaultValue = {getValues("rule")}
                                                    data={rules}
                                                    setValue={(value) => setValue("rule", value)}
                            />
                            
                            <SelectionGroup    label="Attributions : "
                                                    setValues={(values) => setValue("attributions", values)}
                                                    defaultValue = {getValues("attributions")}
                            />
                            
                            <SwitchGroup       label="Expérience : "
                                                    setValue={(value) => setValue("isAutonomous", value)}
                                                    defaultValue = {getValues("isAutonomous")}
                                                    group={["Novice", "Autonome"]}
                            />
                        </SubSection>
                    }
                </Section>

                <Footer>
                    {(isMobile && step.page > 0)   && (
                        <Button   type="button" 
                            onClick={() => setStep({page : step.page-1, visited : addToSet(step.visited, step.page)})}
                            error={stepErrors[0] || (step.page > 1 ? stepErrors[1] : false)}
                        >
                            Precédent
                        </Button>)
                    }
                    
                    {(isMobile && step.page < 2)   && (
                        <Button   type="button"
                            onClick={() => {
                                trigger()
                                setStep({...step, page : step.page +1, visited : addToSet(step.visited, step.page)})
                            }}
                            error={step.page === 0 ? stepErrors[1] : false}
                        >
                            Suivant
                        </Button>
                    )}
                    
                    {(isDesktop || isTablet || step.page === 2) && (
                        <Button   type="submit"
                            disabled={(stepErrors[0] || stepErrors[1]) && !isDesktop && !isTablet}
                        >
                            {`${editMode ? 'Modifier':'Créer'}`}
                        </Button>
                    )}

                </Footer>
            </Form>
        
        </>
    )
}

export default SignupForm