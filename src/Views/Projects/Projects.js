import React, {useState, createRef} from 'react';
import './Projects.css';
import blueprint from '../../Assets/blueprint-wireframe.gif';
import Popup from '../../Components/Modal/Modal';
import ProjectCard from '../../Components/ProjectCard';
import '@animxyz/core';
import {XyzTransitionGroup} from '@animxyz/react';


export default function Projects() {
    const [modalShow, setModalShow] = useState(false);
    const [content, setContent] = useState({title: '', img_src: '', det: ''});
    const handleClick = (title, src, det) => {
        setContent({title: title, img_src: src, det: det});
        setModalShow(true);
    }
    const ref = createRef();

    return (
        <main className='projects' id="projects">
            <Popup show={modalShow} onHide={() => setModalShow(false)} content={content}/>
            <div className='welcome_projects' transition-style="in:circle:hesitate">
                <img src={blueprint} alt='Projects' id='blueprint'/>
                <h2>Welcome to my <span className='sketch'>Projects</span></h2>
            </div>
            <XyzTransitionGroup appearVisible xyz='fade flip-right perspective duration-20 delay-0.5' className='projects_section'>
                <p>In this section, will find all the project that mean the most to me. Each on of them was made from scratch by me and they were thought to apply new knowledge and to mix those new concepts with the old ones. <span className='sketch'>Enjoy!</span></p>

                <ProjectCard ref={ref} title='Pinterest Clone' img_src='none' desc='This is a functionless clone of Pinterest, thought to to practice CSS' det='This is one of my first projects, and its main purpose was to practice vanilla CSS, it has no functionality so it is a really simple project that just looks great!' handleClick={handleClick}/>

                <ProjectCard ref={ref} title='ATM' img_src='none' desc='This is an app that emulates an ATM interface, completley functional' det='This project was thought to integrate HTML, CSS and JavaScrip. It has different option that you can operate, including Transfer, Deposit and Withdraw. Currently, it has some preset users in an array, wich you can use to interact with the ATM. In a near future, I will implement the registration function, so can create your own.' handleClick={handleClick}/>
                <ProjectCard ref={ref} title='no title' img_src='none' desc='test successful' handleClick={handleClick}/>
                <ProjectCard ref={ref} title='no title' img_src='none' desc='test successful' handleClick={handleClick}/>
                <ProjectCard ref={ref} title='no title' img_src='none' desc='test successful' handleClick={handleClick}/>
                <ProjectCard ref={ref} title='no title' img_src='none' desc='test successful' handleClick={handleClick}/>
                <ProjectCard ref={ref} title='no title' img_src='none' desc='test successful' handleClick={handleClick}/>
                <ProjectCard ref={ref} title='no title' img_src='none' desc='test successful' handleClick={handleClick}/>
            </XyzTransitionGroup>
        </main>
    )
}
