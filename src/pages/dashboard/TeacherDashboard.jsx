import React from 'react';
import { BookOpen, Users, Star, DollarSign } from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';

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

export default function TeacherDashboard() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Instructor Dashboard</h1>
                <Link to="/teacher/create-course">
                    <Button>Create New Course</Button>
                </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Total Students" value="1,234" icon={Users} color="bg-blue-500" />
                <StatCard title="Total Courses" value="8" icon={BookOpen} color="bg-green-500" />
                <StatCard title="Total Earnings" value="$12,450" icon={DollarSign} color="bg-purple-500" />
                <StatCard title="Average Rating" value="4.8" icon={Star} color="bg-yellow-500" />
            </div>

            {/* Recent Activity or Course Performance */}
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Sales</h2>
                <Card className="overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {[1, 2, 3].map((i) => (
                                <tr key={i}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Student {i}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">React Masterclass</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-02-15</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$99.99</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Card>
            </section>
        </div>
    );
}
