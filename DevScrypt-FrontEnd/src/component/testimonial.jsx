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





















// function TestimonialCard({ image, name, title, testimonial, rating }) {
//     return (
//         <div className="testo-cards bg-800 text-white p-6 rounded-lg shadow-md">
//             <div className="flex flex-col items-center">
//                 <img
//                     src={image}
//                     alt={name}
//                     className="w-24 h-24 rounded-full mb-4 border-4 border-gray-700 object-cover"
//                 />
//                 <h3 className="text-lg font-semibold">{name}</h3>
//                 <p className="text-gray-400">{title}</p>
//                 <p className="mt-3 text-center text-gray-300">{testimonial}</p>
//                 <div className="mt-4">
//                     {Array.from({ length: 5 }, (_, i) => (
//                         <span key={i}>
//                             {i < rating ? (
//                                 <svg className="w-5 h-5 text-yellow-500 inline" fill="currentColor" viewBox="0 0 20 20">
//                                     <path d="M9.049 2.927C9.23 2.564 9.77 2.564 9.951 2.927l1.548 3.286 3.632.332c.4.036.564.544.27.81l-2.622 2.28.782 3.514c.093.418-.36.741-.723.541L10 12.347l-3.289 1.343c-.364.148-.816-.123-.723-.541l.782-3.514-2.622-2.28c-.294-.266-.13-.774.27-.81l3.632-.332L9.049 2.927z" />
//                                 </svg>
//                             ) : (
//                                 <svg className="w-5 h-5 text-gray-500 inline" fill="currentColor" viewBox="0 0 20 20">
//                                     <path d="M9.049 2.927C9.23 2.564 9.77 2.564 9.951 2.927l1.548 3.286 3.632.332c.4.036.564.544.27.81l-2.622 2.28.782 3.514c.093.418-.36.741-.723.541L10 12.347l-3.289 1.343c-.364.148-.816-.123-.723-.541l.782-3.514-2.622-2.28c-.294-.266-.13-.774.27-.81l3.632-.332L9.049 2.927z" />
//                                 </svg>
//                             )}
//                         </span>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// function TestimonialSection() {
//     const testimonials = [
//         {
//             image: 'https://randomuser.me/api/portraits/men/32.jpg',
//             name: 'John Doe',
//             title: 'CEO of XYZ Corp',
//             testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra nibh vitae nisi facilisis, a auctor ipsum fermentum.',
//             rating: 5
//         },
//         {
//             image: 'https://randomuser.me/api/portraits/women/44.jpg',
//             name: 'Jane Smith',
//             title: 'Designer at ABC Inc.',
//             testimonial: 'Ut sed eros libero. Curabitur quis sapien et ipsum fermentum lobortis.',
//             rating: 4
//         },
//         {
//             image: 'https://randomuser.me/api/portraits/men/64.jpg',
//             name: 'Mark Johnson',
//             title: 'Freelancer',
//             testimonial: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames.',
//             rating: 5
//         },
//         {
//             image: 'https://randomuser.me/api/portraits/men/32.jpg',
//             name: 'John Doe',
//             title: 'CEO of XYZ Corp',
//             testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra nibh vitae nisi facilisis, a auctor ipsum fermentum.',
//             rating: 5
//         }
//     ];

//     return (
//         <>
//             <div className="video-background-container1">
//             <div className="Testimonial max-w-7xl mx-auto sm:px-6 lg:px-8">
//                 <h2 className=" font-extrabold text-center mb-12">What Our Clients Say</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {testimonials.map((t, index) => (
//                         <TestimonialCard
//                             key={index}
//                             image={t.image}
//                             name={t.name}
//                             title={t.title}
//                             testimonial={t.testimonial}
//                             rating={t.rating}
//                         />
//                     ))}
//                 </div>
//             </div>
//                 {/* <video 
//                     preload="none"
//                     className="video-background1"
//                     src={sampleVideo1} // Example public video URL
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                 /> */}
//             </div>
            
//         </>
//     );
// }

// export default TestimonialSection;







