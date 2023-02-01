import { useLocation } from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import { rulesState } from '../../../global/Providers/rules';
import { attributionsState } from '../../../global/Providers/attributions';

export const useSignup = () => {
    const rules = useRecoilValue(rulesState)
    const attributions = useRecoilValue(attributionsState)
    const { state } = useLocation()
    const editMode = state ? true : false

    let defaultValues

    if (rules && attributions) {
        if (state){
            // In Edit Mode
            defaultValues = {
                                ...state,
                                rule:           rules?.find(rule => rule._id === state.rule),
                                attributions :  attributions.map(att => {return {...att, check : state.attributions.includes(att._id) ? true : false}}),
                            }
        }else{
            // In Create Mode
            defaultValues = {
                                attributions :  attributions.map(att => {return {...att, check : false}}),
                                isAutonomous :  false,
                            }
        }
    }else{
        // If Error
        defaultValues = null
    }

    return {defaultValues, editMode}
}