import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Thread from "./pages/Thread";
import MentorLogin from './pages/MentorLogin';
import MentorBoard from './pages/MentorBoard'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/thread" component={Thread} />
        <Route path="/mentorlogin" component={MentorLogin}/>
        <Route path="/mentorboard" component={MentorBoard}/>

      </Switch>
    </BrowserRouter>
  );
}
