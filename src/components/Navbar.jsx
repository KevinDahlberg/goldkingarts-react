import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <div className="navbar">
            <div className="navbar-content">
                <NavLink className="navbar-pagelink" to="/about">about</NavLink>
                <NavLink className="navbar-title" to="/home">GOLD KING ARTS</NavLink>
                <NavLink className="navbar-pagelink" to="/gallery">gallery</NavLink>
            </div>
        </div>
    )
}

export default Navbar