import React, { useEffect } from "react"
import Modal from 'react-modal'
import './App.css';

import { Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Planning from "./components/Planning/Planning";
import { useRecoilState } from "recoil";
import { infoBulleState } from "./global/Providers/infoBulle";
import InfoBulle from "./components/InfoBulle/InfoBulle";
import { useUser } from './global/UseUser'

Modal.setAppElement('#root')

function App() {
    const user = useUser(null)
    const [infoBulle, setInfoBulle] = useRecoilState(infoBulleState)
    useEffect(()=>{
        user && setInfoBulle({open : true, msg : `Bienvenue ${user?.firstname}`})
    }, [user])

    return (
        <>
            {infoBulle?.open && <InfoBulle label={infoBulle.msg} />}
            <header>
                <Header />
            </header>
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/calendar' element={<Planning />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </main>
        </>
    );
}

export default App;