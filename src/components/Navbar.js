import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand nav-bg-color justify-content-center align-items-center">
            <ul className="navbar-nav list-unstyled">
                <li className="nav-item"><Link to="/" className="nav-link px-3">Home</Link></li>
                <li className="nav-item"><Link to="/projects" className="nav-link px-3">Projects</Link></li>
                <li className="nav-item"><Link to="/about-me" className="nav-link px-3">About</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link px-3">Resume</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;