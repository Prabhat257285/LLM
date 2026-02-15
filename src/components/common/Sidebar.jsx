import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
    LayoutDashboard,
    BookOpen,
    User,
    Settings,
    PlusCircle,
    Users,
    FileText
} from 'lucide-react';

const Sidebar = () => {
    const { user } = useAuth();

    if (!user) return null;

    const links = {
        student: [
            { name: 'Overview', path: '/student/dashboard', icon: LayoutDashboard },
            { name: 'My Courses', path: '/student/courses', icon: BookOpen },
            { name: 'Quizzes', path: '/student/quizzes', icon: FileText },
            { name: 'Profile', path: '/student/profile', icon: User },
            { name: 'Change Password', path: '/student/settings', icon: Settings },
        ],
        teacher: [
            { name: 'Dashboard', path: '/teacher/dashboard', icon: LayoutDashboard },
            { name: 'Create Course', path: '/teacher/create-course', icon: PlusCircle },
            { name: 'Manage Courses', path: '/teacher/courses', icon: BookOpen },
            { name: 'Profile', path: '/teacher/profile', icon: User },
        ],
        admin: [
            { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
            { name: 'Manage Users', path: '/admin/users', icon: Users },
            { name: 'Manage Courses', path: '/admin/courses', icon: BookOpen },
            { name: 'Reports', path: '/admin/reports', icon: FileText },
        ]
    };

    const roleLinks = links[user.role] || [];

    return (
        <aside className="w-64 bg-gray-900 text-white min-h-screen hidden md:flex flex-col">
            <div className="p-4 border-b border-gray-800">
                <h2 className="text-xl font-bold text-white">LMS Portal</h2>
                <p className="text-gray-400 text-sm capitalize">{user.role} Panel</p>
            </div>
            <nav className="flex-1 overflow-y-auto py-4">
                <ul className="space-y-1">
                    {roleLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors ${isActive ? 'bg-gray-800 text-white border-r-4 border-primary' : ''
                                    }`
                                }
                            >
                                <link.icon className="h-5 w-5 mr-3" />
                                <span>{link.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="p-4 border-t border-gray-800">
                <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                        {user.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-white">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
