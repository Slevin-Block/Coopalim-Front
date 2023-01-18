import React, { useState } from 'react'

import { useStyles } from './InputStyle'
import styles from './Input.module.css'
import { TextInput, Tooltip  } from '@mantine/core';
import Icon from '../Icon/Icon';
import { IconAlertCircle } from '@tabler/icons';


// define custom classes - includes access to theme object



const Input = ({ label, placeholder, classNames : extClasse, tooltipLabel = "", register, field, icon : ic = null, error = ''}) => {
    const { classes } = useStyles();
    const [myStyle] = useState(extClasse ? `${classes} ${extClasse}` : classes)

    return (
        <div>
            <TextInput
                
                icon={<Icon field={ic} />}
                label={label}
                name={field}
                placeholder={placeholder}
                {...register(field)}
                classNames={myStyle}
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
            {error && <p className={styles.error}>{error}</p>}
        </div>
    )
}

export default Input