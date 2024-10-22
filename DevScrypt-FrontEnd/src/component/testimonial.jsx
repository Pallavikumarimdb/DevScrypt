import React from 'react';
import './css-style/testimonial.css'
import sampleVideo1 from './assets/landing-assets/main-video5.mp4';


function TestimonialCard({ image, name, title, testimonial, rating }) {
    return (
        <div className="testo-cards bg-800 text-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col items-center">
                <img
                    src={image}
                    alt={name}
                    className="w-24 h-24 rounded-full mb-4 border-4 border-gray-700 object-cover"
                />
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-gray-400">{title}</p>
                <p className="mt-3 text-center text-gray-300">{testimonial}</p>
                <div className="mt-4">
                    {Array.from({ length: 5 }, (_, i) => (
                        <span key={i}>
                            {i < rating ? (
                                <svg className="w-5 h-5 text-yellow-500 inline" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927C9.23 2.564 9.77 2.564 9.951 2.927l1.548 3.286 3.632.332c.4.036.564.544.27.81l-2.622 2.28.782 3.514c.093.418-.36.741-.723.541L10 12.347l-3.289 1.343c-.364.148-.816-.123-.723-.541l.782-3.514-2.622-2.28c-.294-.266-.13-.774.27-.81l3.632-.332L9.049 2.927z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 text-gray-500 inline" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927C9.23 2.564 9.77 2.564 9.951 2.927l1.548 3.286 3.632.332c.4.036.564.544.27.81l-2.622 2.28.782 3.514c.093.418-.36.741-.723.541L10 12.347l-3.289 1.343c-.364.148-.816-.123-.723-.541l.782-3.514-2.622-2.28c-.294-.266-.13-.774.27-.81l3.632-.332L9.049 2.927z" />
                                </svg>
                            )}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

function TestimonialSection() {
    const testimonials = [
        {
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
            name: 'John Doe',
            title: 'CEO of XYZ Corp',
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra nibh vitae nisi facilisis, a auctor ipsum fermentum.',
            rating: 5
        },
        {
            image: 'https://randomuser.me/api/portraits/women/44.jpg',
            name: 'Jane Smith',
            title: 'Designer at ABC Inc.',
            testimonial: 'Ut sed eros libero. Curabitur quis sapien et ipsum fermentum lobortis.',
            rating: 4
        },
        {
            image: 'https://randomuser.me/api/portraits/men/64.jpg',
            name: 'Mark Johnson',
            title: 'Freelancer',
            testimonial: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames.',
            rating: 5
        }
    ];

    return (
        <>
            <div className="video-background-container1">
            <div className="Testimonial max-w-7xl mx-auto sm:px-6 lg:px-8">
                <h2 className=" font-extrabold text-center mb-12">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <TestimonialCard
                            key={index}
                            image={t.image}
                            name={t.name}
                            title={t.title}
                            testimonial={t.testimonial}
                            rating={t.rating}
                        />
                    ))}
                </div>
            </div>
                <video 
                    preload="none"
                    className="video-background1"
                    src={sampleVideo1} // Example public video URL
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>
            
        </>
    );
}

export default TestimonialSection;