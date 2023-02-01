import { useState, useReducer } from 'react'
import 'dayjs/locale/fr';
import { useStyles } from './MantineCalendarStyle';
import { useRecoilState, useRecoilValue } from 'recoil';
import { sessionState } from '../../../global/Providers/session';
import fetcher from '../../../global/functions/fetcher';
import { infoBulleState } from '../../../global/Providers/infoBulle';

export const useCalendarManager = (globalData, mutate) => {

    const session = useRecoilValue(sessionState)
    const [, setInfoBulle] = useRecoilState(infoBulleState)
    const initialState = {opened : 'none', data : [], mode : 'none'}

    // Styling classes
    const { classes, cx } = useStyles();

 
    // Current date selected in Calendar (full date or null if any date selected)
    const [selectedDate, setSelectedDate] = useState(null);

    const reducer = (state, action) => {
            switch (action?.type){
                case 'close'    :   mutate()
                                    return initialState;

                case 'explorer' :   const tasksSelected = globalData?.filter(task => (new Date(task?.startTime)).getDate() === selectedDate?.getDate())
                                    if (tasksSelected?.length > 1) return { opened : 'list', data : tasksSelected, mode:'edit'};
                                    return { opened : 'one', data : tasksSelected[0], mode:'edit'};
                case 'load'     :   if (!action?.payload) return initialState;
                                    return { opened : 'one', data : globalData?.find(task => task._id ===action.payload), mode:'edit'};
                
                case 'new'      :   return { opened : 'one', data : {startTime : selectedDate, endTime : selectedDate}, mode:'create'};

                case 'delete'   :   deleteTask(action.payload, session.token);
                                    
                                    return initialState;

                default         :   console.log("erreur")
            }
    }

    const deleteTask = async (taskId, token) => {
        const res = await fetcher(`/tasks/${taskId}`, 'DELETE', null, token)
        if (res.status === 200) setInfoBulle({open : true, msg : `Tâche supprimée !`})
        else setInfoBulle({open : true, msg : `Erreur !`, warning : true})
        mutate()
    }


    const handleSelectedDate = (newDate) => {
        if(state.opened !== 'none') dispatch({type : 'close'})
        setSelectedDate(newDate)
    }

    const [state, dispatch] = useReducer(reducer, initialState)



    return {state, dispatch, classes, cx, selectedDate, handleSelectedDate}
}