import React from "react"
import './App.css';

import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";



function App() {

    return (

            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </BrowserRouter>

    );
}

export default App;