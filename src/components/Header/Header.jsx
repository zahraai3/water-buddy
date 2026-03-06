import './Header.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className='navbar'>
            <div className="nav-name">
                <h1>Water Buddy</h1>
            </div>
            <div className="nav-links">
                <NavLink to='/'>Setting</NavLink>
                <NavLink to='/dashboard'>Home</NavLink>
                <NavLink to='/history'>History</NavLink>
            </div>
        </div>
    )
}

export default Header
