import React from 'react';
import './Projects.css';
import blueprint from '../../Assets/blueprint-wireframe.gif';

export default function Projects() {
    return (
        <main className='projects'>
            <div className='welcome_projects'>
                <img src={blueprint} alt='Projects' id='blueprint'/>
                <h2>Welcome to my <span id='projects'>Projects</span></h2>
            </div>
        </main>
    )
}
