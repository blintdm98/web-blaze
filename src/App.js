import React from 'react';
import './App.css';
import {Route,BrowserRouter as Router,Switch, Link} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from "./Pages/Contact";
import Pricing from "./Pages/Pricing";
import Business from "./Pages/Business";
import Development from "./Pages/Development";
import Marketing from "./Pages/Marketing";
import logo1 from "./Pages/Images/logo1.jpg"
import logo2 from "./Pages/Images/logo2.png"
import google from "./Pages/Images/google.jpg"
import instagramm from "./Pages/Images/instagramm.jpg"
import facebook from "./Pages/Images/facebook.jpg"
import whatsapp from "./Pages/Images/whatsapp.jpg"
import linkedin from "./Pages/Images/linkedin.jpg"
import promLogo from "./Pages/Images/promLogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faHome, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';




function App() {

  // window.onload = function () {
  //   document.querySelector('.home').addEventListener('click', function(){
  //     window.location.reload();
  //     console.log('alma');
  //   });
  // }
  return (
    <Router>
        <header id="main-header">
          <nav class="container flex-container">
            <div class="logo"><Link to="/"><img src={logo1} alt="logo1" /></Link></div>
            <ul class="main-menu flex-container">
              <li className="home"><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li> 
              <li><Link to="/contact">Contact</Link></li> 
              <li><Link to="/pricing">Pricing</Link></li> 
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/marketing" component={Marketing}/>
          <Route path="/development" component={Development}/>
          <Route path="/business" component={Business}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/pricing" component={Pricing}/>
          <Route path="/about" component={About}/>
          <Route path="/" component={Home}/>
        </Switch>
        <footer id="main-footer">
          <div className="container">
            <div class="box-1">
              <img src={logo2} alt="logo2"/>
            </div>
            <div class="box-2">
              <h3>Contact</h3>
              <div>
                <p><FontAwesomeIcon icon={faAt}></FontAwesomeIcon>info@web-blaze.ro</p>
                <p><FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>0727320140</p>
                <p><FontAwesomeIcon icon={faHome}></FontAwesomeIcon>Romania, Targu-Mures</p>
              </div>
            </div>
            <div class="box-3">
              <h3>Check us out on</h3>
              <p>
                <img src={google} alt="googleLogo"/>
                <img src={whatsapp} alt="whatsappLogo"/>
              </p>
              <p>
                <img src={facebook} alt="facebookLogo"/>
                <img src={instagramm} alt="instagrammLogo"/>
                <img src={linkedin} alt="linkedinLogo"/>
              </p>
            </div>
            <div class="box-4">
              <p>Privacy settings</p>
              <p>Terms & conditions</p>
              <p>Help</p>
            </div>
            <div class="box-5">
              <p>Check out our social project</p>
              <img src={promLogo} alt="promLogo"/>
            </div>
          </div>
          <div class="container"><span class="copyright">COPYRIGHT © 2021 WEB-BLAZE ALL RIGHTS RESERVED</span></div>
          
        </footer>
      </Router>
    );
  
}

export default App;
