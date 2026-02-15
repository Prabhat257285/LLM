import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import ProtectedRoute from './ProtectedRoute';

import HomePage from '../pages/HomePage';
import CoursesPage from '../pages/CoursesPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import PublicQuizzesPage from '../pages/PublicQuizzesPage';
import StudentDashboard from '../pages/dashboard/StudentDashboard';
import StudentCourses from '../pages/dashboard/StudentCourses';
import StudentProfile from '../pages/dashboard/StudentProfile';
import StudentQuizzes from '../pages/dashboard/StudentQuizzes';
import QuizPage from '../pages/dashboard/QuizPage';
import TeacherDashboard from '../pages/dashboard/TeacherDashboard';
import TeacherCreateCourse from '../pages/dashboard/TeacherCreateCourse';
import TeacherCourses from '../pages/dashboard/TeacherCourses';
import TeacherQuizzes from '../pages/dashboard/TeacherQuizzes';

import AdminDashboard from '../pages/dashboard/AdminDashboard';
import AdminUsers from '../pages/dashboard/AdminUsers';
import AdminCourses from '../pages/dashboard/AdminCourses';
import AdminQuizzes from '../pages/dashboard/AdminQuizzes';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/courses/:id" element={<CourseDetailsPage />} />
                <Route path="/quizzes" element={<PublicQuizzesPage />} />
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
                    <Route path="/student/quizzes" element={<StudentQuizzes />} />
                    <Route path="/student/quiz/:quizId" element={<QuizPage />} />
                </Route>

                {/* Teacher Routes */}
                <Route element={<ProtectedRoute allowedRoles={['teacher']} />}>
                    <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
                    <Route path="/teacher/create-course" element={<TeacherCreateCourse />} />
                    <Route path="/teacher/courses" element={<TeacherCourses />} />
                    <Route path="/teacher/quizzes" element={<TeacherQuizzes />} />
                    <Route path="/teacher/profile" element={<StudentProfile />} /> {/* Reusing Profile for now */}
                </Route>

                {/* Admin Routes */}
                <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                    <Route path="/admin/users" element={<AdminUsers />} />
                    <Route path="/admin/courses" element={<AdminCourses />} />
                    <Route path="/admin/quizzes" element={<AdminQuizzes />} />
                </Route>

            </Route>
        </Routes>
    );
};

export default AppRoutes;
