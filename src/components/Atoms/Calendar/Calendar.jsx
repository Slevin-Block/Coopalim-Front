import React, { useState } from 'react'
import 'dayjs/locale/fr';
import { Calendar as MantineCalendar} from '@mantine/dates';
import { getInCss } from '../../../global/functions/getInCss';
import { useStyles } from './MantineCalendarStyle';
import dayjs from 'dayjs';
import { taskExample, useTask } from './useTask';
import  Button  from '../Button/Button';
import Indicator from '../Indicator/Indicator';
import { Control } from './Calendar.styled';
import TaskModal from '../../Organisms/TaskModal/TaskModal'
import { attributionsState } from '../../../global/Providers/attributions';
import { useRecoilValue } from 'recoil';

const Calendar = () => {

    const attributions = useRecoilValue(attributionsState)

    // Custom Hook that make interface to tasks in DB (collect and send) 
    const { month, onMonthChange, tasks, sendTask} = useTask()
 
    // Current date selected in Calendar (full date or null if any date selected)
    const [selectedDate, setSelectedDate] = useState(null);

    // Creating/Editing Modal State
    const [opened, setOpened] = useState(false);

    // Styling classes
    const { classes, cx } = useStyles();
   
   const data = {   ...taskExample(selectedDate),
                    neededAttributions : attributions?.map(att => {return {...att, check : false}}),
                    isUrgent : false    
                }

    console.log(data)

    return (
        <>
            <TaskModal opened={opened} onClose={() => setOpened(false)}
                data={data}
            />
            <MantineCalendar
                // Base Style
                styles={classes} locale="fr" fullWidth  size="md" // xs sm md lg xl 

                // Styles of days out of current month and weekend (show CalendarFieldStyle.js) 
                dayClassName={(date, modifiers) =>
                    cx({ [classes.outside]: modifiers.outside, [classes.weekend]: modifiers.weekend })
                }

                value={selectedDate} onChange={setSelectedDate} 
                month={month} onMonthChange={onMonthChange}
                
                // Week-end and date of other month disabled 
                excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6 || date.getMonth() !== month.getMonth()}
                
                //Styling Date with task and selected
                dayStyle={(myDate) => {
                        if (tasks.find(task => task.day === dayjs(myDate).date() && task.month === dayjs(myDate).month())){
                            if (dayjs(myDate).format("DD/MM/YYYY") === dayjs(selectedDate).format("DD/MM/YYYY")){
                                return { backgroundColor: getInCss("--secondary"), border : `0.1rem solid ${getInCss("--primary")}`, }
                            }else{
                                return { backgroundColor: getInCss("--primary"), borderRadius: '0.5rem' }
                            }
                        }else {
                            return null
                        }
                }}

                //Styling Date with indicators
                renderDay={(date) => {
                    const day = date.getDate();
                    const taskDay = date.getMonth() === month.getMonth() && tasks.find(task => task.day === day)
                    return (
                        <>
                            {true ?
                                    <div>
                                        {day}
                                        <Indicator position='tl' label={taskDay?.qty} color='' offset={3}  />
                                    </div>
                                    
                                : <div>{day}</div>
                            }
                            {taskDay &&  <Indicator color={getInCss('--redCoopalim')} position='tr' disabled={!taskDay?.isUrgent} />}
                        </>
                    );
                }}
            />

            <Control>
                
                <Button onClick={ () => setOpened(true) }
                        disabled={!tasks.find(task => task.day === dayjs(selectedDate).date() && task.month === dayjs(selectedDate).month())}
                >
                        Explorer
                </Button>
                <Button onClick={() => sendTask(selectedDate)} disabled={!selectedDate}
                >
                    Ajouté
                </Button>
            </Control>
        </>
    );
}

export default Calendar