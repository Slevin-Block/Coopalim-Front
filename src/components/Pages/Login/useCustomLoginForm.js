import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useRecoilState } from 'recoil';
import { sessionState } from '../../../global/Providers/session';
import { login } from '../../../global/API/connection';
import { infoBulleState } from "../../../global/Providers/infoBulle";

export const useCustomLoginForm = (params) => {
    const navigate = useNavigate();
    const {register, handleSubmit, formState : {errors}} = useForm(params)
    const [, setSession] = useRecoilState(sessionState)
    const [, setInfoBulle] = useRecoilState(infoBulleState)

    const onSubmit = async (payload) => {
        const data = await login(payload)
        if (data){
            setSession(data)
            setInfoBulle({open : true, msg : `Identification réussie !`})
            navigate('/')
        }else{
            setInfoBulle({open : true, msg : `Identification erronée !`, warning : true})
        }
    }
    return {register, errors, handleSubmit, onSubmit}
}