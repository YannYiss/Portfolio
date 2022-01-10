import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar';
import Hero from '../Views/Hero';

export default function Routes() {
    return (
        <Router>
            <Sidebar/>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Hero}/>
            </Switch>
        </Router>
    )
}
