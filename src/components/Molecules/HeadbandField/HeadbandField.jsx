import React, { useState } from 'react'
import { getInCss } from '../../../global/functions/getInCss'
import Icon from '../../Atoms/Icon/Icon'
import SelectionGroupField from '../SelectionGroupField/SelectionGroupField'
import SwitchGroupField from '../SwitchGroupField/SwitchGroupField'
import styles from './HeadbandField.module.css'
import Dialog from '../../Atoms/Dialog/Dialog'
import { useRecoilValue } from 'recoil'
import { rulesState as rState} from '../../../global/Providers/rules'
import { attributionsState as attState} from '../../../global/Providers/attributions'

const HeadbandField = ({user : {id, login, firstname, lastname, rule, attributions, isAutonomous}, action}) => {

    const [dialog, setDialog] = useState({isOpen : false, data: null});
    const rulesState = useRecoilValue(rState)
    const attributionsState = useRecoilValue(attState)

    return (
        <>
            <div  className={styles.wrapper}>
                    <div className={styles.pseudo}>{login}</div>
                    <div className={styles.name}>{`${firstname} ${lastname}`}</div>
                    <div className={styles.rule}>{rulesState.find(r => r._id === rule).label}</div>
                    <div className={styles.attributions}>
                        <SelectionGroupField
                            defaultValue = {attributionsState.map(att => {return {...att, check : attributions.includes(att._id) ? true : false}})}
                            desactived={true}
                            small = {true}
                        />
                    </div>
                    <div className={styles.isAutonomous}>
                        <SwitchGroupField
                            desactived={true}
                            minify = {true}
                            defaultValue = {isAutonomous}
                            group={["Novice", "Autonome"]}
                        />
                    </div>


                    <div className={`${styles.edit} ${styles.button}`}
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
                    </div>

                    <div className={`${styles.delete} ${styles.button}`}
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
                    </div>
            </div>

            {dialog.isOpen &&   <Dialog
                                    isOpen={dialog.isOpen}
                                    needConfirmation={dialog.needConfirmation}
                                    data={dialog.data}
                                />}
        </>
    )
}

export default HeadbandField