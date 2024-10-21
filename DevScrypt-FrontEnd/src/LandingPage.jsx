import React, { useState } from 'react'
import NavBar from "./component/NavBar.jsx"
import './LandingPage.css'
import img from './assets/DevScrypt-logo1.png'
function LandingPage() {

    return(
        <div className='landingpage'>
             {/* <div>
             <img className="first-logo  rounded-full" src={img} alt="yyyyy"/> */}
             <NavBar>
             </NavBar>
             {/* <button type="button" className="side-button bg-opacity-0  ">Seller-Mode</button> */}
             {/* </div> */}


        </div>
    );
}

export default LandingPage


