import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <ul className='links'>
                <Link to='/know-me'><li>Know Me</li></Link>
                <Link to='/projects'><li>Projects</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
            </ul>
        </nav>
    )
}



