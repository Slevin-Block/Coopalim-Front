import React from 'react'
import 'dayjs/locale/fr';
import { Calendar as MantineCalendar} from '@mantine/dates';
import { getInCss } from '../../../global/functions/getInCss';
import dayjs from 'dayjs';
import { useTask } from './useTask';
import { Control } from './Calendar.styled';
import TaskForm from '../../Organisms/TaskForm/TaskForm'
import Indicator from '../../Atoms/Indicator/Indicator';
import Button from '../../Atoms/Button/Button';
import ListTask from '../ListTask/ListTask';
import { useCalendarManager } from './useCalendarManager';
import { useMediaQuery } from '../../../global/useMediaQuery';

const Calendar = () => {

    // Custom Hook that make interface to tasks in DB (collect and send) 
    const { isAdmin, month, onMonthChange, tasks, mutate, globalData} = useTask()

    const {isDesktop, isTablet, isMobile} = useMediaQuery()
    const {state, dispatch, classes, cx, selectedDate, handleSelectedDate} = useCalendarManager(globalData, mutate)

    return (
        <>
            {/* MODALS OVER CALENDAR ON EDIT/CREATE OR LIST TASKS */}
            {state.opened === 'one' && <TaskForm    opened={state.opened !== 'none'}
                                                    onClose={() => dispatch({type : 'close'})}
                                                    onDelete={(task) => dispatch({type:'delete', payload : task})}
                                                    data={state.data}
                                                    mode={state.mode}
                                                    isAdmin={isAdmin} />}

            {state.opened === 'list' && <ListTask   opened={state.opened !== 'none'}
                                                    onClose={() => dispatch({type : 'close'})}
                                                    onLoad={(task) => dispatch({type:'load', payload : task})}
                                                    onDelete={(task) => dispatch({type:'delete', payload : task})}
                                                    data={state.data}
                                                    isAdmin={isAdmin} />}
            
            {/* CALENDAR COMPONENT */}
            <MantineCalendar
                // Base Style
                styles={classes} locale="fr" fullWidth  size="md" // xs sm md lg xl 

                // Styles of days out of current month and weekend (show CalendarFieldStyle.js) 
                dayClassName={(date, modifiers) =>
                    cx({ [classes.outside]: modifiers.outside, [classes.weekend]: modifiers.weekend })
                }

                value={selectedDate} onChange={handleSelectedDate} 
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


            {/* CONTROL BOARD */}
            <Control>
                <Button onClick={ () => dispatch({type :'explorer'}) }
                        icon="search"
                        disabled={!tasks.find(task => task.day === dayjs(selectedDate).date() && task.month === dayjs(selectedDate).month())}
                >
                        Explorer
                </Button>
                    {isAdmin && <Button onClick={() => dispatch({type :'new'})} disabled={!selectedDate}
                >
                    Ajouter
                </Button>}
            </Control>
        </>
    );
}

export default Calendar