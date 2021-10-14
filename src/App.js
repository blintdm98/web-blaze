import React from 'react';
import './App.css';
import {Route,BrowserRouter as Router,Switch, Link} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from "./Pages/Contact";
import Pricing from "./Pages/Pricing";
import logo1 from "./Pages/Images/logo1.jpg"
import logo2 from "./Pages/Images/logo2.jpg"




function App() {
  return (
    <Router>
        <header id="main-header">
          <nav class="container flex-container">
            <div class="logo"><Link to="/"><img src={logo1} alt="logo1" /></Link></div>
            <ul class="main-menu flex-container">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li> 
              <li><Link to="/contact">Contact</Link></li> 
              <li><Link to="/pricing">Pricing</Link></li> 
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/contact" component={Contact}/>
          <Route path="/pricing" component={Pricing}/>
          <Route path="/about" component={About}/>
          <Route path="/" component={Home}/>
        </Switch>
        <footer id="main-footer" class="flex-container container">
          <div class="box-1">doboz 1.</div>
          <div class="box-2">doboz 2.</div>
          <div class="box-3">doboz 3.</div>
          <div class="box-4">doboz 4.</div>
          <div class="box-5">doboz 5.</div>
        </footer>
      </Router>
      
      
    
  );
  
}

export default App;
