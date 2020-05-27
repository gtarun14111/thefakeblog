import React from 'react';
import './App.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Blogpost from '../Blogpost/Blogpost';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import BlogAdder from '../BlogAdder/BlogAdder';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  	<Router>  	
    <div className="App">
    <Switch>

    <Route path="/">
    	<NavigationBar />
    	<Switch>
    	<Route exact path = "/">
    	<Home />
    	</Route>
    	<Route path = "/Blogpost">
    	<Blogpost />
    	</Route>
    	</Switch>
    	<Footer />
    </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;

     