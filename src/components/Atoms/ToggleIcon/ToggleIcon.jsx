import React, {useState, useEffect} from 'react'
import Icon from '../Icon/Icon';
import { getInCss } from '../../../global/functions/getInCss'
import { Tooltip } from '@mantine/core';
import { Box } from './Toggle.styled';


const ToggleIcon = ({ field = 'default', icon, defaultValue = false, disabled, small = false,
                           globalValue, tooltip, onChange }) => {

    const [toggle, setToggle] = useState(defaultValue)
    let color
    if (toggle){
        color = disabled ? '#f6f7f8' : getInCss('--background')
    }else {
        color = getInCss('--blueCoopalim')
    }

    const handleToggle = () => !disabled && setToggle(!toggle)

    useEffect(() => onChange && onChange({...globalValue, check : toggle})
              ,[toggle])

    return (
        <>
            <Tooltip label={tooltip} disabled={!tooltip}>
                <Box label={tooltip} small={small} disabled={disabled} toggle={toggle} onClick={handleToggle}>
                    <Icon field={icon} color={color}/>
                </Box>
            </Tooltip>
        </>
    )
}

export default ToggleIcon