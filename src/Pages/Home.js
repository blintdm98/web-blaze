import React from "react";

import './pages.css';
import { BrowserRouter as Link } from "react-router-dom";
import image1 from "./Images/image1_.png";
import image2 from "./Images/image2_.png";
import image3 from "./Images/image3_.png";
import slide1bg from "./Images/slide1bgimage.jpg";
import slide2bg from "./Images/slide2bgimage.jpg";
import slide3bg from "./Images/slide3bgimage.jpg";
import slide4bg from "./Images/slide4bgimage.jpg";
import slide5bg from "./Images/slide5bgimage.jpg";
import slide6bg from "./Images/slide6bgimage.jpg";
import slide7bg from "./Images/slide7bgimage.jpg";
import slide1icon from "./Images/slide1iconimage.png";
import slide2icon from "./Images/slide2iconimage.png";
import slide3icon from "./Images/slide3iconimage.png";
import slide4icon from "./Images/slide4iconimage.png";
import slide5icon from "./Images/slide5iconimage.png";
import slide6icon from "./Images/slide6iconimage.png";
import slide7icon from "./Images/slide7iconimage.png";
import learnMore from "./Images/Learn more.svg";
import vector from "./Images/Vector.svg";
import slidervectorL from "./Images/slidervectorLeft.svg";
import slidervectorR from "./Images/slidervectorRight.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination]);



// export default function Home() {
    export default class Home extends React.Component {
        componentDidMount(){     
        const slides = document.querySelectorAll('.slide');
        const btnLeft = document.querySelector('.slider__btn--left');
        const btnRight = document.querySelector('.slider__btn--right');
        const dotContainer = document.querySelector('.dots');

        let curSlide = 0;
        let maxSlide = slides.length;

        const createDots = function(){
            slides.forEach(function(_,i){
              dotContainer.insertAdjacentHTML('beforeend',
              `<button class="dots__dot" data-slide ="${i}"></button>`)
            });
          }
          
          createDots();

          const activateDot = function(slide){
            document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
  
            document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
          }
  
          activateDot(0);

        const goToSlide = function (slide) {
            slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`);
        }

        goToSlide(0);

        //next slide
        const nextSlide = function () {
            if (curSlide === maxSlide - 1) {
                curSlide = 0;
            }
            else {
                curSlide++;
            }
            goToSlide(curSlide);
            activateDot(curSlide);
        }
        const prevSlide = function () {
            if (curSlide === 0) {
                curSlide = maxSlide - 1;
            }
            else {
                curSlide--;
            }
            goToSlide(curSlide);
            activateDot(curSlide);
        }

        btnRight.addEventListener('click', nextSlide);
        btnLeft.addEventListener('click', prevSlide);

        document.addEventListener('keydown', function(e){
            if(e.key === 'ArrowLeft'){
              prevSlide();
            }
            e.key === 'ArrowRight' && nextSlide();
          });

          dotContainer.addEventListener('click', function(e){
            if(e.target.classList.contains('dots__dot')){
              const { slide } = e.target.dataset;
              goToSlide(slide);
              activateDot(slide);
            }
          });
    }
    render(){
    return (
        <body>
                <div className="rectangle5"></div>
            <section id="contactUs" className="container">
                <div className="flex-container noWorry">
                    <div className="box">
                        <span>/* No worries */ </span>
                        <br/>Just leave it <br /> to us!
                        <div className="btnContactus">
                            <a href="/contact">
                                <button className="btnProp">
                                    <span>Contact us</span>
                                </button>
                            </a>
                            <p>For your<span className="blazing"> Blazing </span>succes!</p>
                        </div>
                    </div>
                    <div className="box bgtrans">
                            <img src={image1} alt="img1" />
                            <img src={image2} alt="img2" />
                            <img src={image3} alt="img3" />
                    </div>
                </div>
                <button className="learnMore bgtrans">
                    <a href="#swiper">
                        <span>
                            <img src={learnMore} alt="learnmore"/>
                            <img src={vector} alt="vector" className="vector"/>
                            {/* Learn more
                            <div><FontAwesomeIcon icon={faArrowAltCircleDown}></FontAwesomeIcon></div> */}
                        </span>
                    </a>
                </button>
            </section>
            <section id="ourBelief">
                <div className="flex-container container">
                    <div className="box bgtrans ">
                        <h1 className="bgtrans">Our "Code"</h1>
                        <p className="bgtrans firstP">We believe that <span>your business</span> presence on the World Wide Web is crucial for your <span>success. </span>
                            It represents and advertises the quality you want to provide.</p>
                        <p className="bgtrans firstP">That's why we are looking after <span>the flames</span> of <span>your ambition</span> and to illuminate the path to <span>success!</span></p>
                    </div>
                    <div className="box"></div>
                </div>
            </section>
            <section id="howDowe">
                <div className="flex-container container">
                    <div className="box"></div>
                    <div className="box bgtrans">
                        <h1 className="bgtrans">How do we do that?</h1>
                        <p className="bgtrans">Very Simple!</p>
                        <p className="bgtrans firstP">With great <span>quality</span>, <span>trending</span>, and <span>modern</span> websites, that integrate themselves perfectly in your brand, expanding it to a new level at the same time.</p>
                        <p className="bgtrans firstP"><span>We tell a story</span>, the story of your brand, your business and your <span>Succes!</span></p>
                    </div>
                </div>
            </section>
            <div className="slider container bgtrans" id="swiper">
                <div className="slide slide1 bgtrans">
                    <div className="box bgtrans">
                        <h1 className="bgtrans">Web Design</h1>
                        <p className="bgtrans sliderPar">Web design is much more than creating a design that is fresh and appealing.
                            Any website that is to become successful as a sales and marketing tool needs to be intuitive and easy-to-use for the first time and recurrent visitors.
                        </p>
                    </div>
                    <div className="box">
                        <div>
                            <img src={slide1icon} alt="slide1icon" />
                                <button className="btnProp">
                                        Get an offer
                                </button>
                            
                        </div>
                        
                        <img src={slide1bg} alt="slide1bg" />
                    </div>
                </div>

                <div className="slide slide1 bgtrans">
                <div className="box bgtrans">
                            <h1 className="bgtrans">Business Consulting</h1>
                            <p className="bgtrans sliderPar">We offer high quality modular business consulting that helps with every aspect of administration, business and brand growth, marketing, general and human resource management. We also offer general business growth consulting in two modules and business evaluation.</p>
                        </div>
                        <div className="box">
                            <div>
                                <img src={slide2icon} alt="slide2icon"/>
                                <button className="btnProp">
                                        Get an offer
                                </button>
                            </div>
                            <img src={slide2bg} alt="slide2bg"/>
                        </div>
                </div>

                <div className="slide slide1 bgtrans">
                    <div className="box bgtrans">
                        <h1 className="bgtrans">Branding</h1>
                        <p className="bgtrans sliderPar">We bring your dreams to life!
                            Our team of marketing and business experts will help you shape your business' 
                            identity until it exceeds every single expectation of yours!
                        </p>
                    </div>
                    <div className="box">
                        <div>
                            <img src={slide3icon} alt="slide3icon"/>
                            <button className="btnProp">
                                 Get an offer     
                            </button>
                        </div>
                        <img src={slide3bg} alt="slide3bg"/>
                    </div>
                </div>
                
                <div className="slide slide1 bgtrans">
                <div className="box bgtrans">
                            <h1 className="bgtrans">Ecomerce</h1>
                            <p className="bgtrans sliderPar">We specialize in scalable e-commerce sites that are easy for our clients to update,
                                 with user-friendly product management, integration with a range of payment systems
                                 , and a fully secure customer shopping experience.</p>
                        </div>
                        <div className="box">
                            <div>
                                <img src={slide4icon} alt="slide4icon"/>
                                <button className="btnProp">
                                        Get an offer
                                        
                                </button>
                            </div>
                            <img src={slide4bg} alt="slide4bg"/>
                        </div>
                </div>

                <div className="slide slide1 bgtrans">
                <div className="box bgtrans">
                            <h1 className="bgtrans">CRM</h1>
                            <p className="bgtrans sliderPar">The CRM system has the role of managing external activities of a company, regarding clients, prospects and business partners,
                                 as well as the internal ones, related to employees and departments,
                                  contributing towards the implementation of an integrated CRM strategy.</p>
                        </div>
                        <div className="box">
                            <div>
                                <img src={slide5icon} alt="slide7icon"/>
                                <button className="btnProp">
                                        Get an offer
                                        
                                </button>
                            </div>
                            <img src={slide5bg} alt="slide7bg"/>
                        </div>
                </div>

                <div className="slide slide1 bgtrans">
                <div className="box bgtrans">
                            <h1 className="bgtrans">ERP</h1>
                            <p className="bgtrans sliderPar">An enterprise resource planning
                                 system helps organizations to manage business functions and streamline
                                  operations with a centralized database and a user-friendly interface.</p>
                        </div>
                        <div className="box">
                            <div>
                                <img src={slide6icon} alt="slide5icon"/>
                                <button className="btnProp">
                                        Get an offer
                                      
                                </button>
                            </div>
                            <img src={slide6bg} alt="slide5bg"/>
                        </div>
                </div>

                <div className="slide slide1 bgtrans">
                <div className="box bgtrans">
                            <h1 className="bgtrans">Marketing</h1>
                            <p className="bgtrans sliderPar">Marketing is a thing...</p>
                        </div>
                        <div className="box">
                            <div className="slide7box-2">
                                <img src={slide7icon} alt="slide6icon"/>
                            </div>
                            <img src={slide7bg} alt="slide6bg"/>
                        </div>
                </div>
                <button className="slider__btn slider__btn--left bgtrans"><img src={slidervectorL} alt="slidervectorL" className="bgtrans"/></button>
                <button className="slider__btn slider__btn--right bgtrans"><img src={slidervectorR} alt="slidervectorR" className="bgtrans"/></button>
                <div className="dots"></div>
            </div>
            {/* <section className="container ourPartner bgtrans"><div className="bgtrans">Our partner</div></section> */}
            <section className="ellipses">
                {/* <div className="bgGradient"></div>
                <div className="bgGradient1"></div> */}
                {/* <div className="ellipse5"></div> */}
                {/* <div className="ellipse42"></div>
                <div className="ellipse12"></div>
                <div className="ellipse10"></div>
                <div className="ellipse7"></div>
                <div className="ellipse4"></div>
                <div className="ellipse11"></div>
                <div className="ellipse13"></div>
                <div className="ellipse9"></div>
                <div className="ellipse8"></div>
                <div className="ellipse6"></div>
                <div className="ellipse3"></div>
                <div className="ellipse2"></div>
                <div className="ellipse1"></div> */}
            </section>
        </body>

    )
            }

}



