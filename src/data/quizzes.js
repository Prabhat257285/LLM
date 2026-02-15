export const quizzes = [
    {
        id: 1,
        title: "React Fundamentals",
        courseId: 1,
        description: "Test your knowledge of React components, props, and state.",
        questions: [
            {
                id: 1,
                text: "What is the primary purpose of React?",
                options: ["To manage database connections", "To build user interfaces", "To handle server-side logic", "To create mobile apps only"],
                correctAnswer: 1,
                aiHint: "Think about what part of the application React interacts with directly (Frontend vs Backend).",
                aiExplanation: "React is a JavaScript library specifically designed for building user interfaces (UI), focusing on the view layer of web applications."
            },
            {
                id: 2,
                text: "Which hook is used to manage state in a functional component?",
                options: ["useEffect", "useContext", "useState", "useReducer"],
                correctAnswer: 2,
                aiHint: "The name of the hook literally contains the word 'state'.",
                aiExplanation: "The `useState` hook allows you to add state variables to functional components. `useEffect` is for side effects, and `useContext` is for context API."
            },
            {
                id: 3,
                text: "What is JSX?",
                options: ["A new HTML standard", "A syntax extension for JavaScript", "A CSS preprocessor", "A database query language"],
                correctAnswer: 1,
                aiHint: "It looks like HTML, but it lives inside JavaScript code.",
                aiExplanation: "JSX stands for JavaScript XML. It allows us to write HTML-like syntax directly within JavaScript, which React then transforms into valid JavaScript function calls."
            }
        ]
    },
    {
        id: 2,
        title: "JavaScript Essentials",
        courseId: 1,
        description: "Core concepts of JavaScript: ES6+, Async/Await, and DOM manipulation.",
        questions: [
            {
                id: 1,
                text: "What does 'DOM' stand for?",
                options: ["Document Object Model", "Data Object Mode", "Digital Ordinance Model", "Desktop Orientation Module"],
                correctAnswer: 0,
                aiHint: "It refers to the structure of the HTML document as a tree of objects.",
                aiExplanation: "DOM stands for Document Object Model. It is a programming interface for web documents, representing the page so that programs can change the document structure, style, and content."
            },
            {
                id: 2,
                text: "Which keyword is used to declare a constant variable?",
                options: ["var", "let", "const", "static"],
                correctAnswer: 2,
                aiHint: "Think of a value that remains 'constant' and cannot be reassigned.",
                aiExplanation: "`const` is used to declare variables that are not intended to be reassigned. `let` is for variables that can change, and `var` is the detailed-functional declaration."
            }
        ]
    },
    {
        id: 3,
        title: "Cyber Security Basics",
        courseId: 3,
        description: "Introduction to threats, vulnerabilities, and basic defense mechanisms.",
        questions: [
            {
                id: 1,
                text: "What does Phishing involve?",
                options: ["Fishing for data in a lake", "Deceptive emails to steal sensitive info", "Testing firewall strength", "Encrypting hard drives"],
                correctAnswer: 1,
                aiHint: "It involves 'baiting' a user via email or message.",
                aiExplanation: "Phishing is a cyber attack that uses disguised email as a weapon. The goal is to trick the email recipient into believing that the message is something they want or need."
            },
            {
                id: 2,
                text: "What is a Firewall?",
                options: ["A physical wall to stop fire", "Software/Hardware that filters network traffic", "A virus removal tool", "A password manager"],
                correctAnswer: 1,
                aiHint: "It acts as a barrier between a trusted and an untrusted network.",
                aiExplanation: "A Firewall is a network security device that monitors incoming and outgoing network traffic and decides whether to allow or block specific traffic based on a defined set of security rules."
            }
        ]
    },
    {
        id: 4,
        title: "Data Science 101",
        courseId: 2,
        description: "Basics of Python and Data Analysis.",
        questions: [
            {
                id: 1,
                text: "Which library is standard for data manipulation in Python?",
                options: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
                correctAnswer: 1,
                aiHint: "Its name is derived from 'Panel Data'.",
                aiExplanation: "Pandas is the go-to library for data manipulation and analysis in Python, providing data structures like DataFrames."
            }
        ]
    },
    {
        id: 5,
        title: "AWS Cloud Practitioner",
        courseId: 4,
        description: "Fundamental concepts of AWS Cloud.",
        questions: [
            {
                id: 1,
                text: "What is EC2?",
                options: ["Elastic Compute Cloud", "Elastic Container Cloud", "Easy Compute Cloud", "Elastic Code Cloud"],
                correctAnswer: 0,
                aiHint: "It provides resizable compute capacity in the cloud.",
                aiExplanation: "Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud."
            }
        ]
    }
];
