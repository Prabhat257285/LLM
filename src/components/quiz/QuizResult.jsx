import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Check, X, ShieldCheck, RefreshCw, ArrowLeft, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QuizResult = ({ quiz, userAnswers, onRetake }) => {
    const navigate = useNavigate();
    let score = 0;

    quiz.questions.forEach(q => {
        if (userAnswers[q.id] === q.correctAnswer) {
            score++;
        }
    });

    const percentage = Math.round((score / quiz.questions.length) * 100);

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-md mb-6">
                    <div className={`w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold border-4 ${percentage >= 70 ? 'border-green-500 text-green-600' : 'border-orange-500 text-orange-600'}`}>
                        {percentage}%
                    </div>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Quiz Completed!</h1>
                <p className="text-gray-500">You scored {score} out of {quiz.questions.length}</p>
            </div>

            <div className="space-y-8">
                {quiz.questions.map((q, index) => {
                    const isCorrect = userAnswers[q.id] === q.correctAnswer;
                    return (
                        <Card key={q.id} className={`p-6 border-l-4 ${isCorrect ? 'border-l-green-500' : 'border-l-red-500'}`}>
                            <div className="flex items-start">
                                <div className={`p-2 rounded-full mr-4 flex-shrink-0 ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                                    {isCorrect ? <Check className="h-5 w-5 text-green-600" /> : <X className="h-5 w-5 text-red-600" />}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                                        {index + 1}. {q.text}
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div className={`p-3 rounded-md border ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                                            <span className="text-xs text-gray-500 block mb-1">Your Answer</span>
                                            <span className={`font-medium ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                                                {q.options[userAnswers[q.id]]}
                                            </span>
                                        </div>
                                        {!isCorrect && (
                                            <div className="p-3 rounded-md border bg-green-50 border-green-200">
                                                <span className="text-xs text-gray-500 block mb-1">Correct Answer</span>
                                                <span className="font-medium text-green-700">
                                                    {q.options[q.correctAnswer]}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* AI Insight Block */}
                                    <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                                        <div className="flex items-center mb-2">
                                            <Brain className="h-4 w-4 text-indigo-600 mr-2" />
                                            <span className="text-xs font-bold text-indigo-800 uppercase tracking-wide">AI Analysis</span>
                                        </div>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            {q.aiExplanation}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>

            <div className="mt-10 flex justify-center space-x-4">
                <Button variant="outline" onClick={() => navigate('/student/dashboard')}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Dashboard
                </Button>
                <Button variant="primary" onClick={onRetake}>
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Retake Quiz
                </Button>
            </div>
        </div>
    );
};

export default QuizResult;
