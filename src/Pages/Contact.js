import React from "react";
import {Route,BrowserRouter as Router,Switch, Link} from "react-router-dom";


export default function About(){
    return (
        <body>
            <section class="contact container">
                <div class="box-1">
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
                <div class="box-2">
                    <form>
                        <label class="dropDown">
                            <div>Subject</div>
                            <select>
                                <option value="consulting">Public Relations</option>
                                <option value="business">Branding/Marketing</option>
                                <option value="webdesign">Web design & development</option>
                                <option value="development">Software development</option>
                                <option value="relations">Business consulting</option>
                                <option value="service">Costumer service</option>
                            </select>
                        </label>
                        <label>
                             <div>Full name</div>
                             <input type="text" name="name" placeholder="full name"/>
                        </label>
                        <label>
                            <div>Email</div>
                            <input type="text" name="email" placeholder="email"/>
                        </label>
                        <div>Message</div>
                        <textarea placeholder="text...">
                            
                        </textarea>
                        <div className="formButtons">
                            <button className="reCaptcha"><b>reCaptcha</b></button>
                            <div className="phoneCall">
                                <input type="checkbox" id="phone" value="phoneCall" className="pipe"/>
                                <label for="phone">Contact me by phone call</label>
                            </div>
                            <button type="submit" className="btnSend">Send</button>
                        </div>
                    </form>
                
                </div>
            </section>
        </body>
    )
}