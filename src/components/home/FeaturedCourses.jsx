import React from 'react';
import CourseCard from '../ui/CourseCard';
import { courses } from '../../data/courses';

const FeaturedCourses = () => {
    // Get first 3 courses for featured section
    const featuredCourses = courses.slice(0, 3);

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Featured Courses
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        Explore our most popular courses and start learning today.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <a href="/courses" className="text-primary font-medium hover:text-blue-600">View all courses &rarr;</a>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCourses;
