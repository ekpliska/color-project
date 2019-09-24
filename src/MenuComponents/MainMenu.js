import React from 'react';
import { NavLink } from 'react-router-dom';
// import '../stylesheets/menu.css';

const selectedStyle = {
    backGroundColor: "white",
    color: "slategray"
}

export const MainMenu = () => {
    return (
        <nav className="main-menu">
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/about" activeStyle={selectedStyle}>
                About
            </NavLink>
            <NavLink to="/events" activeStyle={selectedStyle}>
                Events
            </NavLink>
            <NavLink to="/products" activeStyle={selectedStyle}>
                Products
            </NavLink>
            <NavLink to="/contact" activeStyle={selectedStyle}>
                Contact
            </NavLink>
        </nav>
    )
}

export const AboutMenu = ({ match }) => {
    return (
        <div className="about-menu">
            <li>
                <NavLink to="/about" style={match.isExact && selectedStyle}>
                    Company
                </NavLink>
            </li>
            <li>
                <NavLink to="/about/history" activeStyle={selectedStyle}>
                    History
                </NavLink>
            </li>
            <li>
                <NavLink to="/about/services" activeStyle={selectedStyle}>
                    Services
                </NavLink>
            </li>
            <li>
                <NavLink to="/about/location" activeStyle={selectedStyle}>
                    Location
                </NavLink>
            </li>
        </div>
    )
}