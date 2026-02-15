import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Check, Star, Clock, Users, Shield } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function CourseDetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const foundCourse = courses.find(c => c.id === parseInt(id));
        if (foundCourse) {
            setCourse(foundCourse);
        } else {
            // Handle course not found
            navigate('/courses');
        }
    }, [id, navigate]);

    const handleSubscribe = (plan) => {
        if (!user) {
            navigate('/login');
            return;
        }
        // Mock subscription logic
        alert(`Successfully subscribed to ${course.title} - ${plan.name} Plan!`);
        navigate('/student/dashboard');
    };

    if (!course) return <div className="p-8 text-center">Loading...</div>;

    return (
        <div className="bg-gray-50 min-h-screen pb-12">
            {/* Course Hero */}
            <div className="bg-gray-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4 border border-primary/50">
                            {course.category}
                        </span>
                        <h1 className="text-4xl font-extrabold mb-4">{course.title}</h1>
                        <p className="text-xl text-gray-300 mb-6">{course.description}</p>
                        <div className="flex items-center gap-6 text-sm text-gray-300">
                            <div className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-2 fill-current" /> {course.rating} ({course.reviews} reviews)</div>
                            <div className="flex items-center"><Clock className="h-5 w-5 text-gray-400 mr-2" /> {course.duration}</div>
                            <div className="flex items-center"><Users className="h-5 w-5 text-gray-400 mr-2" /> 10k+ Students</div>
                        </div>
                        <div className="mt-8 flex items-center gap-4">
                            <img src={course.instructorImage} alt={course.instructor} className="w-12 h-12 rounded-full border-2 border-primary" />
                            <div>
                                <p className="text-sm text-gray-400">Instructor</p>
                                <p className="font-bold text-white">{course.instructor}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 max-w-md w-full">
                        <img src={course.image} alt={course.title} className="rounded-xl shadow-2xl border-4 border-gray-800 w-full" />
                    </div>
                </div>
            </div>

            {/* Subscription Plans */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Choose Your Plan</h2>
                <p className="text-xl text-gray-500 text-center mb-12 max-w-2xl mx-auto">Select the best subscription plan that suits your learning needs.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {course.plans.map((plan, index) => (
                        <Card key={index} className={`relative flex flex-col p-6 hover:shadow-xl transition-shadow duration-300 ${plan.name === '1 Year' ? 'border-primary border-2' : ''}`}>
                            {plan.name === '1 Year' && (
                                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                    BEST VALUE
                                </div>
                            )}
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                            <div className="flex items-baseline mb-4">
                                <span className="text-3xl font-extrabold text-gray-900">${plan.price}</span>
                                {plan.price > 0 && <span className="text-gray-500 ml-1">/ {plan.name === '1 Year' ? 'year' : 'term'}</span>}
                            </div>
                            <p className="text-sm text-gray-500 mb-6 font-medium">{plan.duration}</p>

                            <ul className="space-y-3 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start">
                                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                                        <span className="text-gray-600 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.price === 0 ? 'outline' : 'primary'}
                                className="w-full justify-center"
                                onClick={() => handleSubscribe(plan)}
                            >
                                {plan.price === 0 ? 'Start Free Trial' : 'Subscribe Now'}
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Security Badge or Trust Indicators */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
                <div className="inline-flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 gap-8">
                    <div className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-green-500" />
                        <span className="text-sm font-medium text-gray-700">Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-gray-700">Cancel Anytime</span>
                    </div>
                </div>
            </div>

        </div>
    );
}
