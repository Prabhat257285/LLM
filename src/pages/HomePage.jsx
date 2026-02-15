import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedCourses from '../components/home/FeaturedCourses';
import Categories from '../components/home/Categories';
import Testimonials from '../components/home/Testimonials';

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <Hero />
            <FeaturedCourses />
            <Categories />
            <Testimonials />
        </div>
    );
}
