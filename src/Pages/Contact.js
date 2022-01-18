import React from "react";

import uploadimage from "./Images/uploadImage.svg";
import uploadvector from "./Images/uploadVector.svg";
import list from "./Images/list.svg";
import downvector from "./Images/downvector.svg";
import tel from "./Images/tel.svg";
import pipe from "./Images/pipe.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

// export default function Contact(){
    export default class Contact extends React.Component {
    
        state={
            subject:''
        };
    
    handleChange(event) {
        this.setState({ subject: document.getElementById("subject").value });
        // console.log(this.state);
      }
    componentDidMount(){
        const pipeIcon = document.querySelector('.pipeIcon');
        const pipe = document.querySelector('.pipeArea');
        const contactText = document.querySelector('.contactText');
        const inputNumber = document.querySelector('.inputNumber');
        const phoneScript = document.querySelector('.phoneScript');
        let pipeinout = false;

        const openPhone = function(){
            if(!pipeinout){
                pipeIcon.classList.remove('hidden');
                contactText.classList.add('hidden');
                inputNumber.classList.remove('hidden');
                phoneScript.style.border = '2px solid var(--green)';
                pipeinout = true;
            }
            else{
                pipeIcon.classList.add('hidden');
                contactText.classList.remove('hidden');
                inputNumber.classList.add('hidden');
                phoneScript.style.border = 'none';
                pipeinout = false;

            }
        }
        pipe.addEventListener('click', openPhone);
    }
render(){
    return (
        <body>
            {/* <div className="bgGradient"></div> */}
            {/* <div className="bgGradient1"></div> */}
            {/* <div className="ellipse5"></div> */}
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
            <div className="ellipse1 hidden"></div>
            <section className="contact container">
                <div className="box-1">
                    <h1>Need answers?</h1>
                    <h2>Feel free contact to us!</h2>
                    <p>
                    If you are thinking about an upgrade
                    to your brand and business feel free to contact us.
                    </p>
                    <p>
                    We are open from Monday to Friday between 08:00 - 20:00 
                    and on Saturday 10:00 - 14:00
                    </p>
                </div>
                <div className="box-2 bgtrans">
                    <form className="bgtrans">
                        <label className="dropDown bgtrans">
                            <div className="bgtrans">Subject</div>
                            <select id="subject" className="bgtrans" onChange={ this.handleChange.bind(this) }>
                                <option value="public">Public Relations</option>
                                <option value="branding">Branding/Marketing</option>
                                <option value="public">Web design & development</option>
                                <option value="public">Software development</option>
                                <option value="business">Business consulting</option>
                                <option value="public">Customer service</option>
                            </select>
                        </label>
                        {this.state.subject === "business" ? (
                        //business value
                        <div className="bgtrans public">
                            <label className="bgtrans">
                                <div className="bgtrans">Full name</div>
                                <input type="text" name="name" placeholder="full name" className="bgtrans"/>
                            </label>
                            <label className="bgtrans">
                            <div className="bgtrans">Email</div>
                            <input className="bgtrans" type="text" name="email" placeholder="email"/>
                            </label>
                            <label className="bgtrans">
                            <div className="bgtrans">Business name</div>
                            <input className="bgtrans" type="text" name="businessname" placeholder="business name"/>
                            </label>
                            <span className="bgtrans block">Forms</span>
                            <div className="bgtrans plans">
                                <div className="plansbox">
                                    <span className="bgtrans">Business Plan</span>
                                    <div className="bgtrans plansgrid">
                                        <img src={list} alt="list" className="list"/>
                                        <img src={downvector} alt="downvector" className="planvectors"/>
                                    </div>
                                </div>
                                <div className="plansbox">
                                    <span className="bgtrans">Financiar Plan</span>
                                    <div className="bgtrans plansgrid">
                                        <img src={list} alt="list" className="list"/>
                                        <img src={uploadvector} alt="uploadvector" className="planvectors"/>
                                    </div>
                                </div>
                            </div>
                        </div>) : (
                            //branding value
                            this.state.subject === "branding" ? (
                            <div className="bgtrans public">
                                <label className="bgtrans">
                                    <div className="bgtrans">Full name</div>

                                    <input type="text" name="name" placeholder="full name" className="bgtrans"/>
                                </label>
                                <label className="bgtrans">
                                <div className="bgtrans">Email</div>
                                <input className="bgtrans" type="text" name="email" placeholder="email"/>
                                </label>
                                <label className="bgtrans">
                                <div className="bgtrans">Business name</div>
                                <input className="bgtrans" type="text" name="businessname" placeholder="business name"/>
                                </label>
                                <div className="bgtrans branMarkdown">
                                    <label className="bgtrans websiteUrl">
                                    <div className="bgtrans">Website url</div>
                                    <input className="bgtrans" type="text" name="weburl" placeholder="website url"/>
                                    </label>
                                    <label className="bgtrans socialmediaUrl">
                                    <div className="bgtrans">Social Media url</div>
                                    <input className="bgtrans" type="text" name="socialmedia" placeholder="social media url"/>
                                    </label>
                                    <label className="bgtrans files">
                                        <div className="bgtrans">Files</div>
                                        <div className="bgtrans fileUpload">
                                            <label className="bgtrans fileUploadlabel">
                                                <span className="bgtrans uploadsspan">Logo/Mockup</span>
                                                <img  className="bgtrans imgFirst" src={uploadimage} alt={uploadimage}/>
                                                <img src={uploadvector} alt={uploadvector} className="bgtrans imgSecond"/>
                                            </label>
                                        </div>
                                    </label>
                                </div>
                            </div>) : (
                            //public value
                            <div className="bgtrans public">
                                <label className="bgtrans">
                                    <div className="bgtrans">Full name</div>

                                    <input type="text" name="name" placeholder="full name" className="bgtrans"/>
                                </label>
                                <label className="bgtrans">
                                <div className="bgtrans">Email</div>
                                <input className="bgtrans with-border" type="text" name="email" placeholder="email"/>
                                </label>
                                <div className="bgtrans">Message</div>
                                <textarea className="bgtrans" placeholder="text..."></textarea>
                            </div>
                        ))
                        }
                        <div className="formButtons bgtrans">
                            <button className="reCaptcha"><b>reCaptcha</b></button>
                            <div className="phoneCall bgtrans">
                                <div className="phoneScript bgtrans">
                                    <div className="pipeArea">
                                        {/* <img src={pipe} alt="pipe"/> */}
                                        <FontAwesomeIcon icon={faCheck} className="pipeIcon hidden"></FontAwesomeIcon>
                                    </div>
                                    <div className="phone bgtrans">
                                        <span className="bgtrans contactText">Contact me by phone call</span>
                                        <div className="bgtrans inputNumber hidden">
                                            <img src={tel} alt="tel" className="bgtrans"/>
                                            <span className="bgtrans">+40</span>
                                            <input className="bgtrans" type="text" name="phone" placeholder="745678910"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btnSend btnProp">Send</button>
                        </div>
                    </form>
                
                </div>
            </section>
        </body>
    )
    }
}