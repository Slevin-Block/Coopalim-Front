import React from 'react'
import Indicator from '../Indicator/Indicator'
import {MyBox , MyButton} from './Button.styled'


const Button = ({children, type = "button", onClick = () => {}, color="#0092B4" , error = false, disabled = false}) => {

    return (
        <>
            <MyBox>
                <MyButton type={type} color={color} onClick={onClick} disabled={disabled}>{children}</MyButton>
                {error && <Indicator />}
            </MyBox>
            
        </>
    )
}

export default Button