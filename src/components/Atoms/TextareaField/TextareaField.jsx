import React from 'react'
import styles from './TextareaField.module.css'
import { Textarea } from '@mantine/core';

const TextareaField = ({label, placeholder}) => {
    return (
        <Textarea label={label} placeholder={placeholder} className={styles}/>
    )
}

export default TextareaField