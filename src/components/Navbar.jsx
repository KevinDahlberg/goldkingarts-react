import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <div className="navbar">
            <NavLink to="/about">about</NavLink>
            <NavLink to="/home">GOLD KING ARTS</NavLink>
            <NavLink to="/gallery">gallery</NavLink>
        </div>
    )
}

export default Navbar