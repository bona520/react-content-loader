import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from './home'

const Master = () => {
    return (
        <>
            <Home />
            <Outlet />
        </>
    )
}

export default Master