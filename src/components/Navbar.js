import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { NavigationRoute } from '../routers/NavigationRoute'

const NavigationBar = () => {
    const navbar = (
        NavigationRoute.map(item => (
            <NavLink
                exact
                className="nav-links"
                to={item.path}
                key={item.name}
                activeStyle={{ color: '#41e0fd' }}
            >
                {item.name}
            </NavLink>
        ))
    )

    return (
        <Navbar sticky="top" variant="dark" bg="dark" className="navbar">
            <Nav>
                {navbar}
            </Nav>
        </Navbar>
    )
}

export default NavigationBar