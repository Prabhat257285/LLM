import React from 'react';
import FeaturedCourses from '../../components/home/FeaturedCourses'; // Reusing for now, or create dedicated list

export default function StudentCourses() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">My Enrolled Courses</h1>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <p className="text-gray-500 mb-4">You are currently enrolled in 3 courses.</p>
                {/* Reusing CourseCard logic or simpler list */}
                <FeaturedCourses />
            </div>
        </div>
    );
}
