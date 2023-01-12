import React, {useRef, useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction'
import frLocale from '@fullcalendar/core/locales/fr';
import styles from './Planning.module.css';
import AddTaskModalForm from '../AddTaskModalForm/AddTaskModalForm';

const Planning = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [data, setData] = useState("")
    const calendarRef = useRef(null)

    const handleDateClick = (e) => {
        setData(new Date(e.date))
        setModalOpen(true)
    }

    const onEventAdded = (data) => {
        setModalOpen(false)
        console.log(data)
    }

    return (
        <section className={styles.wrapper}>
            <div className={styles.calendarWrapper}>
                <FullCalendar
                    ref = {calendarRef}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    }}
                    locale={frLocale}
                    initialView='dayGridMonth'
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    dateClick={(e) => handleDateClick(e)}
                    nowIndicator={true}
                    weekNumbers={false}
                />
            </div>
            <AddTaskModalForm
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onEventAdded={(e) => onEventAdded(e)}
                data={data}
            />
        </section>
    )
}

export default Planning