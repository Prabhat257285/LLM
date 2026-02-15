import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Frontend Developer',
            content: "This LMS platform transformed my career. The React course was comprehensive and the projects helped me build a strong portfolio.",
            image: 'https://randomuser.me/api/portraits/women/44.jpg',
            rating: 5
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Data Analyst',
            content: "Excellent curriculum for Data Science. The instructors explained complex concepts simply. Highly recommended!",
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
            rating: 5
        },
        {
            id: 3,
            name: 'Emily Davis',
            role: 'Cyber Security Analyst',
            content: "The hands-on labs were amazing. I passed my certification exam on the first try thanks to these courses.",
            image: 'https://randomuser.me/api/portraits/women/68.jpg',
            rating: 4
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">What Our Students Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow border border-gray-100">
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                    />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                            <div className="flex items-center">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="h-12 w-12 rounded-full mr-4"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
