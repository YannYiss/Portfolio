import React from 'react';
import './Know_me.css';
import profile from '../../Assets/1925871520_1.jpg';
import mex from '../../Assets/mexico_city.jpeg';
import leon from '../../Assets/leon.jpg';

export default function Know_me() {
    return (
        <main className='me'>
            <div className='profile'>
                <div className='pic_frame'>
                    <img id='profile_pic' src={profile} alt='Adrian Nieto'/>
                </div>
                <div className='name_div'>
                    <h1>Hi, I'm <span id='name'>Adrian</span>, and it's a pleasure!</h1>
                </div>
            </div>
            <div className='bio'>
                <div className='bio_section'>
                    <div className='p'>
                        <p>I'm from Mexico City but I had lived at Leon, Guanajuato, the central part of México called Bajio, since I was 8.</p>
                        <p>I'm 31, married and dad of a 2 years old wonderful girl named Camila. </p>
                    </div>
                    <div className='p_image'>
                        <img id='mex' src={mex} alt='Mexico City'/>
                        <img id='leo' src={leon} alt='Leon City'/>
                    </div>
                </div>
                <div className='bio_section'>
                    <div className='p_image'>
                        <img src={mex} alt='Mexico City'/>
                        <img src={leon} alt='Leon City'/>
                    </div>
                    <div className='p'>
                        <p>I'm from Mexico City but I had lived at Leon, Guanajuato, the central part of México called Bajio, since I was 8.</p>
                        <p>I'm 31, married and dad of a 2 years old wonderful girl named Camila. </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
