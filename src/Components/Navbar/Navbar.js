import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import logo_w from '../../Assets/nico_logo_w.png'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <Link to='/'><img src={logo_w} alt='NiCo' id='logo_w'/></Link>
            <ul className='links'>
                <Link to='/know-me'><li>Know Me</li></Link>
                <Link to='/projects'><li>Projects</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
            </ul>
        </nav>
    )
}



