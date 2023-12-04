// TopBar.js
import React from 'react';
import './TopBar.css';
// import logo from './logo';

const TopBar = () => {
    return (
        <div className="top-bar">
            {/* <img src={logo} alt="Logo" /> */}
            <div className="logo">SkillVista</div>
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/about">Login/Signup</a>
                <a href="/contact">Contact Us</a>
                {/* Add more links as needed */}
            </div>
        </div>
    );
};

export default TopBar;