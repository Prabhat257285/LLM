import React from 'react';
import { BookOpen, CheckCircle, Clock, Trophy } from 'lucide-react';
import Card from '../../components/ui/Card';

const StatCard = ({ title, value, icon: Icon, color }) => (
    <Card className="p-6 flex items-center">
        <div className={`p-4 rounded-full ${color} mr-4`}>
            <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
            <p className="text-gray-500 text-sm">{title}</p>
            <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        </div>
    </Card>
);

export default function StudentDashboard() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Welcome back, Student!</h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Enrolled Courses" value="5" icon={BookOpen} color="bg-blue-500" />
                <StatCard title="Completed" value="2" icon={CheckCircle} color="bg-green-500" />
                <StatCard title="Hours Learning" value="34" icon={Clock} color="bg-purple-500" />
                <StatCard title="Certificates" value="2" icon={Trophy} color="bg-yellow-500" />
            </div>

            {/* Progress Section */}
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Continue Learning</h2>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                        <span className="font-medium">Full Stack Web Development</span>
                        <span className="text-sm text-gray-500">65% Complete</span>
                    </div>
                    <div className="p-4">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                        <button className="text-primary text-sm font-medium hover:underline">Continue Lecture &rarr;</button>
                    </div>
                </div>
                <div className="mt-4 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                        <span className="font-medium">Python for Data Science</span>
                        <span className="text-sm text-gray-500">30% Complete</span>
                    </div>
                    <div className="p-4">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                            <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                        </div>
                        <button className="text-primary text-sm font-medium hover:underline">Continue Lecture &rarr;</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
