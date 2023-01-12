import React, {useState} from 'react'
import { Button } from '@mantine/core';
import { useStyles } from './ButtonFieldStyle';

const ButtonField = ({label, type, className : extClasses}) => {
    const {classes} = useStyles()
    const [myStyle] = useState(extClasses ? classes.button + " " + extClasses : classes.button)

    return (
        <Button type={type} className={myStyle}>{label}</Button>
    )
}

export default ButtonField