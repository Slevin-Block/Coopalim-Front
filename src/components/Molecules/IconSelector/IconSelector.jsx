import React, { useState, useEffect } from 'react'
import { getInCss } from '../../../global/functions/getInCss'
import Icon, { ToggleIconStep } from '../../Atoms/Icon/Icon'
import Text from '../../Atoms/Text/Text'
import { Box, MySelect } from './IconSelector.styled'

const IconSelector = ({label, value : defaultValue, field, register, setValue}) => {
    const data = Object.keys(ToggleIconStep).map(icon => {return {label : icon}})

    const [value, onChange] = useState(defaultValue)

    useEffect(() => { onChange(defaultValue) }, [defaultValue]) 
    
    return (
        <Box>
            <Text type='label' className='label'>{label}</Text>

            <MySelect
                /* {...register(field)} */
                value = {value}
                data={data?.map(value => value?.label)}
                clearable
                searchable
                allowDeselect 
                onChange={(value) => {
                    onChange(value)
                    setValue(value)
                }}
            />
            {value && <Icon field={value} color={getInCss('--blueCoopalim')} className='icon'/>}
        </Box>
    )
}

export default IconSelector