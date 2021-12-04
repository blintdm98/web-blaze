import React from "react";


export default function Contact(){
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
            <div className="ellipse1"></div>
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
                <div className="box-2">
                    <form>
                        <label className="dropDown">
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