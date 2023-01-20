import { NativeSelect } from '@mantine/core'
import React from 'react'
import { useForm } from 'react-hook-form'
import Counter from '../../Atoms/Counter/Counter'
import DatePicker from '../../Atoms/DatePicker/DatePicker'
import Input from '../../Atoms/Input/Input'
import Select from '../../Atoms/Select/Select'
import TimeInput from '../../Atoms/TimeInput/TimeInput'
import SelectionGroupField from '../../Molecules/SelectionGroupField/SelectionGroupField'
import SwitchGroupField from '../../Molecules/SwitchGroupField/SwitchGroupField'
import { MyModal } from './TaskModal.styled'


export const TaskModal = ({opened, onClose, onEventAdded, data}) => {

    const {register, handleSubmit, formState : {errors}, setValue, getValues} = useForm({defaultValues : data})
    const onSubmit = (data) => {
        console.log(data)
    }

    const handleChange = () => {}

    //console.log(getValues("neededAttributions"))
    console.log(data)

    return (
        <MyModal opened={opened} onClose={onClose} centered overflow="inside" >
            <form onSubmit={(e) => handleSubmit(onSubmit)(e)}>
                <Input  label='Nom de la tâche :' field="label" icon="task" tooltipLabel="Nom de la tâche"
                        register={register} handleChange={handleChange}  error={errors?.label?.message} />

                <Input  label='Description :' field="description" icon="detail" tooltipLabel="Description de la tâche"
                        register={register} handleChange={handleChange}  error={errors?.description?.message} />
                {/* <Select label="Modèle de tâche :"
                                                    placeholder={`d'après un modèle de tâche`}
                                                    defaultValue = {getValues("rule")}
                                                    data={['Test1, test2']}
                                                    getValue={(value) => setValue("rule", value)}
                            /> */}
                <DatePicker label='Jour de la tâche :' field="day" icon="day" tooltipLabel="Jour de la tâche" /* fixedDay={null} */
                        register={register} handleChange={handleChange}  error={errors?.day?.message} />

                <TimeInput label="Heure de début" field="timeStart" icon="clock" tooltipLabel="Heure de début de la tâche"
                        register={register} handleChange={handleChange}  error={errors?.timeStart?.message}/>

                <TimeInput label="Heure de fin" field="timeEnd" icon="clock" tooltipLabel="Heure de fin de la tâche"
                        register={register} handleChange={handleChange}  error={errors?.timeEnd?.message}/>

                <SelectionGroupField    label="Attributions : "
                                                    getValues={(values) => setValue("neededAttributions", values)}
                                                    defaultValue = {getValues("neededAttributions")} />

                <SwitchGroupField       label="Tâche urgente : "
                                        getValue={(value) => setValue("isUrgent", value)}
                                        defaultValue = {getValues("isUrgent")}
                                        group={["Non", "Oui"]}
                                        minify ={true} />

                <Counter    label='Nombre de participants' min={1} max={10} field="numberOfParticipators" defaultValue = {getValues("numberOfParticipators")}
                            onChange={(value) => setValue("numberOfParticipators", value)}/>

                <Counter    label='Nombre de novice' min={1} max={10} field="numberOfNovice" defaultValue = {getValues("numberOfNovice")}
                            onChange={(value) => setValue("numberOfNovice", value)}/>

                <Counter    label={`Nombre d'autonome`} min={1} max={10} field="numberOfAutonomous" defaultValue = {getValues("numberOfAutonomous")}
                            onChange={(value) => setValue("numberOfAutonomous", value)}/>
                
                



            </form>
      </MyModal>
    )
}

export default TaskModal