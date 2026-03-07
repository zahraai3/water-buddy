import './Header.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Header() {

    const [open, setOpen] = useState(false)

    function toggleMenu(){
        setOpen(!open)
    }

    return (
        <div className='navbar'>
            <button 
                className={`hamburger ${open ? "open" : ""}`} 
                aria-label="Toggle menu"
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className="nav-name">
                <h1>Water Buddy</h1>
            </div>
            <div className="nav-links">
                <NavLink to='/setting'>Setting</NavLink>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/history'>History</NavLink>
            </div>
        </div>
    )
}

export default Header
