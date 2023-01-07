import React from 'react'
import { useQueryClient } from '@tanstack/react-query'

const Details = () => {

    const user = useQueryClient().getQueryData("user")
    
    return (
        <ul>
            <h1> Details : </h1>
            {user !== undefined && (
                Object.entries(user).map((key,i) => <li key={i}>{key[0]} : {key[1]}</li>)
            )}
        </ul>
        
    )
}

export default Details