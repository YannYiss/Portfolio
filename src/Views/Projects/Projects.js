import React, {useState, createRef} from 'react';
import './Projects.css';
import blueprint from '../../Assets/blueprint-wireframe.gif';
import Popup from '../../Components/Modal/Modal';
import ProjectCard from '../../Components/ProjectCard';
import '@animxyz/core';
import {XyzTransitionGroup} from '@animxyz/react';
import portfolio from '../../Assets/portfolio_portrait.png';
import ecommerce from '../../Assets/ecommerce.png';
import basketClub from '../../Assets/basket_club.png';
import pinterest from '../../Assets/pinterest.png';
import atm from '../../Assets/atm.png';
import pokedex from '../../Assets/pokedex.png';
import gif_searcher from '../../Assets/gif_searcher.png';
import weather from '../../Assets/weather.png';


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

                <ProjectCard  title='Pinterest Clone' img_src={pinterest} git='https://github.com/YannYiss/Pinterest' demo='https://affectionate-brattain-4bc1cb.netlify.app/' desc='Functionless clone of Pinterest, thought to to practice CSS' det='This is one of my first projects, and its main purpose was to practice vanilla CSS, it has no functionality so it is a really simple project that just looks great!' handleClick={handleClick}/>

                <ProjectCard  title='The Basketclub' img_src={basketClub} git='https://github.com/YannYiss/basketclub' demo='https://relaxed-poitras-43d004.netlify.app/' desc='Simple landing page for a Basketball club' det='This project was mainly thought to practice responsive design. It has no functionality as it was made only with HTML and vanilla CSS, mobile-first approach' handleClick={handleClick}/>

                <ProjectCard title='ATM' img_src={atm} git='https://github.com/YannYiss/atm' demo='https://mystifying-aryabhata-ae3079.netlify.app/' desc='App that emulates an ATM interface, completley functional' det="This project was thought to integrate HTML, CSS, and JavaScrip. It has different options that you can operate, including transfer between registered users, deposit, withdrawal, and registration of new users. I established a couple of business rules: you can't have less than $10 and no more than $990, this also applies to the user that receives the money. This app has 2 default users already registered: admin and admin2, with passwords: admin and admin 2 respectively. The styling was made only with Bootstrap 5 to ease the design task and focus on the functionality" handleClick={handleClick}/>

                <ProjectCard title='Pokedex' img_src={pokedex} git='https://github.com/YannYiss/Pokedex' demo='https://inspiring-goldstine-527d96.netlify.app/' desc='At that gives you an overview of any Pokemon you search for.' det="One of my favorites. This app will give you an overview of the main attributes of any Pokemon that you search either by name or number. It has a random button that will get you exactly that, a random Pokemon, and a function that will let you preview the first generation's 151 Pokemon. You will be able to see the shiny version of the pokemon by clicking on its image on the detial's page. It was made with HTML, CSS, vanilla JS, and little bit of Bootstrap 5" handleClick={handleClick}/>

                <ProjectCard title='GIF Provider' img_src={gif_searcher} git='https://github.com/YannYiss/gif-search' demo='' desc='Simple app to get the gif you are looking for' det="This was my first React project and I immediatley felt in love with React's potential. It's not completley finished yet as I was focused on understanding the main functionality of React and class components, so the styling was completley left aside. This project it's connected with Giphy API and petitions are handled with Axios.There's not much to explain on this one, you only have to type in a keyword and you will get all gifs related to that search, really straigh forward. In a near feature, this project will get stylised for a better looking, but so far, is completley functional" handleClick={handleClick}/>

                <ProjectCard title='Weather App' img_src={weather} git='https://github.com/YannYiss/weather-app' demo='' desc='Gets the current weather conditions in different cities around the wold' det="This is a weather app showcasing the current weather in the searched city. It was made with React functional components, API requests and hooks to handle different states. This project, like the GIF provider, stills under construction but almost completed, some sublte changes will take place in a near future." handleClick={handleClick}/>

                <ProjectCard title='Ecommerce App' img_src={ecommerce} git='https://github.com/dcyar/devf-react-ecommerce' demo='https://devf-react-ecommerce.netlify.app/' desc='A completley functional ecommerce app developed with 4 other teammates' det="This app was developed with React by 4 teammates and I. It has several functions, including login, register as customer or admin, search, add to cart and product details. It has additional functions for admins, like options to create a product, price set and update. This app is connected with an API provided by our school and requests are handled with Ajax. We made full use of React hooks and sincornized our work through GitHub. You can go ahead and create a user to play around, as customer or admin, it's up to you" handleClick={handleClick}/>

                <ProjectCard title='Porjects Portfolio' img_src={portfolio} git='https://github.com/YannYiss/Portfolio' demo='' desc='Right where you are right now!' det="There's not much that I can say about this project as you have been interacting with it already, so I just wanted to share with you the git link so you can take a look under the hood. I used React for this project as well, and used some new concepts that I recently learned: lazy loading and code splitting. This project will keep updating with as new projects get developed enought to be showcased. Currently, I'm working on the responsive version, that will be deployed shortly." handleClick={handleClick}/>
            </XyzTransitionGroup>
        </main>
    )
}