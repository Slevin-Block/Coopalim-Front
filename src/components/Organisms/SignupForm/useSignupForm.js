import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { editUser, signup } from '../../../global/API/users';

import { useRecoilValue } from "recoil"
import { infoBulleState } from '../../../global/Providers/infoBulle';
import { sessionState } from '../../../global/Providers/session';
import { useRecoilState } from "recoil";



export const useCustomForm = ({args, editMode}) => {

        const session = useRecoilValue(sessionState)
        const [, setInfoBulle] = useRecoilState(infoBulleState)
        const navigate = useNavigate()
        
        const [step, setStep] = useState({page : 0, visited : new Set()})
        
        const {register, formState : {errors} , trigger, handleSubmit, setValue, getValues } = useForm(args)
        
        const fields = [["login", "password", "passwordConfirmation"], ["firstname", "lastname", "email", "phone"]]


        const stepErrors = [fields[0].reduce((a,b) => a || !!errors[b], false),
                            fields[1].reduce((a,b) => a || !!errors[b], false)]

        if (!step.visited.has(step.page)){
            const fieldsToKeep = Array.from(step.visited.values()).flatMap((index => fields[index]))
            for (let key in errors){
                !fieldsToKeep.includes(key) && delete errors[key]
            }
        }

        const onSubmit = async (data) => {
            const user = {...data}
            user.rule = data.rule._id
            delete user.passwordConfirmation
            user.attributions = data.attributions.flatMap(att => att.check ? att._id : [])

            // EDIT MODE
            if (editMode) {
                const id = user.id
                console.log(user)
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