import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Hero from '../Views/Hero';
import Know_me from '../Views/Know-me/';

export default function Routes() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Hero}/>
                <Route exact path ='/know-me' component={Know_me}/>
            </Switch>
        </Router>
    )
}
