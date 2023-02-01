import React from 'react'
import Button from '../../Atoms/Button/Button'
import Counter from '../../Atoms/Counter/Counter'
import DatePicker from '../../Atoms/DatePicker/DatePicker'
import Input from '../../Atoms/Input/Input'
import TimeSelect from '../../Atoms/TimeSelect/TimeSelect'
import SelectionGroup from '../../Molecules/SelectionGroup/SelectionGroup'
import SwitchGroup from '../../Molecules/SwitchGroup/SwitchGroup'
import { MyForm, MyModal } from './TaskForm.styled'
import { useTaskForm } from './useTaskForm'
import MultiSelectParticipators from '../../Molecules/MultiSelectParticipators/MultiSelectParticipators'
import { getInCss } from '../../../global/functions/getInCss'
import { useRecoilValue } from 'recoil'
import { sessionState } from '../../../global/Providers/session'
import { useMediaQuery } from '../../../global/useMediaQuery';

export const TaskForm = ({ opened, onClose, onDelete, data, mode, isAdmin }) => {

    const session = useRecoilValue(sessionState)
    if (!isAdmin) mode = 'participate'
    const { register, handleSubmit, onSubmit, errors, setValue, getValues, confirmation, setConfirmation} = useTaskForm(data, mode, onClose)
    const {isDesktop, isTablet, isMobile} = useMediaQuery()
    
    let title
    switch (mode){
        case 'edit'         : title = 'Edition de tâche';       break;
        case 'create'       : title = 'Création d\'une tâche';  break;
        case 'participate'  : title = 'Participer à la tâche';  break;
        default : title = 'ERREUR'
    }

    return (
        <MyModal    title={title}
                    opened={opened}
                    onClose={onClose}
                    centered overflow="inside"
        >

            <MyForm onSubmit={(e) => handleSubmit(onSubmit)(e)}
                    isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile}
            >
                <p>{isDesktop} {isTablet} {isMobile}</p>
                <Input label='Nom de la tâche :' field="label" icon="task" tooltipLabel="3 caractères minimum" className='label'
                    register={register} error={errors?.label?.message} smallError={true} disabled={mode==='participate'}/>

                <Input label='Description :' field="description" icon="detail" tooltipLabel="Description de la tâche" className='description'
                    register={register} error={errors?.description?.message} disabled={mode==='participate'}/>

                <MultiSelectParticipators
                    label='Participants :'
                    className='participators'
                    defaultValue={getValues('participators')}
                    setValue={(value) => setValue("participators", value)}
                    disabled={mode==='participate'} />

                <DatePicker
                    label='Jour de la tâche :'
                    icon="day"
                    /* tooltipLabel="Jour de la tâche" */
                    fixedDay={null}
                    setValue={(value) => setValue("day", value)}
                    defaultValue={getValues("day")}
                    className='day'
                    disabled={mode==='participate'}
                    />

                <TimeSelect
                    label='Heure de début'
                    field='startTime'
                    setValue={(value) => setValue("startTime", value)}
                    defaultValue={getValues("startTime")}
                    className='startTime'
                    disabled={mode==='participate'}
                />

                <TimeSelect
                    label='Heure de fin'
                    field='endTime'
                    setValue={(value) => setValue("endTime", value)}
                    defaultValue={getValues("endTime")}
                    className='endTime'
                    disabled={mode==='participate'}
                />

                <SelectionGroup
                    label="Attributions : "
                    setValues={(values) => setValue("neededAttributions", values)}
                    defaultValue={getValues("neededAttributions")}
                    small={true}
                    className='neededAttributions'
                    disabled={mode==='participate'}
                />

                <SwitchGroup
                    label="Tâche urgente : "
                    setValue={(value) => setValue("isUrgent", value)}
                    defaultValue={getValues("isUrgent")}
                    group={["Non", "Oui"]}
                    minify={true}
                    className='isUrgent'
                    disabled={mode==='participate'}
                />

                <Counter
                    label='Nbre de participants' min={0} max={10} field="numberOfParticipators" defaultValue={getValues("numberOfParticipators")}
                    onChange={(value) => setValue("numberOfParticipators", value)}
                    className='nbParticipators'
                    error = {getValues("numberOfParticipators") < (getValues("numberOfNovice") - getValues("numberOfAutonomous"))}
                    disabled={mode==='participate'}
                />

                <Counter
                    label='Nombre de novice' min={0} max={10} field="numberOfNovice" defaultValue={getValues("numberOfNovice")}
                    onChange={(value) => setValue("numberOfNovice", value)}
                    className='nbNovice'
                    disabled={mode==='participate'}
                />

                <Counter
                    label={`Nombre d'autonome`} min={0} max={10} field="numberOfAutonomous" defaultValue={getValues("numberOfAutonomous")}
                    onChange={(value) => setValue("numberOfAutonomous", value)}
                    className='nbAutonome'
                    disabled={mode==='participate'}
                />

                <div className='control'>

                    {/* BUTTON CREATE */}
                    {mode==='create' && <Button type='submit' >Créer</Button>}

                    {/* BUTTON DELETE */}
                    {(mode==='edit' && !confirmation.edit && !confirmation.delete) && <Button   color={getInCss('--redCoopalim')}
                                                onClick ={(confirmation) => setConfirmation({...confirmation, delete: true})}
                    
                    >Supprimer</Button>}

                    {/* BUTTON EDIT */}
                    {((mode==='edit' || mode==='participate') && !confirmation.edit && !confirmation.delete) &&
                        <Button onClick={(confirmation) => setConfirmation({...confirmation, edit: true})}
                                disabled={data.participators.includes(session?.user?.id) && mode !=='edit'}
                        >
                            {mode === 'edit' ? 'Modifier' : 'Participer'}
                        </Button>}

                    {/* CONFIRMATION DELETE */}
                    {(mode==='edit' && confirmation.delete) && <>
                        <Button onClick={(confirmation) => setConfirmation({...confirmation, delete: false})}>
                            Annuler
                        </Button>
                        <Button color={getInCss('--redCoopalim')} onClick={() => { onDelete(data._id)}} >
                            Supprimer
                        </Button>
                    </>}


                    {/* CONFIRMATION EDIT */}
                    {((mode==='edit' || mode==='participate') && confirmation.edit) && <>
                        <Button type='submit' color={getInCss('--redCoopalim')}>
                            Confirmer
                        </Button>
                        <Button onClick={(confirmation) => setConfirmation({...confirmation, edit: false})}>
                            Annuler
                        </Button>
                    </>}
                </div>
            </MyForm>
            

        </MyModal>
    )
}

export default TaskForm