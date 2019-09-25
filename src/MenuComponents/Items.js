import React from 'react';
import { Route, Link } from 'react-router-dom';
import PageTemplate from '../template/PageTemplate';
import { AboutMenu } from './MainMenu';
import { Company, History, Services, Location } from './AboutMenu';
import App from '../App';

export const Home = () => {
    return (
        <div className="home">
            <h1>Home</h1>
            <div>
                <Link to="about">About</Link>
                <Link to="events">Events</Link>
                <Link to="colorapp">Color App</Link>
                <Link to="contact">Contact</Link>
            </div>
        </div>
    )
}

export const About = () => { 
    return (
        <PageTemplate>
            <section className="about">
                <Route component={AboutMenu} />
                <Route exac path="/about" component={Company} />
                <Route path="/about/history" component={History} />
                <Route path="/about/services" component={Services} />
                <Route path="/about/location" component={Location} />
            </section>
        </PageTemplate>
    )
}

export const Events = () => {
    return (
        <PageTemplate>
            <section className="events">
                <h1>Events</h1>
            </section>
        </PageTemplate>
    )
}

export const ColorApp = () => { 
    return (
        <PageTemplate>
            <section className="colorapp">
                <App />
            </section>
        </PageTemplate>
    )
}

export const Contact = () => { 
    return (
        <PageTemplate>
            <section className="contact">
                <h1>Contact</h1>
            </section>
        </PageTemplate>
    )
}

export const Whoops404 = ({ location }) => {
    return (
        <PageTemplate>
            <div className="whoops-404">
                <p>Resource not found at '{location.pathname}'</p>
            </div>
        </PageTemplate>
    )
}
