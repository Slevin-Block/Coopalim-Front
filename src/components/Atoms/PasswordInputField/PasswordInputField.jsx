import React from 'react'
import styles from './PasswordInputField.module.css'
import { PasswordInput } from '@mantine/core';
import { IconKey, IconEyeCheck, IconEyeOff } from '@tabler/icons';
import { useStyles } from './PasswordInputFieldStyle';

const PasswordInputField = ({label, placeholder, register, field}) => {
    const { classes } = useStyles()

    return (
        <PasswordInput
            label={label}
            icon={<IconKey />}
            placeholder={placeholder}
            {...register(field)}
            visibilityToggleIcon={({ reveal, size }) =>
                reveal ? <IconEyeOff size={size} /> : <IconEyeCheck size={size} />
            }
            classNames={classes}
        />  
    )
}

export default PasswordInputField