import React, { useState } from 'react'
import { getInCss } from '../../../global/functions/getInCss'
import Icon from '../../Atoms/Icon/Icon'
import SelectionGroup from '../SelectionGroup/SelectionGroup'
import SwitchGroup from '../SwitchGroup/SwitchGroup'
import Dialog from '../../Atoms/Dialog/Dialog'
import { useRecoilValue } from 'recoil'
import { rulesState as rState} from '../../../global/Providers/rules'
import { attributionsState as attState} from '../../../global/Providers/attributions'
import { Attributions, Delete, Edit, IsAutonomous, Name, Pseudo, Rule, Wrapper } from './Card.styled'

const Card = ({user : {id, login, firstname, lastname, rule, attributions, isAutonomous}, action}) => {

    const [dialog, setDialog] = useState({isOpen : false, data: null});
    const rulesState = useRecoilValue(rState)
    const attributionsState = useRecoilValue(attState)

    return (
        <>
            <Wrapper>
                <Pseudo>{login}</Pseudo>
                <Name>{`${firstname} ${lastname}`}</Name>
                <Rule>{rulesState.find(r => r._id === rule).label}</Rule>
                <Attributions>
                    <SelectionGroup
                        defaultValue = {attributionsState.map(att => {return {...att, check : attributions.includes(att._id) ? true : false}})}
                        disabled={true}
                        small = {true}
                    />
                </Attributions>
                <IsAutonomous>
                    <SwitchGroup
                        disabled={true}
                        minify = {true}
                        defaultValue = {isAutonomous}
                        group={["Novice", "Autonome"]}
                    />
                </IsAutonomous>

                <Edit
                        onClick={() => setDialog({
                            isOpen : true,
                            data: {
                                label : `Voulez vous éditer ${login}`,
                                close : {
                                    label : "Annuler",
                                    action : () => setDialog({isOpen : false, data: null})
                                },
                                actions : [{label : "Editer", action : () => action('edit', id)}]
                            }
                        })
                }>
                    <Icon field='edit' color={getInCss('--blueCoopalim')}/>
                </Edit>

                <Delete
                        onClick={() => setDialog({
                            isOpen : true,
                            needConfirmation : true,
                            data: {
                                label : `Voulez vous supprimer ${login}`,
                                close : {
                                    label : "Annuler",
                                    action : () => setDialog({isOpen : false, data: null})
                                },
                                actions : [{label : "Supprimer", action : () => action('delete', id), color : `${getInCss('--redCoopalim')}`}]
                            }
                        })
                }>
                    <Icon field='delete' color={getInCss('--redCoopalim')}/>
                </Delete>
            </Wrapper>

            {dialog.isOpen &&
                <Dialog
                    isOpen={dialog.isOpen}
                    needConfirmation={dialog.needConfirmation}
                    data={dialog.data}
                />
            }
        </>
    )
}

export default Card