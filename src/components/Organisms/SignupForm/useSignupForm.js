import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { editUser, signup } from '../../../global/API/users';
import useSWR from 'swr'

import { useRecoilValue } from "recoil"
import { infoBulleState } from '../../../global/Providers/infoBulle';
import { sessionState } from '../../../global/Providers/session';
import { useRecoilState } from "recoil";
import fetcher from '../../../global/functions/fetcher';
import { yupResolver } from '@hookform/resolvers/yup';
import { getSignupSchema} from '../../../assets/pattern/formPattern';


export const useCustomForm = ({defaultValues, editMode, isMobile}) => {

        const session = useRecoilValue(sessionState)
        const [, setInfoBulle] = useRecoilState(infoBulleState)
        const navigate = useNavigate()
        const [step, setStep] = useState({page : 0, visited : new Set()})
        
        const {data} = useSWR(  ['/users', 'GET', null, session?.token],
                                        ([url, method, payload, token])=> fetcher(url, method, payload, token))

        // Array containing user logins without the current one (if edit mode)
        const userArray = data ? data.data.flatMap(user => editMode  ? (user.login === defaultValues.login ? [] : user.login)
                                                                     :  user.login)
                               : []
        

        // Form Hook
        const args = { defaultValues : {...defaultValues}, resolver: yupResolver(getSignupSchema(userArray)), mode: "all"}
        const {register, formState : {errors} , trigger, handleSubmit, setValue, getValues } = useForm(args)
        

        // Errors management
        const fields = [["login", "password", "passwordConfirmation"], ["firstname", "lastname", "email", "phone"]]

        const stepErrors = [fields[0].reduce((a,b) => a || !!errors[b], false),
                            fields[1].reduce((a,b) => a || !!errors[b], false)]

        // To keep only field already see in mobile view
        if (isMobile && !step.visited.has(step.page)){
            const fieldsToKeep = Array.from(step.visited.values()).flatMap((index => fields[index]))
            for (let key in errors){
                !fieldsToKeep.includes(key) && delete errors[key]
            }
        }

        if (editMode && !getValues('password')) delete errors.password



        // Submitting
        const onSubmit = async (data) => {
            const user = {...data}
            user.rule = data.rule._id
            delete user.passwordConfirmation
            user.attributions = data.attributions.flatMap(att => att.check ? att._id : [])

            // EDIT MODE
            if (editMode) {
                const id = user.id
                const res = await editUser(id, user, session.token)
                if (!res) console.log("Erreur")
                else{
                    setInfoBulle({open : true, msg : `${user?.firstname} a bien été modifié !`})
                    navigate(-1)
                }
            }else{
                const res = await signup(user, session.token)
                if (!res) console.log("Erreur")
                else{
                    setInfoBulle({open : true, msg : `${user?.firstname} a bien été ajouté !`})
                    navigate(-1)
                }
            }
        }

    return {step, setStep, stepErrors,
            register, errors, setValue, getValues, handleSubmit, trigger, onSubmit}
}