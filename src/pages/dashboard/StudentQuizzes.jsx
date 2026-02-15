import React from 'react';
import { quizzes } from '../../data/quizzes';
import QuizList from '../../components/quiz/QuizList';

export default function StudentQuizzes() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Available Quizzes</h1>
            <p className="text-gray-600 mb-8 max-w-2xl">
                Test your knowledge with our AI-powered quizzes. Get instant feedback and detailed explanations for every question to help you master the concepts.
            </p>
            <QuizList quizzes={quizzes} />
        </div>
    );
}
