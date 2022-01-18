import React from "react";
import './pages.css';
import elipse from "./Images/ellipse39.jpg";
import logo3 from "./Images/logo3.png";
import founderImage from "./Images/Rectangle24.png";

export default function About(){
    return (
        <body>
            <div className="bgGradient"></div>
            <div className="bgGradient1"></div>
            {/* <div className="ellipse5"></div> */}
            <div className="rectangle5"></div>
            <div className="ellipse42"></div>
            <div className="ellipse12"></div>
            <div className="ellipse10"></div>
            <div className="ellipse7"></div>
            <div className="ellipse4"></div>
            <div className="ellipse11 hidden"></div>
            <div className="ellipse13"></div>
            <div className="ellipse9"></div>
            <div className="ellipse8"></div>
            <div className="ellipse6"></div>
            <div className="ellipse3"></div>
            <div className="ellipse2"></div>
            <div className="ellipse1 hidden"></div>
            <section className="container">
            <div className="partTitle">
                <h1>Web Blaze</h1>
                <p>The Story about the company and the team behind it.</p>
            </div>
            </section>
            <section className="container founding">
                <div className="box">
                    <p>   Web Blaze was founded in 2020 in the midst of the pandemic caused by Covid-19,
                    by an aspiring young boy, who wished to help the community of local businesses to endure this period.
                    </p>
                </div>
                <div className="box">
                    <img src={elipse} alt={elipse}/>
                </div>
                <div className="box">
                    <p>
                        It was a harsh start, but their success was imminent.
                        Today our company has a great team, new ideas and perspectives 
                        and we befriended great entreprenuers and formed collaborations
                        with many other companys on our way.
                    </p>
                </div>
            </section>
            <section className="container aboutLogo">
                <div className="box">
                    <h1>The logo.</h1>
                    <p>
                        In our minimalist flame
                     three colors are present:  
                     <span className="green"> Green</span>,<span className="skyblue"> sky blue </span>
                       and <span className="yellow"> yellow </span>
                      each of these colors have a 
                     specific set of meanings:
                     <span className="green"> Growth</span>,
                     <span className="green"> Harmony</span>,
                     <span className="green"> Stability</span>,
                     <span className="green"> Reliability</span>,
                     <span className="green"> Balance</span>,
                     <span className="skyblue"> Freedom</span>,
                     <span className="skyblue"> Self Expression</span>,
                     <span className="skyblue"> Trustworth</span>,
                     <span className="skyblue"> Wisdom</span>,
                     <span className="skyblue"> Joy</span>, 
                     <span className="yellow"> Enthusiasm</span>, 
                     <span className="yellow"> Opportunity</span>, 
                     <span className="yellow"> Spontanity</span>, 
                     <span className="yellow"> Positivity</span>, 
                     <span className="yellow"> Happiness</span>. 
                    </p>
                </div>
                <div className="box"><img src={logo3} alt="logo3"/></div>
                <div className="box">
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
            <section className="success">
                <div className="successTitle">
                    <h1>For your blazing success!</h1>
                </div>
                <div className="team container">
                    <div className="team-box-1">
                        <h1>The Founder</h1>
                        <h2>The man who started the fire!</h2>
                    </div>
                    <div className="team-box-2">
                        <img src={founderImage} alt="founder"/>
                    </div>
                    <div className="team-box-3">
                        <h1>Horvát Norbert</h1>
                        <h2>Founder and CEO of Web Blaze</h2>
                    </div>
                    <div className="team-box-4">
                        <h1>The Blazing Team</h1>
                        <h2>The Team that take care of your blazing path to success!</h2>
                    </div>
                    {/* <div className="team-box-5">kep</div> */}
                </div>
            </section>
        </body>
        
    )
}