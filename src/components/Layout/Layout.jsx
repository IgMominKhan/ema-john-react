import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

import "../../App.css";

const Layout = ()=> {
return (
    <>
        <Header/>
        <Outlet/>
    </>
)
}

export default Layout;