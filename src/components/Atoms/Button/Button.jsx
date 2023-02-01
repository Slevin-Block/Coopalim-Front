import React from 'react'
import Icon from '../Icon/Icon'
import Indicator from '../Indicator/Indicator'
import {MyBox , MyButton} from './Button.styled'


const Button = ({children, type = "button", onClick = () => {}, color="#0092B4" , iconColor, error = false, disabled = false, small, icon = null, className}) => {

    return (
        <>
            <MyBox className={className} small={small}>
                <MyButton type={type} color={color} onClick={onClick} disabled={disabled}>
                    {icon && <Icon field={icon} color={iconColor} />}
                    {children}
                </MyButton>
                {error && <Indicator />}
            </MyBox>
            
        </>
    )
}

export default Button