import React from 'react';


import slide1icon from "./Images/slide1iconimage.png";
import slide2icon from "./Images/slide2iconimage.png";
import slide3icon from "./Images/slide3iconimage.png";
import slide4icon from "./Images/slide4iconimage.png";
import slide5icon from "./Images/slide5iconimage.png";
import slide6icon from "./Images/slide6iconimage.png";
import slide7icon from "./Images/slide7iconimage.png";
import iconimage8 from "./Images/iconimage8.png";
import iconimage9 from "./Images/iconimage9.png";





export default function Development(){
  return (
    <div>
        <div className="bgGradient"></div>
            <div className="bgGradient1"></div>
            {/* <div className="ellipse5"></div> */}
            <div className="rectangle5"></div>
            <div className="ellipse42"></div>
            <div className="ellipse12"></div>
            <div className="ellipse10"></div>
            <div className="ellipse7"></div>
            <div className="ellipse4"></div>
            <div className="ellipse11"></div>
            <div className="ellipse13"></div>
            <div className="ellipse9"></div>
            <div className="ellipse8"></div>
            <div className="ellipse6"></div>
            <div className="ellipse3"></div>
            <div className="ellipse2"></div>
            <div className="ellipse1"></div>
            <div className="ellipse51"></div>
            <div className="ellipse47"></div>
            <div className="ellipse48"></div>
            <div className="ellipse57"></div>
        <section className="container">
            <div className="partTitle priceTitle">
                <h1>Web and Soft development</h1>
                <p>The storys we told!</p>
            </div>
        </section>
        <section className="testemonials container">
            <div className="bgOp2">
                <div className="gradient">
                    <h2 className="pricingTitles bgtrans">Our Projects</h2>
                    <div className="bgtrans projects"></div>
                    <p className="bgtrans">“Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Neque tempor vitae aliquam est pellentesque.
                    Urna ultrices ornare imperdiet tortor in aliquam.”</p>
                </div>
            </div>
            <h2>Web development</h2>
            <p className="wdPara">
            Our main goal is to show people the real potential
            and usage of a web platform. A digital platform can elevate any business to an another level. It gives credibility,
            it showns professionism and is a great boost to brand awerness.
            </p>
            <div className="wdBoxes">
                <div>
                    <h2>Web design</h2>
                    <p>Web design is a very 
                    important aspect that has to be on point...</p>
                </div>
                <img src={slide1icon} alt="wb1icon"/>
            </div>
            <div className="wdBoxes">
                <div>
                    <h2>E-commerce</h2>
                    <p>Web design is a very 
                    important aspect that has to be on point...</p>
                </div>
                <img src={slide4icon} alt="wb2icon"/>
            </div>
            <div className="wdBoxes">
                <div>
                    <h2>Blog & Portfolios</h2>
                    <p>Web design is a very 
                    important aspect that has to be on point...</p>
                </div>
                <img src={iconimage8} alt="wb3icon"/>
            </div>
            <div className="wdBoxes">
                <div>
                    <h2 className="centerH2">Softwer development</h2>
                    <p>In this rushing hyped up world you need to stay focused on things that realy matter!
                         Catch a break with systems that can take over trivial tasks</p>
                </div>
            </div>
            <div className="wdBoxes">
                <div>
                    <h2>ERP</h2>
                    <p>Web design is a very 
                    important aspect that has to be on point...</p>
                </div>
                <img src={slide6icon} alt="wb4icon"/>
            </div>
            <div className="wdBoxes">
                <div>
                    <h2>CRM</h2>
                    <p>Web design is a very 
                    important aspect that has to be on point...</p>
                </div>
                <img src={slide5icon} alt="wb5icon"/>
            </div>
            <div className="wdBoxes">
                <div>
                    <h2>SCM</h2>
                    <p>Web design is a very 
                    important aspect that has to be on point...</p>
                </div>
                <img src={iconimage9} alt="wb6icon"/>
            </div>
            <button className="wdBtn btnProp">Contact us</button>
        </section>
    </div>
        
    );
  
}


