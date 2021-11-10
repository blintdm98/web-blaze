import React from "react";
import './pages.css';
import image1 from "./Images/image1.jpg";
import image2 from "./Images/image2.jpg";
import image3 from "./Images/image3.jpg";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowAltCircleDown} from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper.min.css';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination]);
  


export default function Home(){
    
    return (

        <body>
        <section id="contactUs"class="container">
            <div class="flex-container">
                <div class="box">
                    <bold>/* No worries */ </bold>
                    Just leave it to us!
                    <div>
                        <button>
                            <bold>Contact us</bold>
                        </button>
                        <p>For your<bold> Blazing </bold>succes!</p>
                    </div>
                </div>
                <div class="box">
                    <img src={image1} alt="img1"/>
                    <img src={image2} alt="img2"/>
                    <img src={image3} alt="img3"/>
                </div>
            </div>
            <div class="learnMore">
                Learn more 
                <div><FontAwesomeIcon icon={faArrowAltCircleDown}></FontAwesomeIcon></div>
            </div>
        </section>
        <section  id="ourBelief">
            <div class="flex-container container">
                <div class="box">
                    <h1>Our belief!</h1>
                    <p>We believe that your business presence on the World Wide Web is crucial for your success. 
                    It represents and advertises the quality you want to provide.</p>
                    <p>That's why we are looking after the flames of your ambition and to illuminate the path to success!</p>
                </div>
                <div class="box"></div>
            </div>
        </section>
        <section id="howDowe">
        <div class="flex-container">
                <div class="box"></div>
                <div class="box">
                    <h1>How do we do that?</h1>
                    <p>Very Simple!</p>
                    <p>With great quality, trending, and modern websites, that integrate themselves perfectly in your brand, expanding it to a new level at the same time.</p>
                    <p>We tell a story, the story of your brand, your business and your Succes!</p>
                </div>
            </div>
        </section>
        <section id="swiper" class="container">
            <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{clickable:true}} navigation={{
                "clickable": true
                }} navigation={true} className="mySwiper">
                <SwiperSlide>
                    <div class="slide1">
                        <div class="box">
                            <h1>Web Design</h1>
                            <p>Web design is much more than creating a design that is fresh and appealing.
                            Any website that is to become successful as a sales and marketing tool needs to be intuitive and easy-to-use for the first time and recurrent visitors.
                            </p>
                        </div>
                        <div class="box">
                            <div>
                                <img src={slide1icon} alt="slide1icon"/>
                                <button>
                                        Get an offer
                                        {/* <FontAwesomeIcon  icon={faArrowRight}></FontAwesomeIcon>         */}
                                </button>
                            </div>
                            <img src={slide1bg} alt="slide1bg"/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="slide1">
                        <div class="box">
                            <h1>Business Consulting</h1>
                            <p>We offer high quality modular business consulting that helps with every aspect of administration, business and brand growth, marketing, general and human resource management. We also offer general business growth consulting in two modules and business evaluation.</p>
                        </div>
                        <div class="box">
                            <div>
                                <img src={slide2icon} alt="slide2icon"/>
                                <button>
                                        Get an offer
                                        {/* <FontAwesomeIcon  icon={faArrowRight}></FontAwesomeIcon>         */}
                                </button>
                            </div>
                            <img src={slide2bg} alt="slide2bg"/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="slide1">
                        <div class="box">
                            <h1>Web Design</h1>
                            <p>Web design is much more than creating a design that is fresh and appealing.
                            Any website that is to become successful as a sales and marketing tool needs to be intuitive and easy-to-use for the first time and recurrent visitors.
                            </p>
                        </div>
                        <div class="box">
                            <div>
                                <img src={slide3icon} alt="slide3icon"/>
                                <button>
                                        Get an offer
                                        {/* <FontAwesomeIcon  icon={faArrowRight}></FontAwesomeIcon>         */}
                                </button>
                            </div>
                            <img src={slide3bg} alt="slide3bg"/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="slide1">
                        <div class="box">
                            <h1>Web Design</h1>
                            <p>Web design is much more than creating a design that is fresh and appealing.
                            Any website that is to become successful as a sales and marketing tool needs to be intuitive and easy-to-use for the first time and recurrent visitors.
                            </p>
                        </div>
                        <div class="box">
                            <div>
                                <img src={slide4icon} alt="slide4icon"/>
                                <button>
                                        Get an offer
                                        {/* <FontAwesomeIcon  icon={faArrowRight}></FontAwesomeIcon>         */}
                                </button>
                            </div>
                            <img src={slide4bg} alt="slide4bg"/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="slide1">
                        <div class="box">
                            <h1>Web Design</h1>
                            <p>Web design is much more than creating a design that is fresh and appealing.
                            Any website that is to become successful as a sales and marketing tool needs to be intuitive and easy-to-use for the first time and recurrent visitors.
                            </p>
                        </div>
                        <div class="box">
                            <div>
                                <img src={slide5icon} alt="slide5icon"/>
                                <button>
                                        Get an offer
                                        {/* <FontAwesomeIcon  icon={faArrowRight}></FontAwesomeIcon>         */}
                                </button>
                            </div>
                            <img src={slide5bg} alt="slide5bg"/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div class="slide1">
                        <div class="box">
                            <h1>Web Design</h1>
                            <p>Web design is much more than creating a design that is fresh and appealing.
                            Any website that is to become successful as a sales and marketing tool needs to be intuitive and easy-to-use for the first time and recurrent visitors.
                            </p>
                        </div>
                        <div class="box">
                            <div>
                                <img src={slide6icon} alt="slide6icon"/>
                                <button>
                                        Get an offer
                                        {/* <FontAwesomeIcon  icon={faArrowRight}></FontAwesomeIcon>         */}
                                </button>
                            </div>
                            <img src={slide6bg} alt="slide6bg"/>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide><div class="slide1">
                        <div class="box">
                            <h1>Web Design</h1>
                            <p>Web design is much more than creating a design that is fresh and appealing.
                            Any website that is to become successful as a sales and marketing tool needs to be intuitive and easy-to-use for the first time and recurrent visitors.
                            </p>
                        </div>
                        <div class="box">
                            <div>
                                <img src={slide7icon} alt="slide7icon"/>
                                <button>
                                        Get an offer
                                        {/* <FontAwesomeIcon  icon={faArrowRight}></FontAwesomeIcon>         */}
                                </button>
                            </div>
                            <img src={slide7bg} alt="slide7bg"/>
                        </div>
                    </div></SwiperSlide>
            </Swiper>
            {/* <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper> */}
        </section>
        <section class="container"><div>Our partner</div></section>
        </body> 
    )
}