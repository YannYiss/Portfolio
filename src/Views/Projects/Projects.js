import React, {useState} from 'react';
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
import pet_adoption from '../../Assets/pet_adoption.png';
import jammingv2 from '../../Assets/jammingv2.png';
import jamming from '../../Assets/jamming.png';
import appointmentPlanner from '../../Assets/appointment_planner.png';


export default function Projects() {
    const [modalShow, setModalShow] = useState(false);
    const [content, setContent] = useState({title: '', img_src: '', det: '', demo: '', git: ''});
    const handleClick = (title, src, det, demo, git) => {
        setContent({title: title, img_src: src, det: det, demo: demo, git: git});
        setModalShow(true);
    }

    return (
        <main className='projects' id="projects">

            <Popup show={modalShow} onHide={() => setModalShow(false)} content={content}/>
            
            <div className='welcome_projects' transition-style="in:circle:hesitate">

                <img src={blueprint} alt='Projects' id='blueprint'/>

                <h2>Welcome to my <span className='sketch'>Projects</span></h2>

            </div>
            <XyzTransitionGroup appearVisible xyz='fade flip-right perspective duration-20 delay-0.5' className='projects_section'>

                <p>In this section, will find all the projects that have significance for me, and which fulfill the latest technology needs of the industry. <span className='sketch'>Enjoy!</span></p>

                <ProjectCard  title='Pinterest Clone' img_src={pinterest} git='https://github.com/YannYiss/Pinterest' demo='https://affectionate-brattain-4bc1cb.netlify.app/' desc='Functionless clone of Pinterest, thought to practice CSS' det='This is one of my first projects, and its main purpose was to practice vanilla CSS, it has no functionality so it is a really simple project that looks great!' handleClick={handleClick}/>

                <ProjectCard  title='The Basketclub' img_src={basketClub} git='https://github.com/YannYiss/basketclub' demo='https://relaxed-poitras-43d004.netlify.app/' desc='Simple landing page for a Basketball club' det='This project was mainly thought to practice responsive design. It has no functionality as it was made only with HTML and vanilla CSS, mobile-first approach' handleClick={handleClick}/>

                <ProjectCard title='ATM' img_src={atm} git='https://github.com/YannYiss/atm' demo='https://mystifying-aryabhata-ae3079.netlify.app/' desc='An app that emulates an ATM interface, completely functional' det="This project was thought to integrate HTML, CSS, and JavaScrip. It has different options that you can operate, including transfer between registered users, deposit, withdrawal, and registration of new users. I established a couple of business rules: you can't have less than $10 and no more than $990, this also applies to the user that receives the money. This app has 2 default users already registered: admin and admin2, with passwords: admin and admin 2 respectively. The styling was made only with Bootstrap 5 to ease the design task and focus on the functionality" handleClick={handleClick}/>

                <ProjectCard title='Pokedex' img_src={pokedex} git='https://github.com/YannYiss/Pokedex' demo='https://inspiring-goldstine-527d96.netlify.app/' desc='An app that gives you an overview of any Pokemon you search for.' det="One of my favorites. This app will give you an overview of the main attributes of any Pokemon that you search either by name or number. It has a random button that will get you exactly that, a random Pokemon, and a function that will let you preview the first generation's 151 Pokemon. You will be able to see the shiny version of the pokemon by clicking on its image on the details page. It was made to practice API requests handle as it's connected to PokeApi's database. It was made with HTML, CSS, vanilla JS, and a little bit of Bootstrap 5." handleClick={handleClick}/>

                <ProjectCard title='GIF Provider' img_src={gif_searcher} git='https://github.com/YannYiss/gif-search' demo='https://awesome-boyd-310ac4.netlify.app/' desc='Simple app to get the gif you look for' det="This was my first React project and I immediately fell in love with its potential. This project was made React's class components, it's connected with Giphy API, and petitions are handled with Axios. There's not much to explain on this one, you only have to type in a keyword and you will get all gifs related to that search, really straightforward." handleClick={handleClick}/>

                <ProjectCard title='Weather App' img_src={weather} git='https://github.com/YannYiss/weather-app' demo='https://zealous-swartz-593630.netlify.app/' desc='Gets the current weather conditions in different cities around the wold' det="This is a weather app showcasing the current weather in the searched city. It was made with React functional components, API requests, and hooks to handle different states. I used SASS for styling in this project as an introduction to this preprocessor, but I didn't have the chance to dig deeper, so some subtle changes might take place in the near future to this project to keep practicing" handleClick={handleClick}/>

                <ProjectCard title='Ecommerce App' img_src={ecommerce} git='https://github.com/dcyar/devf-react-ecommerce' demo='https://devf-react-ecommerce.netlify.app/' desc='A completely functional eCommerce app developed with 4 other teammates' det="This app was developed with React by 4 teammates and me. It has several functions, including login, register as customer or admin, product search, add to cart, and product details. It has additional functions for admins to create a product, price set, and price update. This app is connected with an API provided by our school and requests are handled with Axios. We made full use of React hooks and synchronized our work through GitHub. You can create a user to play around with, as a customer or admin, it's up to you" handleClick={handleClick}/>

                <ProjectCard title='Pets Adopton Website' img_src={pet_adoption} git='https://github.com/YannYiss/pets-website/' demo='https://pets-adoption-website.netlify.app/' desc='A pet adoption website with a mock API' det='This website was made to practice React Router and API consumption. On the home page, you will see all the available pets in the API, or you can filter by type of pet by clicking on the navlinks. You will see some real-life picture and some fake ones, if you click on a real-life pet, you will be taken to the pet details, while the fake ones will redirect you from the detials page to an error page. It also has a search feature to search by pet name.' handleClick={handleClick}/>

                <ProjectCard title='Jamming with Spotify' img_src={jamming} git='https://github.com/YannYiss/Jamming' demo='https://jammingwithspotify.netlify.app' desc='Create a playlist and add it to your Spotify account' det='This a completley functional project that let you create a playlist and save it to your spotify account. It was made with React and connected with the Spotify API. Spotify requires to have the user who wants to log in previously registered in the app to get access to it (as it is in dev mode), so you can give it a try by using the following user: user: trymyapps_nico@outlook.com / password: tryitout123*, you can also drop me a message in the contact page if you want to get registered in the app to try it with your own account ;)' handleClick={handleClick}/>

                <ProjectCard title='Jamming V2.0' img_src={jammingv2} git='https://github.com/YannYiss/JammingV2.0' demo='https://jammingwithspotifyv2.netlify.app' desc='New and improved version of the Jamming app' det='This is a built-from-scratch new Jamming app with some new features and improved architecture, as it was intended to use a React container/presentational components approach and CSS modules. Same as the previous Jamming app, it is a completley functional project that let you create a playlist and save it to your spotify account. Spotify requires to have the user who wants to log in previously registered in the app to get access to it (as it is in dev mode), so you can give it a try by using the following user: user: trymyapps_nico@outlook.com / password: tryitout123*, you can also drop me a message in the contact page if you want to get registered in the app to try it with your own account ;)' handleClick={handleClick}/>

                <ProjectCard title='Appointment Planner' img_src={appointmentPlanner} git='https://github.com/YannYiss/appointment-planner' demo='https://appointmentsplanner.netlify.app/' desc='Applaciton to handle contacts and appointments.' det='This application was developed with React and was made mainly to practice React Router. It has to pages, one to view existing contacts and to register new ones, and one page to view existing appointments and to register new ones, linked to exisitng contacts.' handleClick={handleClick}/>

                <ProjectCard title='Projects Portfolio' img_src={portfolio} git='https://github.com/YannYiss/Portfolio' demo='https://me-nico.netlify.app/' desc='Right where you are right now!' det="There's not much that I can say about this project as you have been interacting with it already, so I just wanted to share with you the git link so you can take a look under the hood. I used React for this project as well as some new concepts recently learned: lazy loading and code splitting. This project will keep updating as new projects get developed enough to be showcased. Currently, I'm working on the responsive version, which will be deployed shortly." handleClick={handleClick}/>

            </XyzTransitionGroup>
        </main>
    )
}