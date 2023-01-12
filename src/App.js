import React from "react"
import Modal from 'react-modal'
import './App.css';

import { Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Planning from "./components/Planning/Planning";
import { useRecoilValue } from "recoil";
import { infoBulleState } from "./Providers/infoBulle";
import InfoBulle from "./components/InfoBulle/InfoBulle";

Modal.setAppElement('#root')

function App() {

    const infoBulle = useRecoilValue(infoBulleState)
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