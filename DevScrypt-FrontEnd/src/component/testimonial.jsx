// import React from 'react';
import './css-style/testimonial.css'
import sampleVideo1 from './assets/landing-assets/main-video5.mp4';


import React, { useState, useRef, useEffect } from 'react';
import TestimonialImg01 from './assets/landing-assets/person1.jpg';
import TestimonialImg02 from './assets/landing-assets/person1.jpg';
import TestimonialImg03 from './assets/landing-assets/person1.jpg';

export default function FancyTestimonialsSlider() {
  const testimonialsRef = useRef(null); // Removed types as JS does not require them
  const [active, setActive] = useState(0);
  const [autorotate] = useState(true); // Autorotate logic can be handled separately if needed
  const autorotateTiming = 7000;

  const testimonials = [
    {
      img: TestimonialImg01,
      quote: "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to select between formats.",
      name: 'Jessie J',
      role: 'Acme LTD',
    },
    {
      img: TestimonialImg02,
      quote: "Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.",
      name: 'Nick V',
      role: 'Malika Inc.',
    },
    {
      img: TestimonialImg03,
      quote: "The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.",
      name: 'Amelia W',
      role: 'Panda AI',
    },
  ];

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement) {
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
    }
  };

  useEffect(() => {
    heightFix();
  }, [active]);




  useEffect(() => {
    if (!autorotate) return
    const interval = setInterval(() => {
      setActive(active + 1 === testimonials.length ? 0 : active => active + 1)
    }, autorotateTiming)
    return () => clearInterval(interval)
  }, [active, autorotate])



  return (
    <div>
    <div className="testo-div text-center">
      {/* Testimonial image */}
      <div className="testo-div1 relative h-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/70 before:via-white/30 before:via-55% before:to-white/5 before:to-75% before:rounded-full before:-z-10">
  <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">


            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 h-full -z-10 transition-transform duration-700 ${
                  active === index
                    ? 'opacity-100 rotate-0'
                    : 'opacity-0 -rotate-[60deg]'
                }`}
              >
                <img
                  className="relative top-11 left-1/2 -translate-x-1/2 rounded-full"
                  src={testimonial.img}
                  width={56}
                  height={56}
                  alt={testimonial.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Text */}
      <div className="mb-9 transition-all duration-150 delay-300 ease-in-out">
        <div className="relative flex flex-col" ref={testimonialsRef}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-500 delay-200 ${
                active === index ? 'opacity-100 translate-x-0' : 'opacity-0'
              }`}
            >
              <div className=" testo-text before:content-['\201C'] after:content-['\201D']">
                {testimonial.quote}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Buttons */}
      <div className="flex flex-wrap justify-center -m-1.5">
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            className={`inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-1.5 text-xs shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ${
              active === index
                ? 'bg-indigo-500 text-white shadow-indigo-950/10'
                : 'bg-white hover:bg-indigo-100 text-slate-900'
            }`}
            onClick={() => setActive(index)}
          >
            <span>{testimonial.name}</span>{' '}
            <span
              className={`${
                active === index ? 'text-indigo-200' : 'text-slate-300'
              }`}
            >
              -
            </span>{' '}
            <span>{testimonial.role}</span>
          </button>
        ))}
      </div>
      <button className='testo-but'>Ask Us!</button>
    </div>
    </div>
  );
}




















