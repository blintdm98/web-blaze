import React from "react";
import box1img from "./Images/businessconsultingimg.png";
import box3img from "./Images/businessconsultingimage3.png";
import box2img from "./Images/businessconsultingimage2.png";
import fingericon from "./Images/fingericon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons';


export default function About(){
    return (
        <body>
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
                        <h1>Business Consulting</h1>
                        <p>blablabla</p>
                        <img class="firstimg" src={box1img} alt="box1img"/>
                        <img class="secondimg" src={fingericon} alt="fingericon"/>
                    </div>
                </div>
                <div class="box-3-consulting">
                    <div class="consultingBox">
                        <h1>Business Consulting</h1>
                        <p>blablabla</p>
                        <img class="firstimg" src={box2img} alt="box2img"/>
                        <img class="secondimg" src={fingericon} alt="fingericon"/>
                    </div>
                </div>
                <div class="box-4-consulting">
                <div class="consultingBox">
                        <h1>Business Consulting</h1>
                        <p>blablabla</p>
                        <img class="firstimg" src={box3img} alt="box3img"/>
                        <img class="secondimg" src={fingericon} alt="fingericon"/>
                    </div>
                </div>
            </section>
        </body>
    )
}