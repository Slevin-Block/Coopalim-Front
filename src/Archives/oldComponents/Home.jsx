import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useQuery } from '@tanstack/react-query'
import { autoLogin } from '../../functions/connection';
import { useRecoilValue } from 'recoil';
import { userState } from '../atoms/user';

//import { useQueryClient } from '@tanstack/react-query'
// const user = useQueryClient().getQueryData("user")


const useToggle = (initialValue = false) => {
    const [value, setValue] = useState(initialValue)
    const toggle = () => { setValue(v => !v) }
    return [value, toggle]
}

const useConnection = () => {
    const [value, toggle] = useToggle(true)
    const navigate = useNavigate()
    //const location = useLocation();
    //const user = location.state?.user

    const { data } = useQuery(["user"], () => autoLogin(), {
        staleTime: 300_000, // 5 min
        enabled : true,
        initialData : undefined,
    })

    useEffect(()=>{
        console.log("Data : " + data)
        if (data === null){
            console.log("Redirection")
            navigate("/login")
        }
    }, [data])

    return {data}
}


const Home = () => {
    console.log("Home" )

    const user = useRecoilValue(userState)
    const navigate = useNavigate();
    useEffect(()=>{
        
        console.log("User : ", user)
        /* if (user === null){
            console.log("Redirection")
            navigate("/login")
        } */
    }, [])
    

    //const {user} = useConnection()
    /* const { data: user } = useQuery(["user"], () => autoLogin(), {
        staleTime: 300_000, // 5 min
    })
    const navigate = useNavigate();

    useEffect(() => {
        if (user === null) navigate('/login')
    }, [user, navigate]) */
    
    

    return (
        <>
            <div>Home</div>
            {/* {user && <p>Hello {user.login}</p>} */}
        </>
    )
}

export default Home