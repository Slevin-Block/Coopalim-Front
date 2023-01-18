import React from 'react'
import { Switch } from '@mantine/core'
import styles from './SwitchField.module.css'

const SwitchField = ({value = false, data}) => {
    return (
        <Switch classNames={styles.switch} size="xl" checked={value} onLabel="Novice" offLabel="Autonome"/>
    )
}

export default SwitchField