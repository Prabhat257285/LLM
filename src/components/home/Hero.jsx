import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero = () => {
    return (
        <div className="relative bg-gray-900 overflow-hidden">
            <div className="absolute inset-0">
                <img
                    className="w-full h-full object-cover opacity-30"
                    src="/assets/images/hero-bg.jpg" // We need to download this
                    alt="Technology Background"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
            </div>
            <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[600px]">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                    Master the Skills of <span className="text-primary">Tomorrow</span>
                </h1>
                <p className="mt-4 text-xl text-gray-300 max-w-3xl mb-8">
                    Learn from industry experts and get certified in the top IT technologies.
                    From Web Development to Cybersecurity, we have the courses you need to advance your career.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/register">
                        <Button variant="primary" className="px-8 py-3 text-lg">
                            Get Started
                        </Button>
                    </Link>
                    <Link to="/courses">
                        <Button variant="outline" className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-gray-900">
                            Explore Courses
                        </Button>
                    </Link>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 border-t border-gray-800 pt-8">
                    <div>
                        <span className="block text-3xl font-bold text-white">10k+</span>
                        <span className="block text-sm text-gray-400">Students Enrolled</span>
                    </div>
                    <div>
                        <span className="block text-3xl font-bold text-white">500+</span>
                        <span className="block text-sm text-gray-400">Expert Instructors</span>
                    </div>
                    <div>
                        <span className="block text-3xl font-bold text-white">100+</span>
                        <span className="block text-sm text-gray-400">Courses Available</span>
                    </div>
                    <div>
                        <span className="block text-3xl font-bold text-white">4.9</span>
                        <span className="block text-sm text-gray-400">Average Rating</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
