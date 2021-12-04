import React from "react";
import {Route,BrowserRouter as Router,Switch, Link} from "react-router-dom";
import box1img from "./Images/businessconsultingimg.png";
import box3img from "./Images/businessconsultingimage3.png";
import box2img from "./Images/businessconsultingimage2.png";
import fingericon from "./Images/fingericon.png";



export default function Pricing(){
    return (
        <div>
            <div className="rectangle5"></div>
            <div className="ellipse42"></div>
            {/* <div className="ellipse12"></div> */}
            {/* <div className="ellipse10"></div> */}
            {/* <div className="ellipse7"></div> */}
            <div className="ellipse4"></div>
            {/* <div className="ellipse11"></div> */}
            {/* <div className="ellipse13"></div>
            <div className="ellipse9"></div> */}
            {/* <div className="ellipse8"></div>
            <div className="ellipse6"></div> */}
            {/* <div className="ellipse3"></div> */}
            <div className="ellipse2"></div>
            <div className="ellipse1"></div>
            <section className="container">
                <div className="partTitle priceTitle">
                    <h1>The Price?</h1>
                    <p>Get in touch so we can figure it out together.</p>
                </div>
            </section>
            <section className="offers">
                <div className="box-1-consulting bgtrans">
                    We can seperate our offers in three main categories.
                    Pick the one yo are interested in!
                </div>
                <div className="box-2-consulting">
                    <div className="consultingBox">
                        <Link to="/business"><h1  className="cursor">Business Consulting</h1></Link>
                        <p>blablabla</p>
                        <Link to="/business">
                            <img className="firstimg cursor" src={box1img} alt="box1img"/>
                            <img className="secondimg cursor" src={fingericon} alt="fingericon"/>
                        </Link>
                    </div>
                </div>
                <div className="box-3-consulting">
                    <div className="consultingBox">
                        <Link to="/development"><h1 className="cursor">Web & Soft Development</h1></Link>
                        <p>blablabla</p>
                        <Link to="/development"><img className="firstimg cursor" src={box2img} alt="box2img"/>
                        <img className="secondimg cursor" src={fingericon} alt="fingericon"/>
                        </Link>
                    </div>
                </div>
                <div className="box-4-consulting">
                <div className="consultingBox">
                        <Link to="/marketing"><h1 className="cursor">Branding and Marketing</h1></Link>
                        <p>blablabla</p>
                        <Link to="/marketing"><img className="firstimg cursor" src={box3img} alt="box3img"/>
                        <img className="secondimg cursor" src={fingericon} alt="fingericon"/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}