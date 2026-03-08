import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { useNotificationScheduler } from "../../hooks/hooks"
function Home() {

    useNotificationScheduler()

    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

export default Home
