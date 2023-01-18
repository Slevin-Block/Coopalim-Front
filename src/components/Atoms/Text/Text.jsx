import React from 'react'
import { MyText } from './Text.styled'

const Text = ({children, type, color}) => {
    return (
        <MyText type={type} color={color}>{children}</MyText>
    )
}

export default Text