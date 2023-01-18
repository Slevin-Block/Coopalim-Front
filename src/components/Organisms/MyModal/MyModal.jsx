import React from 'react'
import Modal from 'react-modal'
import { dayWeek, weekNumber } from '../../functions/date'
import styles from "./MyModal.module.css"

const MyModal = ({isOpen, onClose, onEventAdded, data}) => {

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} className={styles.modal}>
            {data && <>
                        <p>WEEK : {weekNumber(data)}</p>
                        <p>DAY :  {dayWeek(data)}</p>
                    </>
            }
        </Modal>
    )
}

export default MyModal