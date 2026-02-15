import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Lightbulb, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';

const QuizInterface = ({ quiz, onComplete }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showHint, setShowHint] = useState(false);

    const currentQuestion = quiz.questions[currentQuestionIndex];
    const totalQuestions = quiz.questions.length;
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

    const handleOptionSelect = (optionIndex) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [currentQuestion.id]: optionIndex
        });
    };

    const handleNext = () => {
        setShowHint(false);
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            onComplete(selectedAnswers);
        }
    };

    return (
        <div className="max-w-3xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-6 bg-gray-200 rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
            </div>

            <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-gray-500">Question {currentQuestionIndex + 1} of {totalQuestions}</span>
                <span className="text-sm font-medium text-primary bg-blue-50 px-3 py-1 rounded-full">{quiz.title}</span>
            </div>

            <Card className="p-8 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">{currentQuestion.text}</h2>

                <div className="space-y-4">
                    {currentQuestion.options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => handleOptionSelect(index)}
                            className={`p-4 border-2 rounded-lg cursor-pointer transition-all flex items-center ${selectedAnswers[currentQuestion.id] === index
                                    ? 'border-primary bg-blue-50'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                        >
                            <div className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center ${selectedAnswers[currentQuestion.id] === index ? 'border-primary' : 'border-gray-400'
                                }`}>
                                {selectedAnswers[currentQuestion.id] === index && <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>}
                            </div>
                            <span className={`font-medium ${selectedAnswers[currentQuestion.id] === index ? 'text-primary' : 'text-gray-700'}`}>
                                {option}
                            </span>
                        </div>
                    ))}
                </div>
            </Card>

            {/* AI Hint Section */}
            <div className="mb-6">
                {!showHint ? (
                    <button
                        onClick={() => setShowHint(true)}
                        className="flex items-center text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                    >
                        <Sparkles className="h-4 w-4 mr-2" />
                        Ask AI for a Hint
                    </button>
                ) : (
                    <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-lg flex items-start animate-fade-in">
                        <Lightbulb className="h-5 w-5 text-indigo-600 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="text-xs font-bold text-indigo-800 uppercase tracking-wide mb-1">AI Hint</p>
                            <p className="text-sm text-indigo-700">{currentQuestion.aiHint}</p>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex justify-end">
                <Button
                    variant="primary"
                    onClick={handleNext}
                    disabled={selectedAnswers[currentQuestion.id] === undefined}
                    className="px-8"
                >
                    {currentQuestionIndex === totalQuestions - 1 ? 'Finish Quiz' : 'Next Question'}
                </Button>
            </div>
        </div>
    );
};

export default QuizInterface;
