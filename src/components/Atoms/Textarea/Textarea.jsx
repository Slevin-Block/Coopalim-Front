import React from 'react'
import styles from './Textarea.module.css'
import { Textarea as MantineTextArea} from '@mantine/core';

const Textarea = ({label, placeholder}) => {
    return (
        <MantineTextArea label={label} placeholder={placeholder} className={styles}/>
    )
}

export default Textarea