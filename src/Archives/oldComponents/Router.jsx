import React from "react"

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { autoLogin } from '../../functions/connection';

import Details from "./Details";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";

function Router() {
    /* useQuery(["user"], () => autoLogin(), {
        staleTime: 300_000, // 5 min
        enabled : true,
        initialData : undefined,
    }) */

    return (
            <BrowserRouter>

                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/details' element={<Details />} />
                </Routes>
            </BrowserRouter>
    );
}

export default Router