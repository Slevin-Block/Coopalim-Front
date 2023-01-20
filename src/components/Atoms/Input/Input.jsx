import React from 'react'

import { useStyles, Error } from './MantineInputStyle'
import { TextInput, Tooltip  } from '@mantine/core';
import Icon from '../Icon/Icon';
import { IconAlertCircle } from '@tabler/icons';


// define custom classes - includes access to theme object



const Input = ({ label, placeholder, tooltipLabel = "", value, register = () => {}, field = "", icon : ic = null, error}) => {
    const { classes } = useStyles();

    return (
        <div>
            <TextInput
                value = {value}
                icon={!!ic && <Icon field={ic} />}
                label={label}
                name={field}
                placeholder={placeholder}
                {...register(field)}
                classNames={classes}
                rightSection={ tooltipLabel &&
                    <>
                        <Tooltip label={tooltipLabel} position="top-end" withArrow>
                            <div>
                                <IconAlertCircle size={18} style={{ display: 'block', opacity: 0.5 }} />
                            </div>
                        </Tooltip>
                    </>
                }
            />
            {error && <Error>{error}</Error>}
        </div>
    )
}

export default Input