import React, { useState, useEffect } from 'react'
import Text from '../../Atoms/Text/Text'
import ToggleIconField from '../../Atoms/ToggleIcon/ToggleIcon'
import { Group } from './SelectionGroup.styled'

const SelectionGroup = ({ label, setValues, defaultValue, disabled, small, className}) => {

    const [value, setValue] = useState(defaultValue)

    useEffect(()=> setValues && setValues(value) ,[value])

    const onChange = (el) => setValue(value.map(row => (row._id === el._id) ? el : row))

    return (
        <div className={className}>
            <Text type='label'>{label}</Text>
            <Group>
                {value.map((el, i) =>
                        <ToggleIconField    key={i}
                                            field={el.label}
                                            icon={el.icon}
                                            defaultValue={el.check}
                                            globalValue={el}
                                            tooltip={el.description}
                                            disabled={disabled}
                                            small={small}
                                            onChange={(el) => onChange(el)} />
                )}
            </Group>
        </div>
    )
}

export default SelectionGroup