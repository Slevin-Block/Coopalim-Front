import React from 'react'
import { H1, H2, H3 } from './Title.styled'


const Title = ({ children, level = 1}) => {
    if (level === 1) return <H1 >{children}</H1>
    if (level === 2) return <H2 >{children}</H2>
    if (level === 3) return <H3 >{children}</H3>
}

export default Title