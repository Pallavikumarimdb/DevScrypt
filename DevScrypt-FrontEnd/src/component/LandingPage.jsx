import React, { useState, useEffect } from "react"
import NavBar from "./NavBar.jsx"
import TestimonialSection from "./testimonial.jsx"
import ConnectedCards from "./ConnectedCards.jsx"
import AppJob from '../component-LatestJob/JobApp.jsx';
import './css-style/LandingPage.css';
import sampleVideo from './assets/landing-assets/main-video3.mp4';
import glasslogo1 from './assets/landing-assets/networking.png';
import glasslogo2 from './assets/landing-assets/solana.png';
import glasslogo3 from './assets/landing-assets/bitcoin.png';
import glasslogo4 from './assets/landing-assets/ethereum.png';
import glasslogo5 from './assets/landing-assets/litecoin.png';
import glasslogo6 from './assets/landing-assets/ripple.png';
import { ReactTyped } from "react-typed";

function LandingPage() {

    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

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
                <div className="container">
                    <div className="part-1">
                        <div className="autotype-head">
                            <div className="autotype">
                                <h1>
                                    {" "}
                                    <ReactTyped showCursor={false} strings={["WELCOME TO"]} typeSpeed={100} loop /><span className="devScrypt-name">devScrypt!</span>
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
                                <div class="glass">
                                    <img className="glass-logo" src={glasslogo6} alt="" />
                                    <p>Ripple Developer</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="part-2">
                        <div className="Hot-jobs">
                        <AppJob></AppJob>
                        </div>
                    </div>
                </div>
            </div>

            <div className="video-merge-shadow">
                <div>
                    <h1>Top Rated Verified Pro services in Crypto Development</h1>
                    <div className="section-1">
                        
                    </div>
                </div>
            </div>
            <TestimonialSection />
            <ConnectedCards></ConnectedCards>
        </>

    );
}

export default LandingPage


