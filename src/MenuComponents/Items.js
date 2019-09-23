import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className="home">
            <h1>Home</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="events">Events</Link>
                <Link to="products">Products</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    )
}

export const About = () => { 
    return (
        <select className="about">
            About
        </select>
    )
}

export const Events = () => {
    return (
        <select className="events">
            Events
        </select>
    )
}

export const Products = () => { 
    return (
        <select className="products">
            Products
        </select>
    )
}

export const Contact = () => { 
    return (
        <select className="contact">
            Contact
        </select>
    )
}

export const Whoops404 = ({ location }) => {
    return (
        <div className="whoops-404">
            <h1>Resource not found at '{location.pathname}'</h1>
        </div>
    )
}
