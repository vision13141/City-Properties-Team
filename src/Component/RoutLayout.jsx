import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from './Navber'
import Footer from './Footer'

const RoutLayout = () => {
    return (
        <div>
            <Navber />
            <Outlet />
            <Footer />
        </div>
    )
}

export default RoutLayout