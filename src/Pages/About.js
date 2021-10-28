import React from "react";
import './pages.css';
import elipse from "./Images/ellipse39.jpg";
import logo3 from "./Images/logo3.png";
import founderImage from "./Images/Rectangle24.png";

export default function About(){
    return (
        <body>
            <section class="container">
            <div class="partTitle">
                <h1>Web Blaze</h1>
                <p>The Story about the company and the team behind it.</p>
            </div>
            </section>
            <section class="container founding">
                <div class="box">
                    <p>   Web Blaze was founded in 2020 in the midst of the pandemic caused by Covid-19,
                    by an aspiring young boy, who wished to help the community of local businesses to endure this period.
                    </p>
                </div>
                <div class="box">
                    <img src={elipse} alt={elipse}/>
                </div>
                <div class="box">
                    <p>
                        It was a harsh start, but their success was imminent.
                        Today our company has a great team, new ideas and perspectives 
                        and we befriended great entreprenuers and formed collaborations
                        with many other companys on our way.
                    </p>
                </div>
            </section>
            <section class="container aboutLogo">
                <div class="box">
                    <h1>The logo.</h1>
                    <p>
                        In our minimalist flame
                     three colors are present: 
                     Green, sky blue and yellow
                     each of these colors have a 
                     specific set of meanings:
                     Growth, Harmony, Stability, Reliability, Balance, 
                     Freedom, Self Expression, 
                     Trustworth, Wisdom, Joy, 
                     Enthusiasm, Opportunity, 
                     Spontanity, Positivity, 
                     Happiness.
                    </p>
                </div>
                <div class="box"><img src={logo3} alt="logo3"/></div>
                <div class="box">
                    <p>
                            We try to live by these 
                        qualities and share them 
                        each and every day. 
                        And of course the fire...
                        The symbol of power, 
                        energy, knowledge and 
                        ambition. We have 
                        conquered the blaze and 
                        now we use it to ascend you 
                        and your business to a next 
                        level.
                    </p>
                
                </div>
            </section>
            <section class="success">
                <div class="successTitle">
                    <h1>For your blazing success!</h1>
                </div>
                <div class="team container">
                    <div class="team-box-1">
                        <h1>The Founder</h1>
                        <h2>The man who started the fire!</h2>
                    </div>
                    <div class="team-box-2">
                        <img src={founderImage} alt="founder"/>
                    </div>
                    <div class="team-box-3">
                        <h1>Horvát Norbert</h1>
                        <h2>Founder and CEO of Web Blaze</h2>
                    </div>
                    <div class="team-box-4">
                        <h1>The Blazing Team</h1>
                        <h2>The Team that take care of your blazing path to success!</h2>
                    </div>
                    <div class="team-box-5">kep</div>
                </div>
            </section>
        </body>
        
    )
}