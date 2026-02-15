import React from 'react';
import { quizzes } from '../data/quizzes';
import QuizList from '../components/quiz/QuizList';
import Card from '../components/ui/Card';
import { Brain, Sparkles, TrendingUp } from 'lucide-react';

export default function PublicQuizzesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-4">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl shadow-lg">
                            <Brain className="h-12 w-12 text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        AI-Powered Quizzes
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                        Test your knowledge across multiple domains with our intelligent quiz system.
                        Get instant AI-generated hints and detailed explanations for every question.
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
                        <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
                            <Sparkles className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
                            <h3 className="font-semibold text-gray-900 mb-2">AI Hints</h3>
                            <p className="text-sm text-gray-600">
                                Get contextual hints powered by AI to help you learn
                            </p>
                        </Card>
                        <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
                            <Brain className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                            <h3 className="font-semibold text-gray-900 mb-2">Detailed Explanations</h3>
                            <p className="text-sm text-gray-600">
                                Understand the 'why' behind every answer
                            </p>
                        </Card>
                        <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
                            <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-3" />
                            <h3 className="font-semibold text-gray-900 mb-2">Track Progress</h3>
                            <p className="text-sm text-gray-600">
                                Monitor your learning journey across all topics
                            </p>
                        </Card>
                    </div>
                </div>

                {/* Quiz List */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Quizzes</h2>
                    <QuizList quizzes={quizzes} />
                </div>

                {/* CTA Section */}
                <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center text-white mt-12">
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
                    <p className="text-lg mb-6 opacity-90">
                        Sign up now to take quizzes, track your progress, and unlock your full potential!
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a
                            href="/register"
                            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Join for Free
                        </a>
                        <a
                            href="/login"
                            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                        >
                            Login
                        </a>
                    </div>
                </Card>
            </div>
        </div>
    );
}
