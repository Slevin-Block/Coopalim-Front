import React, { useState } from 'react'
import 'dayjs/locale/fr';
import { Indicator } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import { getInCss } from '../../../global/functions/getInCss';
import { useStyles } from './CalendarFieldStyle';
import dayjs from 'dayjs';
import { useTask } from './useTask';
import ButtonField from '../ButtonField/ButtonField';

const CalendarField = () => {
    const {tasks, sendTask} = useTask()
    const [date, setDate] = useState(null);
    const [month, onMonthChange] = useState(new Date());
    const { classes, cx } = useStyles();
     

    // Store day, occurancy of each and compile isNotUrgency
    const tasksState = tasks ?  tasks
                    .filter(task => dayjs(task.startTime).month() === dayjs(month).month())
                    .map(task => {return {day : dayjs(task.startTime).date(), isNotUrgent : task.isNotUrgent, qty : 1}})
                    .flatMap((task, i, tasks) => {
                        if(i > 0 && tasks.slice(0, i).map(t => t.day).includes(task.day)) return []
                        const arr = tasks.filter(t => t.day === task.day)
                        const obj = {...task}
                        obj.qty = arr.length
                        obj.isNotUrgent = arr.reduce((a,b) => a && b.isNotUrgent, true)
                        return {...obj}
                    })
                    : []


    return (
        <>
            <Calendar
                // Base Style
                styles={classes} locale="fr" fullWidth  size="md" // xs sm md lg xl 

                // Styles of days out of current month and weekend (show CalendarFieldStyle.js) 
                dayClassName={(date, modifiers) =>
                    cx({ [classes.outside]: modifiers.outside, [classes.weekend]: modifiers.weekend })
                }

                value={date} onChange={setDate} 
                month={month} onMonthChange={onMonthChange}
                
                // Week-end and date of other month disabled 
                excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6 || date.getMonth() !== month.getMonth()}
                
                //Styling Date with task
                dayStyle={(myDate) => {
                        const taskDays = tasks ? tasks.map(task => dayjs(task.startTime).format('DD/MM/YYYY')) : []
                        if (taskDays.includes(dayjs(myDate).format('DD/MM/YYYY'))){
                            if (dayjs(myDate).format("DD/MM/YYYY") === dayjs(date).format("DD/MM/YYYY")){
                                return { backgroundColor: getInCss("--secondary"), border : `0.1rem solid ${getInCss("--primary")}`, }
                            }else{
                                return { backgroundColor: getInCss("--primary"), borderRadius: '0.5rem' }
                            }
                        }else {
                            return null
                        }
                    }
                }

                renderDay={(date) => {
                    const day = date.getDate();
                    const taskDay = tasksState.find(task => task.day === day)
                    taskDay && console.log(taskDay)
                    return (
                        <>
                            {taskDay ?
                                    <Indicator inline label={taskDay.qty} color="none" size={'0.8rem'} /* position="top-center" */ offset={'-1.2vh'} >
                                        <div>{day}</div>
                                    </Indicator>
                                : <div>{day}</div>
                            }
                            {taskDay &&  <Indicator size={14} offset={'-2vh'} color="red" radius="xl" position="bottom-center" disabled={taskDay?.isNotUrgent} />}
                        </>
                    );
                }}
            />
            <ButtonField label="Ajouté" onClick={() => sendTask(date)}/>
        </>
    );
}

export default CalendarField