import React, { useState, useEffect } from 'react'
import Text from '../../Atoms/Text/Text'
import ToggleIconField from '../../Atoms/ToggleIcon/ToggleIcon'
import styles from './SelectionGroupField.module.css'

const SelectionGroupField = ({ label, getValues, defaultValue, desactived, small}) => {

    const [values, setValues] = useState(defaultValue)
    useEffect(()=> getValues && getValues(values) ,[values])

    const onChange = (el) => {
        setValues(values.map(row => (row._id === el._id) ? el : row))
    }
    
    return (
        <>
            <Text type='label'>{label}</Text>
            <div className={styles.group}>
                {values.map((el, i) =>
                        <ToggleIconField key={i} field={el.label}
                                         defaultValue={el.check}
                                         globalValue={el}
                                         tooltip={el.description}
                                         desactived={desactived}
                                         small={small}
                                         onChange={(el) => onChange(el)} />
                )}
            </div>
        </>
    )
}

export default SelectionGroupField