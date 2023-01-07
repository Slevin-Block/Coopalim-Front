import React from 'react'
import {  Link, useNavigate } from "react-router-dom";
import { logout } from '../../functions/connection';

const Header = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        await logout()
        navigate('/login')
    }

    return (
        <>
            <Link to='/'>Home</Link>
            <Link onClick={() => handleLogout()} >Logout</Link>
        </>

    )
}

export default Header