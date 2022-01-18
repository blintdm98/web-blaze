import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";



export default function Development(){
  return (
    <div>
           <div className="bgGradient"></div>
            {/* <div className="bgGradient1"></div> */}
            {/* <div className="ellipse5"></div> */}
            <div className="rectangle5"></div>
            <div className="ellipse42"></div>
            {/* <div className="ellipse12"></div> */}
            {/* <div className="ellipse10"></div> */}
            <div className="ellipse7"></div>
            <div className="ellipse4"></div>
            {/* <div className="ellipse11"></div> */}
            {/* <div className="ellipse13"></div> */}
            {/* <div className="ellipse9"></div> */}
            <div className="ellipse8 businesse8"></div>
            <div className="ellipse6"></div>
            <div className="ellipse3"></div>
            <div className="ellipse2"></div>
            <div className="ellipse1 hidden"></div>
        <section className="businessTitle">
            <div className="partTitle priceTitle">
                <h1>Business Consulting</h1>
                <p>We offer business consulting with specialists that
                   will follow your activity and help you on your jurney to success
                </p>
            </div>
        </section>
        <section className="testemonials container">
          <div className="bgOp1">
            <div className="gradient ">
              <h2 className="bgtrans pricingTitles">Testemonials</h2>
              <div className="bgtrans bcLogo">Somebody logo</div>
              <p className="bgtrans">“Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Neque tempor vitae aliquam est pellentesque.
                  Urna ultrices ornare imperdiet tortor in aliquam.”
              </p>
            </div>
          </div>
        </section>
        <section className="theProcess">
          <h2>The Process</h2>
          <div className="processBox">
            <div className="processBox-1"><p>1</p></div>
            <div className="ikon1"><FontAwesomeIcon  icon={faArrowRight}></FontAwesomeIcon></div>
            <div className="processBox-2">
              <p className="fontforText">
                Everything starts with a request so don’t be afraid to contact us!
                Send us your business information... 
              </p>
            </div>
            <div className="ikon1"><FontAwesomeIcon  icon={faArrowRight}></FontAwesomeIcon></div>
            <div className="processBox-3">
              <p className="fontforText">
                We review your request and analyze your business,
                 after that we contact you.
              </p>
            </div>
            <div className="processBox-4">
              <p>
                2
              </p>
            </div>
            <div className="ikon2"><FontAwesomeIcon  icon={faArrowRight}></FontAwesomeIcon></div>
            <div className="processBox-5 fontforText">
              We arrange a meeting online or offline where one of our specialists
              will explain our findings from the first impression free of charge.
            </div>
            <div className="ikon3"><FontAwesomeIcon  icon={faArrowRight}></FontAwesomeIcon></div>
            <div className="processBox-6 fontforText">
              Than we present our offer for further collaboration.
            </div>
            <div className="processBox-7"><p>3</p></div>
            <div className="ikon4"><FontAwesomeIcon  icon={faArrowRight}></FontAwesomeIcon></div>
            <div className="processBox-8 fontforText">
              In the case we meet an agreement the next step will be the paperwork and contract.
            </div>
            <div className="ikon4"><FontAwesomeIcon  icon={faArrowRight}></FontAwesomeIcon></div>
            <div className="processBox-9 fontforText">
              After that our specialist will be following your
               activity closely for the next period of time.
            </div>
            <div className="processBox-A"><p>4</p></div>
            <div className="ikon4"><FontAwesomeIcon  icon={faArrowRight}></FontAwesomeIcon></div>
            <div className="processBox-B fontforText">
              While we are by your side you will have access to all
              of our and our partners programs and tools to develope
              yourself and your business.
              At the same time you become automaticly a member
              of the “Constellation” business club where you can form 
              B2B connections and be part of our monthly gatherings.
            </div>
            <div className="processBox-C">
              <button className="btnProp"><p>Contact us</p></button>
            </div>
          </div>
        </section>
    </div>
        
    );
  
}
