import React from 'react';
import './css-style/ConnectedCards.css';
import VideoCard1 from './assets/landing-assets/main-video.mp4';
import VideoCard2 from './assets/landing-assets/main-video3.mp4';
import VideoCard3 from './assets/landing-assets/main-video2.mp4';

import img4 from './assets/landing-assets/prototype.png';
import img1 from './assets/landing-assets/bg7.jpg';
import img2 from './assets/landing-assets/bg8.jpg';
import img3 from './assets/landing-assets/bg6.png';

function ConnectedCards() {
  return (
    <div className="cards-container-vertical">
      {/* <div className='connectecardhead'>
      <h1>Made on DevScrypt</h1>
      </div> */}
      
      <div className='connected-card-flex-main grid grid-cols-2 sm:grid-cols-2  lg:grid-cols-4 gap-2'>

        <div className='connected-card-flex-1'> 
        <div>
      <video
                    className="br connected-video1"
                    src={VideoCard1} // Example public video URL
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                
                {/* <video
                    className="br connected-video2"
                    src={VideoCard2} // Example public video URL
                    autoPlay
                    loop
                    muted
                    playsInline
                /> */}
                
                <img className='br1' src={img4} alt="" />

      </div>
        </div>



        <div className='connected-card-flex-2'>
        <div>
      <img className='br' src={img1} alt="" />
      </div>
        </div>


        <div className=' connected-card-flex-3'>
        <div>
      <video
                    className="br connected-video3"
                    src={VideoCard3} // Example public video URL
                    autoPlay
                    loop
                    muted
                    playsInline
                />

<img className='br img-cord' src={img3} alt="" />

      </div>
        </div>


        <div className='connected-card-flex-4'>
        <div>
      <img className=' imglast img-cord2 br' src={img2} alt="" />
      </div>
        </div>


      </div>



















{/* 
      <div className=" lineconn1 h-32  justify-center">
        <span
          className="absolute w-2/3 h-px md:h-2/3 md:w-px"
          style={{
            backgroundImage: 'linear-gradient(to top, transparent, #d4d4d4, transparent)',
          }}
          aria-hidden="true"
        ></span>
      </div> */}









      {/* <div className=" lineconn1  flex items-center justify-center"> */}
        {/* Other content can go here */}
        {/* Responsive Gradient Line */}
        {/* <span
          className="absolute w-2/3 h-px md:h-2/3 md:w-px"
          style={{
            backgroundImage: 'linear-gradient(to top, transparent, #d4d4d4, transparent)',
          }}
          aria-hidden="true"
        ></span>
        <p>hhhhhhhhhhhhhhhhhhhhh</p>
      </div> */}









      <hr></hr>





    </div>
  );
}

export default ConnectedCards;
