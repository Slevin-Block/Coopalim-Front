import React, { useState } from 'react'
import stylesFull from './InputFieldFull.module.css'
import stylesHalf from './InputFieldHalf.module.css'
import { createStyles, Select, TextInput } from '@mantine/core';

const InputField = ({label, placeholder, defaultValue = "", half = false}) => {
    const [value, setValue] = useState(defaultValue)
    const [styles] = useState(half ? stylesHalf : stylesFull)
    
    return (
        <>
            <TextInput label={label} placeholder={placeholder} classNames={styles}
             value={value} onChange={(e) => setValue(e.target.value)}/>
        </>
    )
}

export default InputField