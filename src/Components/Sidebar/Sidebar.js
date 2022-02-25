import React from 'react'
import './Sidebar.css'
import logo from '../../Assets/nicoLogo.png';
import {Link} from 'react-router-dom';

export default function Sidebar() {
    return (
        <aside className='sidebar'>
            <Link to='/'><img src={logo} alt='NiCo' id='logo'/></Link>
            <div className='link-icons'>
                <a href='https://www.linkedin.com/in/adriannietocovarrubias/' target='_blank' rel='noreferrer'><i className="fab fa-linkedin"></i></a>
                <a href='https://github.com/YannYiss' target='_blank' rel='noreferrer'><i className="fab fa-github"></i></a>
            </div>
        </aside>
    )
}
