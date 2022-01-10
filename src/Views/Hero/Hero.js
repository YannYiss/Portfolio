import React from 'react'
import './Hero.css'

export default function Hero() {
    return (
        <main>
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
    )
}
