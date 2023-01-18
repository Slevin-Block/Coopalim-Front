import { useEffect, useState } from 'react'
import { useClickOutside } from '@mantine/hooks';
import { useRecoilState } from 'recoil';
import { infoBulleState } from '../../../global/Providers/infoBulle';


export const useConfirmDialog = (needConfirmation, data) => {

    const [mask, setMask] = useState(true)
    const [savedAction, setSaveAction] = useState(null)
    const [confirmed, setConfirmed] = useState(false)
    const [, setInfoBulle] = useRecoilState(infoBulleState)
                    
    // Close Dialog
    const onClose = () => {
        setMask(false)
        data.close.action()
    }

    // Action without confirmation and confirm progress otherwise
    const onAction = (action) => {
        if (!!needConfirmation && !confirmed){
            setSaveAction(action)
        }else {
            action.action()
            onClose()
        }
    }

    // Action with confirmation
    useEffect(() => {
        if (confirmed){
            setInfoBulle({open : true, msg : `Suppression réussie !`})
            savedAction.action()
            onClose()
        }
    }, [confirmed])


    const ref = useClickOutside(onClose);

    return {mask, savedAction, setConfirmed, onClose, onAction, ref}
}