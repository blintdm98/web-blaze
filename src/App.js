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
import logo1 from "./Pages/Images/logo1.jpg";
import logo2 from "./Pages/Images/logo2.svg";
import google from "./Pages/Images/google.svg";
import instagramm from "./Pages/Images/instagramm.svg";
import facebook from "./Pages/Images/facebook.svg";
import whatsapp from "./Pages/Images/whatsapp.svg";
import linkedin from "./Pages/Images/linkedin.svg";
import promLogo from "./Pages/Images/promLogo.svg";
import email from "./Pages/Images/email.svg";
import tel from "./Pages/Images/tel.svg";
import address from "./Pages/Images/address.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




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
          <div className="container boxes">
            <div class="box-1 boxPadding">
              <img src={logo2} alt="logo2"/>
            </div>
            <div class="box-2 boxPadding">
              <h3 className="contactTitle">Contact</h3>
              <div className="footerContact">
                <p><img src={email} alt="email"/>info@web-blaze.ro</p>
                <p><img src={tel} alt="tel"/>0727320140</p>
                <p><img src={address} alt="address"/>Romania, Targu-Mures</p>
              </div>
            </div>
            <div className="box-3 boxPadding">
              <h3 className="check">Check us out <br/>on</h3>
              <p>
                <a href="https://g.page/web-blaze-romania?share"><img src={google} alt="googleLogo"/></a>
                <a><img src={whatsapp} alt="whatsappLogo"/></a>
              </p>
              <p>
                <a href="https://www.facebook.com/webblaze.romania/">
                  <img src={facebook} alt="facebookLogo"/>
                </a>
                <a href="https://www.instagram.com/webblaze.romania/"><img src={instagramm} alt="instagrammLogo"/></a>
                <a href="https://www.linkedin.com/company/web-blaze"><img src={linkedin} alt="linkedinLogo"/></a>                                
              </p>
            </div>
            <div className="box-4 boxPadding">
              <p>Privacy settings</p>
              <p>Terms & conditions</p>
              <p>Help</p>
            </div>
            <div className="box-5 boxPadding">
              <p>Check out our social project</p>
              <img src={promLogo} alt="promLogo"/>
            </div>
          </div>
          <div className="container"><span className="copyright">COPYRIGHT © 2021 WEB-BLAZE ALL RIGHTS RESERVED</span></div>
          
        </footer>
      </Router>
    );
  
}

export default App;
