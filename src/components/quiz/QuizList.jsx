import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { PlayCircle, BrainCircuit } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QuizList = ({ quizzes }) => {
    const navigate = useNavigate();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quizzes.map((quiz) => (
                <Card key={quiz.id} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-indigo-100 rounded-full">
                            <BrainCircuit className="h-6 w-6 text-indigo-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-500">{quiz.questions.length} Questions</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{quiz.title}</h3>
                    <p className="text-gray-600 text-sm mb-6">{quiz.description}</p>
                    <Button
                        variant="primary"
                        className="w-full justify-center flex items-center gap-2"
                        onClick={() => navigate(`/student/quiz/${quiz.id}`)}
                    >
                        <PlayCircle className="h-5 w-5" />
                        Start Quiz
                    </Button>
                </Card>
            ))}
        </div>
    );
};

export default QuizList;
