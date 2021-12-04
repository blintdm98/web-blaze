import React from 'react';
// import './App.css';

import fox from "./Images/fox.png";
import instinct from "./Images/instinct.png";
import instagramm from "./Images/instagramm.jpg";
import facebook from "./Images/facebook.jpg";

export default function Marketing(){
  return (
    <div>
            <div className="bgGradient"></div>
            {/* <div className="bgGradient1"></div> */}
            {/* <div className="ellipse5"></div> */}
            <div className="rectangle5"></div>
            <div className="ellipse42"></div>
            {/* <div className="ellipse12"></div> */}
            {/* <div className="ellipse10"></div> */}
            <div className="ellipse7"></div>
            <div className="ellipse4"></div>
            <div className="ellipse11"></div>
            {/* <div className="ellipse13"></div> */}
            {/* <div className="ellipse9"></div> */}
            <div className="ellipse8 marketing8"></div>
            <div className="ellipse6"></div>
            <div className="ellipse3"></div>
            <div className="ellipse2"></div>
            <div className="ellipse1"></div>
      <section className="container">
            <div className="partTitle priceTitle">
                <h1>Branding and Marketing</h1>
                <p>
                  We work together with two amazing companys, 
                  who can bring your story and brand into a new light.
                </p>
            </div>
        </section>
        <section className="testemonials container">
          <div className="bgOp">
            <div className="gradient bgtrans">
              <h2 className="pricingTitles bgtrans">Branding</h2>
              <p className="bgtrans">Fox Studio</p>
              <img src={fox} alt="foxLogo"/>
              <p className="bgtrans">“Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Neque tempor vitae aliquam est pellentesque.
                Urna ultrices ornare imperdiet tortor in aliquam.”
              </p>
            </div>
          </div>
            <div className="bmLogos">
              <img src={facebook} alt="bmFacebook"/>
              <img src={instagramm} alt="bmInstagramm"/>
            </div>
            <h2 className="bmTitle">Marketing</h2>
            <p>Instinct Visuals</p>
            <img src={instinct} alt="instinctLogo"/>
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Neque tempor vitae aliquam est pellentesque.
              Urna ultrices ornare imperdiet tortor in aliquam.”
            </p>
            <div className="bmLogos">
              <img src={facebook} alt="bmFacebook"/>
              <img src={instagramm} alt="bmInstagramm"/>
            </div>
            <button className="bmBtn">Contact us</button>
        </section>
    </div>
        
    );
  
}


