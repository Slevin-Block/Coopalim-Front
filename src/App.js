import React, { useEffect } from "react"
import { Routes, Route} from "react-router-dom";
import { useRecoilState } from "recoil";

import Modal from 'react-modal'
import { infoBulleState } from "./global/Providers/infoBulle";
import { useLoader } from './global/UseLoader'

import Home from "./components/Views/Home/Home";
import Login from "./components/Views/Login/Login";
import Header from "./components/Views/Header/Header";
import Planning from "./components/Views/Planning/Planning";
import InfoBulle from "./components/Atoms/InfoBulle/InfoBulle";
import Signup from "./components/Views/Signup/Signup";
import Users from "./components/Views/Users/Users";

Modal.setAppElement('#root')

function App() {
    const {isLoading} = useLoader()
    const [infoBulle, setInfoBulle] = useRecoilState(infoBulleState)

    useEffect(()=>{
        isLoading && setInfoBulle({open : true, msg : `Connection établie`})
    }, [isLoading])

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
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/users' element={<Users />} />
                </Routes>
            </main>
        </>
    );
}

export default App;