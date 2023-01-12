import React, { useEffect, useState } from 'react'
import styles from './InputField.module.css'
import { IconUser, IconAlertCircle  } from '@tabler/icons';
import { useStyles } from './InputFieldStyle'
import { TextInput, Tooltip  } from '@mantine/core';


// define custom classes - includes access to theme object



const InputField = ({ label, placeholder, classNames : extClasse, tooltipLabel = "", register, field}) => {
    const { classes } = useStyles();
    const [myStyle] = useState(extClasse ? `${classes} ${extClasse}` : classes)

    return (
        <TextInput
            icon={<IconUser />}
            label={label}
            placeholder={placeholder}
            {...register(field)}
            /* onChange={(e) => handleChange(e)} */
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
    )
}

export default InputField