import React, { useState, useEffect } from "react"
import NavBar from "./NavBar.jsx"
import TestimonialSection from "./testimonial.jsx"
import './css-style/LandingPage.css'
import sampleVideo from './assets/landing-assets/main-video3.mp4';
import glasslogo1 from './assets/landing-assets/networking.png';
import glasslogo2 from './assets/landing-assets/solana.png';
import glasslogo3 from './assets/landing-assets/bitcoin.png';
import glasslogo4 from './assets/landing-assets/ethereum.png';
import glasslogo5 from './assets/landing-assets/litecoin.png';
import glasslogo6 from './assets/landing-assets/ripple.png';
import { ReactTyped } from "react-typed";

function LandingPage() {

    return (
        <>
            <div className="video-background-container">
                <NavBar></NavBar>
                <video
                    className="video-background"
                    src={sampleVideo} // Example public video URL
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="autotype-head">
                    <div className="autotype">
                        <h1>
                            {" "}
                            <ReactTyped showCursor={false} strings={["WELCOME TO"]} typeSpeed={100} loop /><span className="devScrypt-name">devScrypt!</span>
                        </h1>
                    </div>
                    <div>
                        <button type="button" className="side-button1 bg-opacity-0  ">Seller-Mode</button>
                    </div>
                    <div  class="parent-div">
                    <div class="glass">
                        <img className="glass-logo" src={glasslogo1} alt="" />
                        <p>Web Developer</p>
                    </div>
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
                    <div class="glass">
                    <img className="glass-logo" src={glasslogo6} alt="" />
                        <p>Ripple Developer</p>
                    </div>
                    </div>
                </div>
            </div>

            <div className="video-merge-shadow">
                    <div>
                        <h1>Heyyy... this is freelancing website for Crypto Developer</h1>
                    </div>
                </div>
            <TestimonialSection/>
            
        </>

    );
}

export default LandingPage


