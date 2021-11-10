import React from "react";
import {Route,BrowserRouter as Router,Switch, Link} from "react-router-dom";
import box1img from "./Images/businessconsultingimg.png";
import box3img from "./Images/businessconsultingimage3.png";
import box2img from "./Images/businessconsultingimage2.png";
import fingericon from "./Images/fingericon.png";
import Business from './Business';


export default function Pricing(){
    return (
        <div>
            <section class="container">
                <div class="partTitle priceTitle">
                    <h1>The Price?</h1>
                    <p>Get in touch so we can figure it out together.</p>
                </div>
            </section>
            <section class="offers">
                <div class="box-1-consulting">
                    We can seperate our offers in three main categories.
                    Pick the one yo are interested in!
                </div>
                <div class="box-2-consulting">
                    <div class="consultingBox">
                        <Link to="/business"><h1  className="cursor">Business Consulting</h1></Link>
                        <p>blablabla</p>
                        <Link to="/business">
                            <img class="firstimg cursor" src={box1img} alt="box1img"/>
                            <img class="secondimg cursor" src={fingericon} alt="fingericon"/>
                        </Link>
                    </div>
                </div>
                <div class="box-3-consulting">
                    <div class="consultingBox">
                        <Link to="/development"><h1 className="cursor">Web & Soft Development</h1></Link>
                        <p>blablabla</p>
                        <Link to="/development"><img class="firstimg cursor" src={box2img} alt="box2img"/>
                        <img class="secondimg cursor" src={fingericon} alt="fingericon"/>
                        </Link>
                    </div>
                </div>
                <div class="box-4-consulting">
                <div class="consultingBox">
                        <Link to="/marketing"><h1 className="cursor">Branding and Marketing</h1></Link>
                        <p>blablabla</p>
                        <Link to="/marketing"><img class="firstimg cursor" src={box3img} alt="box3img"/>
                        <img class="secondimg cursor" src={fingericon} alt="fingericon"/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}