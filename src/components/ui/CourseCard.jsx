import React from 'react';
import { Star, Clock, Users } from 'lucide-react';
import Card from './Card';
import Button from './Button';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    return (
        <Card className="hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-xs font-bold text-primary shadow">
                    {course.category}
                </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                        <Star className="h-4 w-4 text-accent fill-current mr-1" />
                        <span className="font-bold text-gray-900">{course.rating}</span>
                        <span className="ml-1">({course.reviews})</span>
                    </div>
                    <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{course.duration}</span>
                    </div>
                </div>

                <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center">
                        <img
                            src={course.instructorImage}
                            alt={course.instructor}
                            className="w-8 h-8 rounded-full mr-2"
                        />
                        <span className="text-sm font-medium text-gray-900">{course.instructor}</span>
                    </div>
                    <span className="text-lg font-bold text-primary">View Plans</span>
                </div>

                <div className="mt-4">
                    <Link to={`/courses/${course.id}`} className="block">
                        <Button variant="primary" className="w-full justify-center">View Details</Button>
                    </Link>
                </div>
            </div>
        </Card>
    );
};

export default CourseCard;
