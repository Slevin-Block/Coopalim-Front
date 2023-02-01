import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const NoMatch = () => {
    const navigate = useNavigate()
    useEffect(() => { navigate('/') })
}

export default NoMatch