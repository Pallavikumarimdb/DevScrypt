import React, { useState, useEffect } from "react"

import NavBar from "./NavBar.jsx"
import TestimonialSection from "./testimonial.jsx"
import ConnectedCards from "./ConnectedCards.jsx"
import AppJob from '../component-LatestJob/JobApp.jsx';
import Developertestimonial from "./Developertestimonial.jsx";
import WebsiteVisiteCounter from "./WebsiteVisitCounter.jsx";
import Footer from "./Footer.jsx";

import './css-style/LandingPage.css';
import sampleVideo from './assets/landing-assets/main-video5.mp4';
import VideoCard from './assets/landing-assets/main-video4.mp4';
import sampleVideo1 from './assets/landing-assets/main-video3.mp4';

import bgv1 from './assets/landing-assets/bgv1.mp4';

import glasslogo1 from './assets/landing-assets/networking.png';
import glasslogo2 from './assets/landing-assets/solana.png';
import glasslogo3 from './assets/landing-assets/bitcoin.png';
import glasslogo4 from './assets/landing-assets/ethereum.png';
import glasslogo5 from './assets/landing-assets/litecoin.png';
import glasslogo6 from './assets/landing-assets/ripple.png';
import image from './assets/landing-assets/Profile.png';
import { ReactTyped } from "react-typed";


function LandingPage() {

    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };






    const [rotationX, setRotationX] = useState(0);

    useEffect(() => {
        const handleScroll = (event) => {
            // Update the rotation based on scroll event
            setRotationX((prevRotationX) => prevRotationX + event.deltaY / 10);
        };

        // Add scroll event listener
        window.addEventListener('wheel', handleScroll);

        // Clean up the event listener when component unmounts
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);








    return (
        <>
            <div className="video-background-container">
                <NavBar></NavBar>
                <video
                    className="video-background"
                    src={bgv1} // Example public video URL
                    autoPlay
                    loop
                    muted
                    playsInline
                />


                <div class="flex-container">
                    <div class="flex-item left">
                        <div className="part-1">
                            <div className="autotype-head">
                                <div className="autotype">
                                    <h1>
                                        {" "}
                                        {/* <ReactTyped showCursor={false} strings={["WELCOME TO"]} typeSpeed={100} loop /><span className="devScrypt-name">devScrypt!</span> */}
                                        <ReactTyped showCursor={false} strings={["WELCOME TO"]} typeSpeed={100} /><span className="devScrypt-name">devScrypt!</span>
                                    </h1>
                                </div>


                                {/* ...............SEARCH BAR....................................................... */}


                                <div>
                                    {/* <button type="button" className="side-button1 bg-opacity-0  ">Seller-Mode</button> */}
                                    <div className="flex justify-center mt-10">

                                        <input
                                            type="text"
                                            value={query}
                                            onChange={handleChange}
                                            placeholder="Search..."
                                            className="input-box border border-gray-300  px-4 py-2 w-64 transition-all duration-300 ease-in-out"
                                        />
                                        <button type="submit" class="search-button p-2.5 ms-2 text-sm font-medium text-white ">
                                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                            </svg>
                                            <span class="sr-only">Search</span>
                                        </button>
                                    </div>
                                </div>
                                {/* ................................................................................. */}


                                <div class="parent-div">
                                    {/* <div class="glass">
                                    <img className="glass-logo" src={glasslogo1} alt="" />
                                    <p>Web Developer</p>
                                </div> */}
                                    <div class="glass">
                                        <img className="glass-logo" src={glasslogo2} alt="" />
                                        <p>Solana Developer</p>
                                    </div>
                                    <div class="glass">
                                        <img className="glass-logo" src={glasslogo3} alt="" />
                                        <p>Bitcoin Developer</p>
                                    </div>
                                    <div class="glass">
                                        <img className="glass-logo" src={glasslogo4} alt="" />
                                        <p>Ethereum Developer</p>
                                    </div>
                                    <div class="glass">
                                        <img className="glass-logo" src={glasslogo5} alt="" />
                                        <p>Litecoin Developer</p>
                                    </div>
                                    <div class="glass glr">
                                        <img className="glass-logo " src={glasslogo6} alt="" />
                                        <p>Ripple Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex-item right">
                        <div className="part-2">
                            {/* <div className="Hot-jobs">
                            <AppJob></AppJob>
                        </div> */}

                            {/* <div className=" Working-model-section-0   ">
                                <video
                                    className="video-background3"
                                    src={VideoCard}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            </div> */}
                            {/* <img src={image} alt="jjjjjjjjjjjjjs" className="left-img "/> */}

                            <section className="bottom-section">
        <div className="overlay">
          <div className="testimonial">
            <h3>A whole world of freelance talent at your fingertips</h3>
            <p className="author">
              <strong>Clear, transparent pricing</strong><br />
              Pay per project or by the hour (Pro). Payments only get released when you approve.
            </p>

            <p className="author">
              <strong>Quality work done faster</strong><br />
              Filter to find the right freelancers quickly and get great work delivered in no time, every time.
            </p>
           
            <p className="author">
              <strong>Over 700 categories</strong><br />
              Get results from skilled freelancers from all over the world, for every task, at any price point.
            </p>

            <p className="author">
              <strong>24/7 award-winning support</strong><br />
              Chat with our team to get your questions answered or resolve any issues with your orders.
            </p>
            <a href="/" className="read-story">Read Dribbble's story →</a>
          </div>
        </div>
      </section>



                        </div>
                    </div>

                </div>

            </div>

            <hr></hr>







            {/* .............................................SECTION 2 .......................................................... */}
            <div className="Working-model">

                <div className="flex-item1 Working-model-section-1 " style={{
                    transform: `rotateX(${rotationX}deg)`,
                    transition: 'transform 0.1s ease-out',
                }}>
                    {/* <video
                        className="video-background2"
                        src={sampleVideo1} // Example public video URL
                        autoPlay
                        loop
                        muted
                        playsInline
                    /> */}
                    <img className="section-2image" src={image} alt="jjjjjjjjjjjjjs" />
                </div>
                {/* <div className="flex-item1 Working-model-section-1"
      style={{
        transform: `rotateX(${rotationX}deg)`,
        transition: 'transform 0.1s ease-out',
      }}>
    </div>   */}





                <div className="relative h-auto flex items-center justify-center">
                    {/* Other content can go here */}

                    {/* Responsive Gradient Line */}
                    <span
                        className="absolute w-2/3 h-px md:h-2/3 md:w-px"
                        style={{
                            backgroundImage: 'linear-gradient(to top, transparent, #d4d4d4, transparent)',
                        }}
                        aria-hidden="true"
                    ></span>
                </div>

                <div className="flex-item1 Working-model-section-2   ">

                    <p className="Working-model-head">How Does CryptoFreelancer Works ?</p>
                    <div className="Working-model-head-desc" >Marketplace with over 7,000 unique NFT rtworks and mare 1,000 independent artists
                        dummy text Lorem Ipsum has t ever since unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </div>

                    <button type="button" className="working-side-button1 bg-opacity-0  ">Seller-Mode</button>
                    <button type="button" className="working-side-button2 bg-opacity-0  ">Seller-Mode</button>
                </div>


            </div>
            {/* <hr></hr> */}
            <Developertestimonial />
            <hr></hr>
            <TestimonialSection />
            <hr></hr>
            <WebsiteVisiteCounter></WebsiteVisiteCounter>
            <ConnectedCards></ConnectedCards>
            <Footer></Footer>
        </>

    );
}

export default LandingPage


