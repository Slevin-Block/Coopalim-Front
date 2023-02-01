import React from 'react'
import { MyText } from './Text.styled'

const Text = ({children, type, color, className}) => {
    return (
        <MyText type={type} color={color} className={className} >{children}</MyText>
    )
}

export default Text