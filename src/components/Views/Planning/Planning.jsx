import React, {useRef, useState} from 'react'
import styles from './Planning.module.css';
import Calendar  from '../../Atoms/Calendar/Calendar'

const Planning = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [data, setData] = useState("")
    const calendarRef = useRef(null)

    const handleDateClick = (e) => {
        setData(new Date(e.date))
        console.log(data)
        setModalOpen(true)
    }

    const onEventAdded = (data) => {
        setModalOpen(false)
        console.log(data)
    }

    return (
        <section className={styles.wrapper}>
                <Calendar />
        </section>
    )
}

export default Planning