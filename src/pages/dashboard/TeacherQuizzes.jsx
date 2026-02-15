import React from 'react';
import Card from '../../components/ui/Card';
import { FileText, Plus, Edit, Trash2, BarChart3 } from 'lucide-react';
import { quizzes } from '../../data/quizzes';

export default function TeacherQuizzes() {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Quiz Management</h1>
                    <p className="text-gray-600 mt-1">Create and manage quizzes for your courses</p>
                </div>
                <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
                    <Plus className="h-5 w-5" />
                    Create New Quiz
                </button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">Total Quizzes</p>
                            <p className="text-3xl font-bold text-gray-900 mt-1">{quizzes.length}</p>
                        </div>
                        <FileText className="h-12 w-12 text-blue-600 opacity-20" />
                    </div>
                </Card>
                <Card className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">Total Questions</p>
                            <p className="text-3xl font-bold text-gray-900 mt-1">
                                {quizzes.reduce((sum, quiz) => sum + quiz.questions.length, 0)}
                            </p>
                        </div>
                        <BarChart3 className="h-12 w-12 text-green-600 opacity-20" />
                    </div>
                </Card>
                <Card className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">Avg Questions/Quiz</p>
                            <p className="text-3xl font-bold text-gray-900 mt-1">
                                {Math.round(quizzes.reduce((sum, quiz) => sum + quiz.questions.length, 0) / quizzes.length)}
                            </p>
                        </div>
                        <FileText className="h-12 w-12 text-indigo-600 opacity-20" />
                    </div>
                </Card>
            </div>

            {/* Quiz List */}
            <Card className="overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                    <h2 className="text-lg font-semibold text-gray-900">Your Quizzes</h2>
                </div>
                <div className="divide-y divide-gray-200">
                    {quizzes.map((quiz) => (
                        <div key={quiz.id} className="p-6 hover:bg-gray-50 transition-colors">
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{quiz.title}</h3>
                                    <p className="text-sm text-gray-600 mb-2">{quiz.description}</p>
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <span className="flex items-center gap-1">
                                            <FileText className="h-4 w-4" />
                                            {quiz.questions.length} questions
                                        </span>
                                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                                            Course ID: {quiz.courseId}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 ml-4">
                                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                        <Edit className="h-5 w-5" />
                                    </button>
                                    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                                        <BarChart3 className="h-5 w-5" />
                                    </button>
                                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                        <Trash2 className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>

            {/* Info Banner */}
            <Card className="mt-6 p-6 bg-blue-50 border border-blue-100">
                <p className="text-sm text-blue-800">
                    <strong>Note:</strong> This is a placeholder page. Full quiz creation and editing functionality will be available soon.
                </p>
            </Card>
        </div>
    );
}
