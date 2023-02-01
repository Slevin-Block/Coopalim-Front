import React from "react"
import { Routes, Route} from "react-router-dom";
import { useRecoilValue } from "recoil";

import Modal from 'react-modal'
import { infoBulleState } from "./global/Providers/infoBulle";
import { useLoader } from './global/useLoader'

import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import Header from "./components/Pages/Header/Header";
import Planning from "./components/Pages/Planning/Planning";
import InfoBulle from "./components/Atoms/InfoBulle/InfoBulle";
import Signup from "./components/Pages/Signup/Signup";
import Users from "./components/Pages/Users/Users";
import Loader from "./components/Pages/Loader/Loader";
import Configuration from "./components/Pages/Configuration/Configuration";
import NoMatch from "./components/Pages/NoMatch/NoMatch";

Modal.setAppElement('#root')


function App() {
    const {isLoading} = useLoader()
    const infoBulle = useRecoilValue(infoBulleState)

    return (
        <>
            {infoBulle?.open && <InfoBulle label={infoBulle.msg} warning={infoBulle.warning} />}
            <header>
                <Header />
            </header>
            <main>
                <Loader visible={isLoading}/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/calendar' element={<Planning />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/users' element={<Users />} />
                    <Route path='/configurations' element={<Configuration />} />
                    <Route path="*" element={<NoMatch />} />

                </Routes>
            </main>
        </>
    );
}

export default App;