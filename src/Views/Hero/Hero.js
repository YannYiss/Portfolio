import React from 'react'
import './Hero.css'
import Sidebar from '../../Components/Sidebar'

export default function Hero() {
    return (
        <div>
            <Sidebar/>
            <main className="welcome">
                <h1 data-text='Hello & Welcome!'>Hello & Welcome!</h1>
                <div className='wraper'>
                    <div className='static-text'>
                    <h2>My name is <span id='name'>Adrian</span>, and this is my</h2>
                    </div>
                    <ul className='dynamic-text'>
                        <li><span>portfolio</span></li>
                        <li><span>Passion</span></li>
                        <li><span>Life</span></li>
                    </ul>
                </div>
            </main>
        </div>
    )
}
