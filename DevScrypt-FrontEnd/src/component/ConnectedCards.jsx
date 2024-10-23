import React from 'react';
import './css-style/ConnectedCards.css';

function ConnectedCards() {
    return (
        <div className="cards-container-vertical">

            {/* <svg width="100" height="100">
                {/* <path d="M50,0 L50,100" stroke="black" fill="transparent" stroke-width="2" /> */}
                {/* <path d="M50,0 L50,100" fill="transparent" stroke-width="2" /> */}
            {/* </svg> */} 


            <div className="card">
                <h3>Card 1</h3>
                <p>This is the first card.</p>
            </div>

            {/* SVG for curved wire */}
            <svg width="100" height="100">
                {/* <path d="M50,0 Q75,50 50,100"  strokeWidth="2" fill="none" /> */}
                <path d="M50,0 L50,100" fill="transparent" stroke-width="2" />
                <circle cx="50" cy="50" r="4" fill="#161b21" />
                {/* <circle cx="50" cy="100" r="3" fill="green" /> */}
            </svg>


            <div className="card">
                <h3>Card 2</h3>
                <p>This is the second card.</p>
            </div>








{/* .................................................future use.................................... */}

    {/* <div className="relative h-64 flex items-center justify-center">
      {/* Other content can go here */}

      {/* Gradient line */}
      {/* <span className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-200/100 via-zinc-200/100 to-transparent" aria-hidden="true"></span> */}
    {/* </div> */}
{/* ........................................................................................................... */}


        </div>
    );
}

export default ConnectedCards;
