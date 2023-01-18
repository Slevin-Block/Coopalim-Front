import React, { useState, useEffect } from 'react'
import { useStyles } from './SelectStyle'
import { Select as MantineSelect} from '@mantine/core';


const Select = ({ label, placeholder, data, classNames : extClasse, getValue, defaultValue}) => {
    const { classes } = useStyles();
    
    const [value, setValue] = useState(defaultValue || data[0])
    const [myStyle] = useState(extClasse ? `${classes} ${extClasse}` : classes)
    
    const handleChange = (value) => { setValue(data.find(opt => opt.label === value)) }
    useEffect(()=>{ getValue && getValue(value) },[value])


    return (
        <MantineSelect
            value={value.label}            
            style={{ marginTop: 20, zIndex: 2 }}
            data={data.map(value => value.label)}
            placeholder={placeholder}
            label={label}
            classNames={myStyle}
            onChange={handleChange}
        />
    )
}

export default Select