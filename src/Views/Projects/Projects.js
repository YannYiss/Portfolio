import React, {useState, createRef} from 'react';
import './Projects.css';
import blueprint from '../../Assets/blueprint-wireframe.gif';
import Popup from '../../Components/Modal/Modal';
import ProjectCard from '../../Components/ProjectCard';
import '@animxyz/core';
import {XyzTransitionGroup} from '@animxyz/react';
import portfolio from '../../Assets/portfolio_portrait.png';
import ecommerce from '../../Assets/ecommerce.png';


export default function Projects() {
    const [modalShow, setModalShow] = useState(false);
    const [content, setContent] = useState({title: '', img_src: '', det: '', demo: '', git: ''});
    const handleClick = (title, src, det, demo, git) => {
        setContent({title: title, img_src: src, det: det, demo: demo, git: git});
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

                <ProjectCard ref={ref} title='Pinterest Clone' img_src='none' desc='Functionless clone of Pinterest, thought to to practice CSS' det='This is one of my first projects, and its main purpose was to practice vanilla CSS, it has no functionality so it is a really simple project that just looks great!' handleClick={handleClick}/>

                <ProjectCard ref={ref} title='The Basketclub' img_src='none' desc='Simple landing page for a Basketball club' det='This project was mainly thought to practice responsive design. It has no functionality as it was made only with HTML and vanilla CSS, from mobile-first approach' handleClick={handleClick}/>

                <ProjectCard ref={ref} title='ATM' img_src='none' desc='App that emulates an ATM interface, completley functional' det='This project was thought to integrate HTML, CSS and JavaScrip. It has different option that you can operate, including Transfer, Deposit and Withdraw. Currently, it has some preset users in an array, wich you can use to interact with the ATM. In a near future, I will implement the registration function, so can create your own, meanwhile, you can use admin as user and admin1 as password to play around' handleClick={handleClick}/>

                <ProjectCard ref={ref} title='Pokedex' img_src='none' desc='Pokedex app that let you get stats and info overview of any Pokemon you search for.' det="One of my favorites. This app will give you an overview of the main attributes of any Pokemon that you search either by name or number. It has a random button that will get you exactly that, a random Pokemon, and a function that will let you preview the first generation's 151 Pokemon. You will be able to see the shiny version of the pokemon by clicking on its image on the detial's page" handleClick={handleClick}/>

                <ProjectCard ref={ref} title='GIF Provider' img_src='none' desc='Simple app to get the gif you are looking for' det="This was my first React project and I immediatley felt in love with React's potential. It's not completley finished yet as I was focused on understanding the main functionality of React and class components, so the styling was completley left aside. This project it's connected with Giphy API and petitions are handled with Axios.There's not much to explain on this one, you only have to type in a keyword and you will get all gifs related to that search, really straigh forward. In a near feature, this project will get stylised for a better looking, but so far, is completley functional" handleClick={handleClick}/>

                <ProjectCard ref={ref} title='Weather App' img_src='none' desc='Get the current weather conditions in different cities around the wold' det="This is a weather app showcasing the current weather in the searched city. It was made with React functional components, API requests and hooks to handle different states. This project, like the GIF provider, stills under construction but almost completed, some sublte changes will take place in a near future." handleClick={handleClick}/>

                <ProjectCard ref={ref} title='Ecommerce App' img_src={ecommerce} desc='My most complex project up to date. A completley functional ecommerce app developed with 4 other teammates' det="This app was developed with React by 4 teammates and I. It has several functions, including login, register as customer or admin, search, add to cart and product details. It has additional functions for admins, like options to create a product, price set and update. This app is connected with an API provided by our school and requests are handled with Ajax. We made full use of React hooks and sincornized our work through GitHub. You can go ahead and create a user to play around, as customer or admin, it's up to you" handleClick={handleClick}/>
                <ProjectCard ref={ref} title='Porjects Portfolio' img_src={portfolio} desc='Right where you are right now!' det="There's not much that I can say about this project as you have been interacting with it already, so I just wanted to share with you the git link so you can take a look under the hood. I used React for this project as well, and used some new concepts that I recently learned: lazy loading and code splitting. This project will keep updating with as new projects get developed enought to be showcased. Currently, I'm working on the responsive version, that will be deployed shortly." handleClick={handleClick}/>
            </XyzTransitionGroup>
        </main>
    )
}