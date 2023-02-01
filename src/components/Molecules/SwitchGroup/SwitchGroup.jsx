import React, {useState, useEffect} from 'react'
import Text from '../../Atoms/Text/Text'
import { Group, Info } from './SwitchGroup.styled'

const SwitchGroup = ({label, group = [], defaultValue = false, setValue, disabled, minify = false, className}) => {

    const [value, onChange] = useState(defaultValue)

    useEffect(() => { setValue && setValue(value) },[value])

    if (group.length !== 2) return <>{"Error : array[2] needed"}</>
    
    return (
        <div className={className}>
            <Text type='label'>{label}</Text>
            <Group>
                {minify && 
                    <Info onClick={() => !disabled && onChange(value => !value)} selected = {!value}>
                        <Text>{group[value ? 1 : 0]}</Text>
                    </Info>
                }
                {!minify &&
                    <>
                        <Info onClick={() => !disabled && onChange(false)} selected = {!value}>
                            <Text >{group[0]}</Text>
                        </Info>
                        <Info onClick={() => !disabled && onChange(true)} selected = {value}>
                            <Text >{group[1]}</Text>
                        </Info>
                    </>
                }
            </Group>
        </div>
    )
}

export default SwitchGroup