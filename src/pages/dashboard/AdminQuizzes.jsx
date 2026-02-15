import React from 'react';
import Card from '../../components/ui/Card';
import { BarChart3, Users, TrendingUp, Award, FileText } from 'lucide-react';
import { quizzes } from '../../data/quizzes';

export default function AdminQuizzes() {
    // Mock analytics data
    const totalAttempts = 1247;
    const avgScore = 78;
    const completionRate = 85;

    return (
        <div>
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Quiz Analytics</h1>
                <p className="text-gray-600 mt-1">Monitor quiz performance and student engagement</p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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
                            <p className="text-sm text-gray-600">Total Attempts</p>
                            <p className="text-3xl font-bold text-gray-900 mt-1">{totalAttempts}</p>
                        </div>
                        <Users className="h-12 w-12 text-green-600 opacity-20" />
                    </div>
                </Card>
                <Card className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">Average Score</p>
                            <p className="text-3xl font-bold text-gray-900 mt-1">{avgScore}%</p>
                        </div>
                        <Award className="h-12 w-12 text-yellow-600 opacity-20" />
                    </div>
                </Card>
                <Card className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">Completion Rate</p>
                            <p className="text-3xl font-bold text-gray-900 mt-1">{completionRate}%</p>
                        </div>
                        <TrendingUp className="h-12 w-12 text-indigo-600 opacity-20" />
                    </div>
                </Card>
            </div>

            {/* Quiz Performance Table */}
            <Card className="overflow-hidden mb-6">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                    <h2 className="text-lg font-semibold text-gray-900">Quiz Performance Overview</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Quiz Title
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Questions
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Attempts
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Avg Score
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Completion
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {quizzes.map((quiz, index) => {
                                const attempts = Math.floor(Math.random() * 200) + 50;
                                const score = Math.floor(Math.random() * 30) + 65;
                                const completion = Math.floor(Math.random() * 20) + 75;

                                return (
                                    <tr key={quiz.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">{quiz.title}</div>
                                            <div className="text-sm text-gray-500">{quiz.description.substring(0, 50)}...</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {quiz.questions.length}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {attempts}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${score >= 80 ? 'bg-green-100 text-green-800' :
                                                    score >= 70 ? 'bg-yellow-100 text-yellow-800' :
                                                        'bg-red-100 text-red-800'
                                                }`}>
                                                {score}%
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {completion}%
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <button className="text-blue-600 hover:text-blue-900 font-medium">
                                                View Details
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </Card>

            {/* Info Banner */}
            <Card className="p-6 bg-indigo-50 border border-indigo-100">
                <p className="text-sm text-indigo-800">
                    <strong>Note:</strong> This is a placeholder page with mock data. Real-time analytics and detailed reports will be available soon.
                </p>
            </Card>
        </div>
    );
}
