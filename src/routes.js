import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About'
import Profile from './pages/Profile'
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/about" component={About} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </BrowserRouter>
    );
}
