import React from 'react';
import './Know_me.css';
import profile from '../../Assets/1925871520_1.jpg';

export default function Know_me() {
    return (
        <main className='me'>
            <div className='profile'>
                <img id='profile_pic' src={profile} alt='Adrian Nieto'/>
                <h1>Hi, I'm <span id='name'>Adrian</span>, and it's a pleasure!</h1>
            </div>
        </main>
    )
}
