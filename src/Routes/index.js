import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from '../Components/Navbar';
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop';
import Loading from '../Views/Loading';

const Hero = lazy(() => import('../Views/Hero'));
const Know_me = lazy(() => import('../Views/Know-me'));
const Projects = lazy(() => import('../Views/Projects'));
const Contact = lazy(() => import('../Views/Contact'));

export default function Routes() {
    return (
        <Router>
            <Navbar/>
            <ScrollToTop/>
            <Suspense fallback={<Loading/>}>
                <Switch>
                    <Route exact path='/' component={Hero}/>
                    <Route exact path ='/know-me' component={Know_me}/>
                    <Route exact path='/projects' component={Projects}/>
                    <Route exact path='/contact' component={Contact}/>
                </Switch>
            </Suspense>
        </Router>
    )
}
