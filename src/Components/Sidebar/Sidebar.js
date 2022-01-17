import React from 'react'
import './Sidebar.css'
import logo from '../../Assets/nicoLogo.png';
import {Link} from 'react-router-dom';

export default function Sidebar() {
    return (
        <aside className='sidebar'>
            <Link to='/'><img src={logo} alt='NiCo' id='logo'/></Link>
            <div className='link-icons'>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-github"></i>
            </div>
        </aside>
    )
}
