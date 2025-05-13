import React from 'react';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src="/moon.png" alt="Logo" className="navbar-logo" />
                <h2>Tarea</h2>
            </div>
            <div className="navbar-menu">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;