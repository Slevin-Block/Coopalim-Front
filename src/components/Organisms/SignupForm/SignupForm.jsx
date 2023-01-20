import React from 'react'
import styles from './SignupForm.module.css'

import { yupResolver } from '@hookform/resolvers/yup';
import { SignupSchema as schema} from '../../../assets/pattern/formPattern';
import { useCustomForm } from './useSignupForm';
import { addToSet } from '../../../global/functions/addToSet';

import { useRecoilValue } from 'recoil';
import { rulesState } from '../../../global/Providers/rules';

import Input from '../../Atoms/Input/Input';
import PasswordInput from '../../Atoms/PasswordInput/PasswordInput';
import Button from '../../Atoms/Button/Button';
import Title from '../../Atoms/Title/Title';
import Select from '../../Atoms/Select/Select';
import SelectionGroupField from '../../Molecules/SelectionGroupField/SelectionGroupField';
import SwitchGroupField from '../../Molecules/SwitchGroupField/SwitchGroupField';


const SignupForm = ({defaultValues, editMode}) => {
    const rules = useRecoilValue(rulesState)
    const args = { defaultValues : {...defaultValues}, resolver: yupResolver(schema) }
    const { step, setStep, stepErrors,
            register, errors, setValue, getValues, handleSubmit, trigger, onSubmit } = useCustomForm({ args, editMode })


    return (
        <>
            <form onSubmit={(e) => handleSubmit(onSubmit)(e)} className={styles.form}>

                <section className={styles.section}>
                    { step.page  ===0 &&
                        <>
                            <Title level={2}>Identification</Title>
                            
                            <Input         label='Login :'
                                                field="login"
                                                icon="user"
                                                register={register}
                                                tooltipLabel="Nom d'utilisateur"
                                                error = {errors?.login?.message}
                            />

                            <PasswordInput label='Mot de passe :'
                                                field="password"
                                                register={register}
                                                error={errors?.password?.message}
                            />
                            

                            <PasswordInput label='Confirmation du mot de passe :'
                                                field="passwordConfirmation"
                                                register={register}
                                                error={errors?.passwordConfirmation?.message}
                            />
                            
                        </>
                    }

                    { step.page ===1 &&
                        <>
                            <Title level={2} >Renseignements</Title>

                            <Input         label='Prénom :' 
                                                field="firstname"
                                                icon="firstname"
                                                tooltipLabel="Prénom"
                                                register={register} 
                                                error={errors?.firstname?.message}
                            />

                            <Input         label='Nom de famille :'
                                                field="lastname"
                                                icon="lastname"
                                                tooltipLabel="Nom d'utilisateur"
                                                register={register}
                                                error={errors?.lastname?.message}
                            />

                            <Input         label='Email :'
                                                field="email"
                                                icon="mail"
                                                tooltipLabel="Votre adresse mail"
                                                register={register}
                                                error={errors?.email?.message}
                            />

                            <Input         label='Téléphone :'
                                                field="phone"
                                                icon="phone"
                                                tooltipLabel="Votre numéro de téléphone"
                                                register={register}
                                                error={errors?.phone?.message}
                            />
                        </>
                    }

                    { step.page ===2 &&
                        <>
                            <Title level={2} >Attributions et Rôle</Title>

                            <Select                 label="Rôle :"
                                                    placeholder={`Choisir un rôle`}
                                                    defaultValue = {getValues("rule")}
                                                    data={rules}
                                                    getValue={(value) => setValue("rule", value)}
                            />
                            
                            <SelectionGroupField    label="Attributions : "
                                                    getValues={(values) => setValue("attributions", values)}
                                                    defaultValue = {getValues("attributions")}
                            />
                            
                            <SwitchGroupField       label="Expérience : "
                                                    getValue={(value) => setValue("isAutonomous", value)}
                                                    defaultValue = {getValues("isAutonomous")}
                                                    group={["Novice", "Autonome"]}
                            />
                        </>
                    }
                </section>

                <footer className={styles.footer}>
                    {step.page > 0   && (<Button   type="button" className={styles.button}
                                                        onClick={() => setStep({page : step.page-1, visited : addToSet(step.visited, step.page)})}
                                                        error={stepErrors[0] || (step.page > 1 ? stepErrors[1] : false)}
                                        >Precédent</Button>)
                    }
                    
                    {step.page < 2   && (<Button   type="button" className={styles.button}
                                                        onClick={() => {
                                                            trigger()
                                                            setStep({...step, page : step.page +1, visited : addToSet(step.visited, step.page)})
                                                        }}
                                                        error={step.page === 0 ? stepErrors[1] : false}
                                        >Suivant</Button>)
                    }
                    
                    {step.page === 2 && (<Button   type="submit"
                                                        className={styles.button}
                                                        disabled={stepErrors[0] || stepErrors[1]}
                                        >{`${editMode ? 'Modifier':'Créer'}`}</Button>)
                    }

                </footer>
            </form>
        
        </>
    )
}

export default SignupForm