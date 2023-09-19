import React from 'react'
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
            <NavLink exact to='/'>Home</NavLink>
            </li>
            <li>
            <NavLink to='/about'>About</NavLink>
            </li>
            <li>
            <NavLink to='/people'>People</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar