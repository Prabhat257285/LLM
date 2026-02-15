import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import ProtectedRoute from './ProtectedRoute';

import HomePage from '../pages/HomePage';
import CoursesPage from '../pages/CoursesPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import StudentDashboard from '../pages/dashboard/StudentDashboard';
import StudentCourses from '../pages/dashboard/StudentCourses';
import StudentProfile from '../pages/dashboard/StudentProfile';
import TeacherDashboard from '../pages/dashboard/TeacherDashboard';
import TeacherCreateCourse from '../pages/dashboard/TeacherCreateCourse';
import TeacherCourses from '../pages/dashboard/TeacherCourses';

import AdminDashboard from '../pages/dashboard/AdminDashboard';
import AdminUsers from '../pages/dashboard/AdminUsers';
import AdminCourses from '../pages/dashboard/AdminCourses';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/courses/:id" element={<CourseDetailsPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>

            {/* Protected Routes */}
            <Route element={<DashboardLayout />}>

                {/* Student Routes */}
                <Route element={<ProtectedRoute allowedRoles={['student']} />}>
                    <Route path="/student/dashboard" element={<StudentDashboard />} />
                    <Route path="/student/courses" element={<StudentCourses />} />
                    <Route path="/student/profile" element={<StudentProfile />} />
                </Route>

                {/* Teacher Routes */}
                <Route element={<ProtectedRoute allowedRoles={['teacher']} />}>
                    <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
                    <Route path="/teacher/create-course" element={<TeacherCreateCourse />} />
                    <Route path="/teacher/courses" element={<TeacherCourses />} />
                    <Route path="/teacher/profile" element={<StudentProfile />} /> {/* Reusing Profile for now */}
                </Route>

                {/* Admin Routes */}
                <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                    <Route path="/admin/users" element={<AdminUsers />} />
                    <Route path="/admin/courses" element={<AdminCourses />} />
                </Route>

            </Route>
        </Routes>
    );
};

export default AppRoutes;
