import React from 'react'
import { MyIndicator, P } from './Indicator.styled'



/**
 * position : tc tl tr ml mr bc bl br
 * offset : valeur (+ far away)
 * @returns 
 */
const Indicator = ({color = "red", size = 10, position='tr', offset = 3,  label, disabled = false }) => {
    let width = size;
    let height = size;
    if (label){
        width *= 2;
        height *= 1.6;
    }
    return (
        <>
            {!disabled && <MyIndicator color={color} position={position} width={width} height={height} offset={offset}><P>{label}</P></MyIndicator>}
        </>
    )
}

export default Indicator