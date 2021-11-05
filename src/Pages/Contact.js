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
                        <select>
                            <option value="consulting"><Link to="/contact/relations">Public Relations</Link></option>
                            <option value="business">Branding/Marketing</option>
                            <option value="webdesign">Web design & development</option>
                            <option value="development">Software development</option>
                            <option value="relations">Business consulting</option>
                            <option value="service">Costumer service</option>
                        </select>
                        {/* <Switch>
                            <Route path="/relations" component={Relations}/>
                        </Switch> */}
                    </label>
                    <label>

                    </label>
                    <input type="submit" value="Submit" />
                </form>
                
                </div>
            </section>
        </body>
    )
}