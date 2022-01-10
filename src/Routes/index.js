import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar';
import Hero from '../Views/Hero';
import Know_me from '../Views/Know-me/';

export default function Routes() {
    return (
        <Router>
            <Sidebar/>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Hero}/>
                <Route exact path ='/know-me' component={Know_me}/>
            </Switch>
        </Router>
    )
}
