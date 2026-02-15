import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { quizzes } from '../../data/quizzes';
import QuizInterface from '../../components/quiz/QuizInterface';
import QuizResult from '../../components/quiz/QuizResult';

export default function QuizPage() {
    const { quizId } = useParams();
    const navigate = useNavigate();
    const [quiz, setQuiz] = useState(null);
    const [isCompleted, setIsCompleted] = useState(false);
    const [userAnswers, setUserAnswers] = useState({});

    useEffect(() => {
        const foundQuiz = quizzes.find(q => q.id === parseInt(quizId));
        if (foundQuiz) {
            setQuiz(foundQuiz);
        } else {
            navigate('/student/dashboard');
        }
    }, [quizId, navigate]);

    const handleQuizComplete = (answers) => {
        setUserAnswers(answers);
        setIsCompleted(true);
        // Here you would typically save the result to the backend/context
    };

    const handleRetake = () => {
        setIsCompleted(false);
        setUserAnswers({});
    };

    if (!quiz) return <div className="p-8 text-center">Loading Quiz...</div>;

    return (
        <div className="py-8">
            {!isCompleted ? (
                <QuizInterface quiz={quiz} onComplete={handleQuizComplete} />
            ) : (
                <QuizResult quiz={quiz} userAnswers={userAnswers} onRetake={handleRetake} />
            )}
        </div>
    );
}
