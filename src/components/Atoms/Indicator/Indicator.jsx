import React from 'react'
import { MyIndicator } from './Indicator.styled'


/**
 * position : tc tl tr ml mr bc bl br
 * offset : valeur (+ far away)
 * @returns 
 */
const Indicator = ({color = 'red', size = 7, position='tr', offset = 8}) => {
    return (
        <MyIndicator color={color} size={size} position={position} offset={offset}></MyIndicator>
    )
}

export default Indicator