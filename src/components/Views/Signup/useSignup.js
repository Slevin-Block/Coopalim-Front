import { useLocation } from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import { rulesState } from '../../../global/Providers/rules';
import { attributionsState } from '../../../global/Providers/attributions';

export const useSignup = () => {
    const rules = useRecoilValue(rulesState)
    const attributions = useRecoilValue(attributionsState)
    const { state } = useLocation()
    const editMode = state ? true : false

    console.log(state)
    let defaultValues

    /* state = {
                        login : 'Liffe',
                        firstname : 'Thibault',
                        lastname : 'Duquerroy',
                        password : 'aze123AZE$',
                        passwordConfirmation : 'aze123AZE$',
                        email : 'aze@ert.gt',
                        phone : '0987654321',
                        rule : '63b834882123cdd3cb30c6d5',
                        attributions : ['63b83938c7785b27d9b116f2'],
                        isAutonomous : true,
                    } */
    
    if (rules && attributions) {
        if (state){
            defaultValues = {
                                ...state,
                                rule:           rules?.find(rule => rule._id === state.rule),
                                attributions :  attributions.map(att => {return {...att, check : state.attributions.includes(att._id) ? true : false}}),
                            }
        }else{
            defaultValues = {
                                attributions :  attributions.map(att => {return {...att, check : false}}),
                                isAutonomous :  false,
                            }
        }
    }else{
        defaultValues = null
    }

   
    
    console.log(defaultValues)
    return {defaultValues, editMode}
}