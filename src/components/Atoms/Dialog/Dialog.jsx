import React from 'react'
import { Dialog as MantineDialog} from '@mantine/core';
import { Group, GroupModal } from './Dialog.styled';
import { Overlay } from '@mantine/core';
import Text from '../Text/Text';
import Button from '../Button/Button';

import { useConfirmDialog } from './useConfirmDialog';
import { getInCss } from '../../../global/functions/getInCss';
import Icon from '../Icon/Icon';

const Dialog = ({isOpen, needConfirmation, data}) => {

    const {mask, savedAction, setConfirmed, onClose, onAction, ref} = useConfirmDialog(needConfirmation, data)

    return (
        <>
            {mask && <Overlay opacity={0.8} color={getInCss('--background')} zIndex={5} />}

            <MantineDialog opened={isOpen} withCloseButton onClose={() => onClose()} ref={ref}
                    radius="md" position={{ bottom: 5, right: 5 }} transition="slide-up" transitionDuration={500} transitionTimingFunction="ease">
                
                {!savedAction ?
                    <>
                        <Text >{data.label}</Text>

                        <Group>
                            <Button onClick={() => onClose()} >Annuler</Button>
                            {data.actions.map((action, i) => <Button key={i}
                                                                        color ={action.color}
                                                                        onClick={() => {
                                                                            onAction(action)
                                                                        }}
                                                            >{action.label}</Button>
                            )}
                        </Group>
                    </>
                :
                    <>
                        <GroupModal>
                            <Icon field="warning" color={getInCss('--redCoopalim')} size={40}/>
                            <Text type='important'>{`Confirmation : ${savedAction.label}`}</Text>
                        </GroupModal>

                        <Group>
                            <Button color={getInCss("--redCoopalim")}
                                         onClick={() => {
                                            setConfirmed(true)
                                         }}
                            >{savedAction.label}</Button>
                            <Button onClick={() => onClose()} >Annuler</Button>
                        </Group>
                    </>
                }
            </MantineDialog>
        </>
    )
}

export default Dialog