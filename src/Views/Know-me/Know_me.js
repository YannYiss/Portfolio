import React from 'react';
import {Link} from 'react-router-dom';
import './Know_me.css';
import profile from '../../Assets/1925871520_1.jpg';
import mex from '../../Assets/mexico_city.jpeg';
import leon from '../../Assets/leon.jpg';
import study from '../../Assets/studyjpg.jpg';
import code from '../../Assets/pexels-kevin-ku-577585.jpg';
import blueprint from '../../Assets/blueprint.jpg';
import '@animxyz/core';
import {XyzTransitionGroup} from '@animxyz/react';

export default function Know_me() {
    return (
        <main className='me'>
            <div className='profile' transition-style="in:custom:circle-swoop" >
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
                        <XyzTransitionGroup appearVisible xyz='fade duration-10'>
                            <p>I'm from Mexico City but I had lived at Leon, Guanajuato, the central part of México called Bajio, since I was 8.</p>
                            <p>I'm 31, married and dad of a 2 years old wonderful girl named Camila. </p>
                        </XyzTransitionGroup>
                    </div>
                    <div className='p_image'>
                        <img id='mex' src={mex} alt='Mexico City'/>
                        <img id='leo' src={leon} alt='Leon City'/>
                    </div>
                </div>
                <div className='bio_section'>
                    <div className='p_image_lg'>
                            <img src={blueprint} className='bio_image_lg_lft' alt='Mexico City'/>
                    </div>
                    <div className='p'>
                        <XyzTransitionGroup appearVisible xyz='fade duration-10'>
                            <p>I studied Industrial Engeneering, but my true love is for techology, reazon why I decided to get into coding.</p>
                            <p>I always liked to learn stuff by myself so I started on mw own in my coding path. Currently, I'm taking the Master in Coding course provided by Dev.F, which will boost my skills to become a full-stack developer.</p>
                        </XyzTransitionGroup>
                    </div>
                </div>
                <div className='bio_section'>
                    <div className='p'>
                        <XyzTransitionGroup appearVisible xyz='fade duration-10'>
                            <p>Some of the front-end technologies that I currently handle includes:</p>
                            <ul>
                                <li>HTML 5</li>
                                <li>CSS 3</li>
                                <li>Bootstrap</li>
                                <li>SASS</li>
                                <li>JavaScript ES6</li>
                                <li>React</li>
                                <li>Node.js</li>
                            </ul>
                            <p>Just to mention some...</p>
                        </XyzTransitionGroup>
                    </div>
                    <div className='p_image_lg'>
                        <img src={code} className='bio_image_lg_rgt' alt='Coding'/>
                    </div>
                </div>
                <div className='bio_section'>
                    <div className='p_image_lg'>
                        <img src={study} className='bio_image_lg_lft' alt='Studying Hard'/>
                    </div>
                    <div className='p'>
                        <XyzTransitionGroup appearVisible xyz='fade duration-10'>
                            <p>I'll continue learning some technologies in the next months, focused in the back-end development, including:</p>
                            <ul>
                                <li>MongoDB</li>
                                <li>Express.js</li>
                                <li>RESTful APIs</li>
                                <li>SQL and NoSQL Databases</li>
                                <li>Docker</li>
                                <li>CI/CD</li>
                            </ul>
                        </XyzTransitionGroup>
                    </div>
                </div>
            </div>
            <div className='close'>
                <h2>Please, take some time to browse some of my <Link to='/projects'><span id='projects_link'>Projects</span></Link></h2>
            </div>
        </main>
    )
}
