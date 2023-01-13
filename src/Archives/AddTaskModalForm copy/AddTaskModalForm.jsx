import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import 'dayjs/locale/fr'
import { createStyles, Button, TextInput, Switch, Select } from '@mantine/core';
import { DatePicker, TimeInput  } from '@mantine/dates';
import { IconClock } from '@tabler/icons';
import { useFieldArray, useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { TaskSchema as schema } from '../../assets/pattern/formPattern';
import { shortDate, dayWeek, weekNumber } from '../../Global/functions/date'
import styles from "./AddTaskModalForm.module.css"
import dayjs from 'dayjs';
import InputField from '../../components/Atoms/InputField/InputField';
import TextareaField from '../../components/Atoms/TextareaField/TextareaField';




const AddTaskModalForm = ({isOpen, onClose, onEventAdded, data}) => {
/*     const [label, setLabel] = useState()
    const [label, setLabel] = useState()
    const [day, setDay] = useState()
    const [startTime, setStartTime] = useState()
    const [startTime, setStartTime] = useState()
    const [Badge, setBadge] = useState() */

   /*  useEffect(() => {
        isOpen  && setValue("day", shortDate(data))
        !isOpen && reset()
    }, [isOpen])

    const onSubmit = (data) => {
        onEventAdded(data)
    }  */

    console.log(data)
    console.log({label : styles.label})
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} className={styles.modal}>
        <InputField label="Tâche" placeholder="préparation vente" hald={true}/>
        <TextareaField label="Description" placeholder="Description de la tâche"/>
            {/* {data && <>
                        <p>WEEK : {weekNumber(data)}</p>
                        <p>DAY :  {dayWeek(data)}</p>
                    </>
            } */}
            {/* <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            
                <TextInput className={styles.field} label="Tâche" placeholder="préparation vente" value={label} onChange={setLabel}/>
                <div className={styles.subGroup}>
                    <div>
                        <DatePicker className={styles.field} locale="fr" label="Jour" inputFormat="DD MMMM YYYY" placeholder="Jour de la tâche?" clearable={false} {...register('day')}/>
                        <TimeInput className={styles.field} icon={<IconClock size={16} />} label="Début :" clearable {...register('startTime')}/>
                        <TimeInput className={styles.field} icon={<IconClock size={16} />} label="Fin :" clearable {...register('endTime')}/>
                    </div>
                    <div>
                        <h2 className="mantine-ittua2">Attributions</h2>
                        <div className={styles.attribution}>
                            <Switch className={styles.field} label="Badge" />
                            <Switch className={styles.field} label="Logiciel" />
                            <Switch className={styles.field} label="Thermomètre" />
                        </div>
                    </div>
                </div>

                <div className={styles.subGroup}>
                    <Select className={styles.field} data={['1','2','3','4','5']} placeholder="nombre" label="Participants" clearable {...register('numberOfParticipators')}/>
                    <Switch className={styles.field} label="Urgent" />


                </div>
                <div className={styles.subGroup}>
                    <Select className={styles.field} data={['1','2','3','4','5']} placeholder="nombre" label="Novices" clearable {...register('numberOfNovice')}/>
                    <Select className={styles.field} data={['1','2','3','4','5']} placeholder="nombre" label="Autonomes" clearable {...register('numberOfAutonomous')}/>
                </div>

                <Button className={styles.button} type="submit" pr={12}>Envoyer</Button>
            </form> */}
        </Modal>
    )
}

export default AddTaskModalForm