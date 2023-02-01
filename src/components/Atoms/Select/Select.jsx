import React, { useState } from 'react'
import { MySelect } from './Select.styled';


const Select = ({ label = '', placeholder, data = [], setValue, defaultValue = null, className, clearable = false}) => {

    
    const [value, onChange] = useState(defaultValue)
    
    const handleChange = (value) => {
        const temp = data.find(opt => opt.label === value)
        setValue(temp)
        onChange(temp)
    }

    return (
        <div className={className}>
            <MySelect
                value={value?.label}
                data={data?.map(value => value?.label)}
                placeholder={placeholder}
                label={label}
                clearable = {clearable}
                onChange={handleChange}
            />
        </div>
    )
}

export default Select