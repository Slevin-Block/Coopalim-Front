import React, {useState} from 'react'
import { Button } from '@mantine/core';
import { useStyles } from './ButtonFieldStyle';

const ButtonField = ({label, type, onClick = ()=>{} , className : extClasses}) => {
    const {classes} = useStyles()
    const [myStyle] = useState(extClasses ? classes.button + " " + extClasses : classes.button)

    return (
        <Button type={type} className={myStyle} onClick={onClick} >{label}</Button>
    )
}

export default ButtonField