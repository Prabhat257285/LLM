import React from 'react';
import { Users, BookOpen, AlertCircle, Activity } from 'lucide-react';
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

export default function AdminDashboard() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Admin Overview</h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Total Users" value="5,432" icon={Users} color="bg-blue-500" />
                <StatCard title="Active Courses" value="120" icon={BookOpen} color="bg-green-500" />
                <StatCard title="Pending Approvals" value="12" icon={AlertCircle} color="bg-yellow-500" />
                <StatCard title="System Health" value="99.9%" icon={Activity} color="bg-purple-500" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6">
                    <h3 className="text-lg font-bold mb-4">New Users</h3>
                    {/* Chart placeholder */}
                    <div className="h-64 bg-gray-100 flex items-center justify-center text-gray-500">
                        Chart Placeholder
                    </div>
                </Card>
                <Card className="p-6">
                    <h3 className="text-lg font-bold mb-4">Revenue Growth</h3>
                    {/* Chart placeholder */}
                    <div className="h-64 bg-gray-100 flex items-center justify-center text-gray-500">
                        Chart Placeholder
                    </div>
                </Card>
            </div>
        </div>
    );
}
