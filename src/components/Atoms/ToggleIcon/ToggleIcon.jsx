import React, {useState, useEffect} from 'react'
import Icon from '../Icon/Icon';
import { getInCss } from '../../../global/functions/getInCss'
import { Tooltip } from '@mantine/core';
import { Box } from './Toggle.styled';


const ToggleIcon = ({ field = 'default', defaultValue = false, desactived = false, small = false,
                           globalValue, tooltip, onChange }) => {

    const [toggle, setToggle] = useState(defaultValue)
    const color = toggle ? getInCss('--background') : getInCss('--blueCoopalim')
    const handleToggle = () => !desactived && setToggle(!toggle)

    useEffect(() => onChange && onChange({...globalValue, check : toggle})
              ,[toggle])

    return (
        <>
            <Tooltip label={tooltip} disabled={!tooltip}>
                <Box label={tooltip} small={small} disabled={desactived} toggle={toggle} onClick={handleToggle}>
                    <Icon field={field} color={color}/>
                </Box>
            </Tooltip>
        </>
    )
}

export default ToggleIcon