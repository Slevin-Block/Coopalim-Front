import React from 'react'
import { PasswordInput as MantinePasswordInput} from '@mantine/core';
import { IconKey, IconEyeCheck, IconEyeOff } from '@tabler/icons';
import { useStyles } from './PasswordInputStyle';
import { Error } from './Error.styled';

const PasswordInput = ({ label, placeholder, register, field, error}) => {
    const { classes } = useStyles()

    return (
        <div>
            <MantinePasswordInput
                label={label}
                autoComplete="on"
                icon={<IconKey />}
                placeholder={placeholder}
                {...register(field)}
                visibilityToggleIcon={({ reveal, size }) =>
                    reveal ? <IconEyeOff size={size} /> : <IconEyeCheck size={size} />
                }
                classNames={classes}
            />
            {error && <Error>{error}</Error>}
        </div>
    )
}

export default PasswordInput