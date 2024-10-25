import React, { useEffect, useState, useRef } from 'react';
import data from "./VisiteCounter.json";
//styling
import './css-style/WebsiteVisiteCounter.css';


import bissell from './assets/landing-assets/bissell.svg';
import meta from './assets/landing-assets/meta.svg';
import microsoft from './assets/landing-assets/microsoft.svg';
import paypal from './assets/landing-assets/paypal.svg';

function WebsiteVisiteCounter (){

      const targetRef = useRef(null);
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                console.log('Div is in view');
                // Activate your function here
                countFunction();
              }
            });
          },
          {
            root: null, // null means observing relative to the viewport
            threshold: 0.5, // Trigger when 50% of the div is visible
          }
        );
    
        if (targetRef.current) {
          observer.observe(targetRef.current);
        }
    
        return () => {
          if (targetRef.current) {
            observer.unobserve(targetRef.current);
          }
        };
      }, []);
    


      const [counter1, setCounter1] = useState(0);
      const myTimeout = useRef(null);
    
      function countFunction() {
        // Clear any existing interval before setting a new one
        clearInterval(myTimeout.current);
    
        myTimeout.current = setInterval(() => {
          setCounter1((prevCount) => {
            if (prevCount >= 1000) {
              clearInterval(myTimeout.current); // Stop the interval when counter reaches 1000
              return prevCount;  // Return the current value, so it doesn't increase beyond 1000
            }
            return prevCount + 1;  // Otherwise, increment the counter
          });
        }, 10);
      }
    
      return (
        <div className='main1'>
                        <div className='count-headtag'>
                Everyday, DevSrypt Helps Organizations 
            </div>
          {/* <div style={{ height: '150vh' }}></div> */}
          {/* The div that triggers the function */}
          <div className='count-main grid grid-cols-2 sm:grid-cols-2  lg:grid-cols-4' ref={targetRef}>
            <div className='cn cn-main'>
            Trusted By:
            <img className="complogo bissell-logo" src={bissell} alt="" />
            <img className="complogo meta-logo" src={meta} alt="" />
            <img className="complogo microsoft-logo" src={microsoft} alt="" />
            <img className="complogo paypal-logo" src={paypal} alt="" />
            </div>

            <div className='cn count1'>
                <div className='inner-count1'>
                {counter1}+
                </div >
                <p>Developer Joined</p>
            </div>
            
            <div className='cn count2'>
                <div className='inner-count1'>
                {counter1}+
                </div>
                <p>Client has used the service</p>
            </div>
            <div className='cn count3'>
                <div className='inner-count1'>
                {counter1}+
                </div>
                <p>Millions of work done!</p>
            </div>
            
          </div>
          {/* <div style={{ height: '150vh' }}></div> */}
        </div>
      );
    };
    
    
export default WebsiteVisiteCounter;
