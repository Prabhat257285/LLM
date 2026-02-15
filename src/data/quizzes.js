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
            },
            {
                id: 4,
                text: "How do you pass data from a parent component to a child component?",
                options: ["Using state", "Using props", "Using context", "Using refs"],
                correctAnswer: 1,
                aiHint: "Think about the mechanism for one-way data flow in React.",
                aiExplanation: "Props (short for properties) are the primary way to pass data from parent to child components in React, enabling a unidirectional data flow."
            },
            {
                id: 5,
                text: "What does the useEffect hook do?",
                options: ["Manages component state", "Handles side effects", "Creates context", "Optimizes performance"],
                correctAnswer: 1,
                aiHint: "Consider operations like API calls, subscriptions, or DOM manipulation.",
                aiExplanation: "useEffect is used to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. It runs after render."
            },
            {
                id: 6,
                text: "What is the Virtual DOM?",
                options: ["A copy of the real DOM kept in memory", "A new browser API", "A CSS framework", "A testing library"],
                correctAnswer: 0,
                aiHint: "React uses this to optimize rendering performance.",
                aiExplanation: "The Virtual DOM is a lightweight copy of the actual DOM kept in memory. React uses it to calculate the minimal changes needed before updating the real DOM, improving performance."
            },
            {
                id: 7,
                text: "Which method is called after a component is rendered for the first time?",
                options: ["componentWillMount", "componentDidMount", "componentDidUpdate", "componentWillUnmount"],
                correctAnswer: 1,
                aiHint: "Think about the lifecycle method that runs 'after' the component 'mounts'.",
                aiExplanation: "componentDidMount is called immediately after a component is mounted (inserted into the DOM tree). It's commonly used for API calls and subscriptions."
            },
            {
                id: 8,
                text: "What is the purpose of keys in React lists?",
                options: ["To style list items", "To help React identify which items have changed", "To sort the list", "To encrypt data"],
                correctAnswer: 1,
                aiHint: "Keys help React optimize rendering when lists change.",
                aiExplanation: "Keys help React identify which items in a list have changed, been added, or removed. This allows React to efficiently update only the changed elements rather than re-rendering the entire list."
            },
            {
                id: 9,
                text: "What is prop drilling?",
                options: ["A performance optimization technique", "Passing props through multiple component layers", "A debugging tool", "A state management pattern"],
                correctAnswer: 1,
                aiHint: "Think about passing data through components that don't need it.",
                aiExplanation: "Prop drilling refers to the process of passing props through multiple levels of components to reach a deeply nested component, even when intermediate components don't use those props."
            },
            {
                id: 10,
                text: "What does React.memo do?",
                options: ["Stores data in memory", "Prevents unnecessary re-renders", "Creates memoized callbacks", "Manages component state"],
                correctAnswer: 1,
                aiHint: "It's a performance optimization for functional components.",
                aiExplanation: "React.memo is a higher-order component that memoizes the result. It prevents a functional component from re-rendering if its props haven't changed, improving performance."
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
            },
            {
                id: 3,
                text: "What is a closure in JavaScript?",
                options: ["A way to close the browser", "A function with access to its outer scope", "A loop termination", "A CSS property"],
                correctAnswer: 1,
                aiHint: "Think about functions that 'remember' variables from their parent scope.",
                aiExplanation: "A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned. This is a powerful feature in JavaScript."
            },
            {
                id: 4,
                text: "What does the 'async' keyword do?",
                options: ["Makes code run faster", "Makes a function return a Promise", "Stops code execution", "Deletes variables"],
                correctAnswer: 1,
                aiHint: "It's related to asynchronous programming and Promises.",
                aiExplanation: "The `async` keyword before a function makes it return a Promise. It allows you to use `await` inside the function to pause execution until a Promise resolves."
            },
            {
                id: 5,
                text: "What is the difference between '==' and '===' in JavaScript?",
                options: ["No difference", "=== checks type and value, == only checks value", "== is faster", "=== is deprecated"],
                correctAnswer: 1,
                aiHint: "One performs type coercion, the other doesn't.",
                aiExplanation: "`===` (strict equality) checks both value and type, while `==` (loose equality) performs type coercion before comparison. It's recommended to use `===` to avoid unexpected behavior."
            },
            {
                id: 6,
                text: "What is the purpose of the 'spread operator' (...)?",
                options: ["To delete arrays", "To expand iterables into individual elements", "To multiply numbers", "To concatenate strings"],
                correctAnswer: 1,
                aiHint: "It 'spreads' array or object elements.",
                aiExplanation: "The spread operator (...) expands an iterable (like an array or object) into individual elements. It's useful for copying arrays, merging objects, and passing array elements as function arguments."
            },
            {
                id: 7,
                text: "What is event bubbling?",
                options: ["Creating bubble animations", "Events propagating from child to parent elements", "A sorting algorithm", "A memory leak"],
                correctAnswer: 1,
                aiHint: "Think about how events travel through the DOM tree.",
                aiExplanation: "Event bubbling is when an event triggered on a child element propagates up through its parent elements. This allows parent elements to handle events from their children."
            },
            {
                id: 8,
                text: "What does 'hoisting' mean in JavaScript?",
                options: ["Lifting heavy objects", "Variable and function declarations are moved to the top", "Optimizing code", "Deleting unused code"],
                correctAnswer: 1,
                aiHint: "It's about when declarations are processed during code execution.",
                aiExplanation: "Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before code execution. However, only declarations are hoisted, not initializations."
            },
            {
                id: 9,
                text: "What is the purpose of 'Promise.all()'?",
                options: ["To reject all promises", "To wait for all promises to resolve", "To create new promises", "To cancel promises"],
                correctAnswer: 1,
                aiHint: "It handles multiple promises simultaneously.",
                aiExplanation: "`Promise.all()` takes an array of promises and returns a single Promise that resolves when all input promises have resolved, or rejects if any promise rejects."
            },
            {
                id: 10,
                text: "What is the 'this' keyword in JavaScript?",
                options: ["A variable name", "A reference to the current execution context", "A loop counter", "A data type"],
                correctAnswer: 1,
                aiHint: "It refers to the object that is executing the current function.",
                aiExplanation: "The `this` keyword refers to the object that is currently executing the function. Its value depends on how the function is called (method, regular function, arrow function, etc.)."
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
            },
            {
                id: 3,
                text: "What is encryption?",
                options: ["Deleting files permanently", "Converting data into a coded format", "Backing up data", "Scanning for viruses"],
                correctAnswer: 1,
                aiHint: "It makes data unreadable without a key.",
                aiExplanation: "Encryption is the process of converting information into a secret code (ciphertext) that hides the information's true meaning. Only authorized parties with the decryption key can read it."
            },
            {
                id: 4,
                text: "What is two-factor authentication (2FA)?",
                options: ["Using two passwords", "Adding an extra layer of security beyond password", "Having two user accounts", "Logging in twice"],
                correctAnswer: 1,
                aiHint: "It requires two different types of verification.",
                aiExplanation: "Two-factor authentication adds an extra layer of security by requiring two different authentication factors: something you know (password) and something you have (phone, token) or are (biometric)."
            },
            {
                id: 5,
                text: "What is malware?",
                options: ["A type of hardware", "Malicious software designed to harm systems", "A programming language", "A network protocol"],
                correctAnswer: 1,
                aiHint: "It's short for 'malicious software'.",
                aiExplanation: "Malware is any software intentionally designed to cause damage to a computer, server, client, or computer network. Types include viruses, worms, trojans, ransomware, and spyware."
            },
            {
                id: 6,
                text: "What is a DDoS attack?",
                options: ["Distributed Denial of Service", "Direct Data Override System", "Digital Defense Operation", "Database Deletion Service"],
                correctAnswer: 0,
                aiHint: "It overwhelms a system with traffic from multiple sources.",
                aiExplanation: "A DDoS (Distributed Denial of Service) attack attempts to make a service unavailable by overwhelming it with traffic from multiple sources, preventing legitimate users from accessing it."
            },
            {
                id: 7,
                text: "What is the principle of 'least privilege'?",
                options: ["Everyone gets admin access", "Users get only the minimum access needed", "No one has any privileges", "Privileges are randomly assigned"],
                correctAnswer: 1,
                aiHint: "It's about minimizing access rights to reduce security risks.",
                aiExplanation: "The principle of least privilege means giving users only the minimum levels of access needed to perform their job functions. This reduces the attack surface and potential damage from compromised accounts."
            },
            {
                id: 8,
                text: "What is a VPN?",
                options: ["Very Private Network", "Virtual Private Network", "Verified Public Network", "Variable Protocol Node"],
                correctAnswer: 1,
                aiHint: "It creates a secure, encrypted connection over the internet.",
                aiExplanation: "A VPN (Virtual Private Network) creates a secure, encrypted connection between your device and a remote server, hiding your IP address and protecting your data from interception."
            },
            {
                id: 9,
                text: "What is social engineering in cybersecurity?",
                options: ["Building social networks", "Manipulating people to divulge confidential information", "Engineering social media apps", "Creating user profiles"],
                correctAnswer: 1,
                aiHint: "It exploits human psychology rather than technical vulnerabilities.",
                aiExplanation: "Social engineering is the psychological manipulation of people into performing actions or divulging confidential information. It exploits human trust rather than technical hacking techniques."
            },
            {
                id: 10,
                text: "What is ransomware?",
                options: ["Free software", "Malware that encrypts files and demands payment", "A backup tool", "An antivirus program"],
                correctAnswer: 1,
                aiHint: "It holds your data hostage for money.",
                aiExplanation: "Ransomware is a type of malware that encrypts a victim's files and demands payment (ransom) to restore access. It's one of the most damaging types of cyberattacks for businesses and individuals."
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
            },
            {
                id: 2,
                text: "What is a DataFrame in pandas?",
                options: ["A type of chart", "A 2D labeled data structure", "A machine learning model", "A database"],
                correctAnswer: 1,
                aiHint: "Think of it like a spreadsheet or SQL table.",
                aiExplanation: "A DataFrame is a 2-dimensional labeled data structure with columns of potentially different types, similar to a spreadsheet or SQL table. It's the most commonly used pandas object."
            },
            {
                id: 3,
                text: "What does NumPy primarily provide?",
                options: ["Web scraping tools", "Support for large multi-dimensional arrays", "Database connections", "GUI frameworks"],
                correctAnswer: 1,
                aiHint: "It's fundamental for numerical computing in Python.",
                aiExplanation: "NumPy provides support for large, multi-dimensional arrays and matrices, along with mathematical functions to operate on these arrays efficiently."
            },
            {
                id: 4,
                text: "Which library is used for data visualization in Python?",
                options: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
                correctAnswer: 2,
                aiHint: "It's the most widely used plotting library in Python.",
                aiExplanation: "Matplotlib is a comprehensive library for creating static, animated, and interactive visualizations in Python. It's the foundation for many other plotting libraries."
            },
            {
                id: 5,
                text: "What is the purpose of train-test split in machine learning?",
                options: ["To delete data", "To evaluate model performance on unseen data", "To clean data", "To visualize data"],
                correctAnswer: 1,
                aiHint: "It helps prevent overfitting and assess generalization.",
                aiExplanation: "Train-test split divides data into training and testing sets. The model learns from training data and is evaluated on testing data to assess how well it generalizes to new, unseen data."
            },
            {
                id: 6,
                text: "What is overfitting in machine learning?",
                options: ["Model is too simple", "Model performs well on training but poorly on new data", "Model has too little data", "Model trains too fast"],
                correctAnswer: 1,
                aiHint: "The model memorizes training data instead of learning patterns.",
                aiExplanation: "Overfitting occurs when a model learns the training data too well, including noise and outliers, resulting in poor performance on new, unseen data."
            },
            {
                id: 7,
                text: "What is the difference between supervised and unsupervised learning?",
                options: ["No difference", "Supervised uses labeled data, unsupervised doesn't", "Unsupervised is faster", "Supervised is deprecated"],
                correctAnswer: 1,
                aiHint: "Think about whether the training data has known outcomes.",
                aiExplanation: "Supervised learning uses labeled data (input-output pairs) to train models, while unsupervised learning finds patterns in unlabeled data without predefined outcomes."
            },
            {
                id: 8,
                text: "What is a correlation coefficient?",
                options: ["A type of chart", "A measure of relationship between two variables", "A machine learning algorithm", "A data cleaning technique"],
                correctAnswer: 1,
                aiHint: "It measures how two variables move together.",
                aiExplanation: "A correlation coefficient is a statistical measure that describes the strength and direction of the relationship between two variables, ranging from -1 to +1."
            },
            {
                id: 9,
                text: "What is feature engineering?",
                options: ["Building hardware", "Creating new features from existing data", "Deleting features", "Visualizing features"],
                correctAnswer: 1,
                aiHint: "It's about transforming raw data into better predictors.",
                aiExplanation: "Feature engineering is the process of using domain knowledge to create new features from raw data that make machine learning algorithms work better and improve model performance."
            },
            {
                id: 10,
                text: "What is the purpose of normalization in data science?",
                options: ["To delete outliers", "To scale features to a similar range", "To add more data", "To visualize data"],
                correctAnswer: 1,
                aiHint: "It helps when features have different scales or units.",
                aiExplanation: "Normalization scales numerical features to a similar range (often 0-1), preventing features with larger scales from dominating the model and improving algorithm performance."
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
            },
            {
                id: 2,
                text: "What is Amazon S3 used for?",
                options: ["Running virtual servers", "Object storage", "Database management", "Email services"],
                correctAnswer: 1,
                aiHint: "It's designed for storing and retrieving any amount of data.",
                aiExplanation: "Amazon S3 (Simple Storage Service) is an object storage service offering scalability, data availability, security, and performance for storing and retrieving any amount of data."
            },
            {
                id: 3,
                text: "What does IAM stand for in AWS?",
                options: ["Internet Access Management", "Identity and Access Management", "Integrated Application Manager", "Internal API Module"],
                correctAnswer: 1,
                aiHint: "It controls who can access your AWS resources.",
                aiExplanation: "IAM (Identity and Access Management) enables you to manage access to AWS services and resources securely, controlling authentication and authorization."
            },
            {
                id: 4,
                text: "What is AWS Lambda?",
                options: ["A database service", "A serverless compute service", "A storage service", "A networking service"],
                correctAnswer: 1,
                aiHint: "You run code without provisioning or managing servers.",
                aiExplanation: "AWS Lambda is a serverless compute service that runs your code in response to events and automatically manages the underlying compute resources for you."
            },
            {
                id: 5,
                text: "What is the AWS Free Tier?",
                options: ["A paid subscription", "Free access to certain AWS services with limits", "A premium support plan", "A certification program"],
                correctAnswer: 1,
                aiHint: "It allows you to try AWS services at no cost.",
                aiExplanation: "The AWS Free Tier provides customers the ability to explore and try out AWS services free of charge up to specified limits for each service."
            },
            {
                id: 6,
                text: "What is Amazon RDS?",
                options: ["Relational Database Service", "Remote Desktop Service", "Resource Distribution System", "Real-time Data Stream"],
                correctAnswer: 0,
                aiHint: "It makes it easier to set up and operate relational databases.",
                aiExplanation: "Amazon RDS (Relational Database Service) makes it easy to set up, operate, and scale a relational database in the cloud, supporting multiple database engines."
            },
            {
                id: 7,
                text: "What is a VPC in AWS?",
                options: ["Virtual Private Cloud", "Very Powerful Computer", "Variable Processing Core", "Verified Public Certificate"],
                correctAnswer: 0,
                aiHint: "It's your own isolated network within AWS.",
                aiExplanation: "Amazon VPC (Virtual Private Cloud) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define."
            },
            {
                id: 8,
                text: "What is CloudWatch used for?",
                options: ["Video streaming", "Monitoring and observability", "Code deployment", "Database backup"],
                correctAnswer: 1,
                aiHint: "It helps you monitor your AWS resources and applications.",
                aiExplanation: "Amazon CloudWatch is a monitoring and observability service that provides data and actionable insights to monitor applications, respond to system-wide performance changes, and optimize resource utilization."
            },
            {
                id: 9,
                text: "What is the benefit of cloud computing's elasticity?",
                options: ["Fixed costs", "Ability to scale resources up or down as needed", "Slower performance", "Manual configuration"],
                correctAnswer: 1,
                aiHint: "Think about adapting to changing demand automatically.",
                aiExplanation: "Elasticity in cloud computing allows you to quickly scale resources up or down based on demand, ensuring you have the right amount of resources when you need them and reducing costs when you don't."
            },
            {
                id: 10,
                text: "What is Amazon CloudFront?",
                options: ["A database", "A Content Delivery Network (CDN)", "A compute service", "An email service"],
                correctAnswer: 1,
                aiHint: "It delivers content to users with low latency.",
                aiExplanation: "Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds."
            }
        ]
    },
    {
        id: 6,
        title: "DevOps Methodology",
        courseId: 5,
        description: "Understand the culture and tools of DevOps.",
        questions: [
            {
                id: 1,
                text: "What is the main goal of CI/CD?",
                options: ["To slow down deployment", "To automate software delivery", "To manual test every code change", "To reduce code quality"],
                correctAnswer: 1,
                aiHint: "It stands for Continuous Integration and Continuous Delivery.",
                aiExplanation: "CI/CD bridges the gaps between development and operation activities and teams by enforcing automation in building, testing and deployment of applications."
            },
            {
                id: 2,
                text: "Which tool is commonly used for containerization?",
                options: ["Jenkins", "Docker", "Git", "Nagios"],
                correctAnswer: 1,
                aiHint: "Its logo is a whale carrying containers.",
                aiExplanation: "Docker is a platform designed to help developers build, share, and run modern applications. It handles the tedious setup, so you can focus on the code."
            },
            {
                id: 3,
                text: "What is Kubernetes?",
                options: ["A programming language", "A container orchestration platform", "A database", "A code editor"],
                correctAnswer: 1,
                aiHint: "It manages and automates containerized applications.",
                aiExplanation: "Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications."
            },
            {
                id: 4,
                text: "What is Infrastructure as Code (IaC)?",
                options: ["Writing code in infrastructure", "Managing infrastructure through code", "Building physical servers", "Manual server configuration"],
                correctAnswer: 1,
                aiHint: "It treats infrastructure like software code.",
                aiExplanation: "Infrastructure as Code is the practice of managing and provisioning infrastructure through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools."
            },
            {
                id: 5,
                text: "What is the purpose of version control?",
                options: ["To delete code", "To track changes and collaborate on code", "To slow down development", "To encrypt code"],
                correctAnswer: 1,
                aiHint: "Think about Git and tracking code history.",
                aiExplanation: "Version control systems track changes to code over time, enable collaboration among developers, and allow reverting to previous versions if needed. Git is the most popular version control system."
            },
            {
                id: 6,
                text: "What is a microservices architecture?",
                options: ["Very small code files", "Breaking applications into small, independent services", "A type of database", "A programming paradigm"],
                correctAnswer: 1,
                aiHint: "It's the opposite of a monolithic architecture.",
                aiExplanation: "Microservices architecture structures an application as a collection of small, loosely coupled, independently deployable services, each running in its own process and communicating via APIs."
            },
            {
                id: 7,
                text: "What is Jenkins primarily used for?",
                options: ["Database management", "Continuous Integration/Continuous Deployment", "Code editing", "Network monitoring"],
                correctAnswer: 1,
                aiHint: "It automates the build and deployment pipeline.",
                aiExplanation: "Jenkins is an open-source automation server used to automate parts of software development related to building, testing, and deploying, facilitating continuous integration and continuous delivery."
            },
            {
                id: 8,
                text: "What is the purpose of monitoring in DevOps?",
                options: ["To spy on developers", "To track application performance and detect issues", "To slow down systems", "To delete logs"],
                correctAnswer: 1,
                aiHint: "It helps maintain system health and performance.",
                aiExplanation: "Monitoring in DevOps involves tracking application and infrastructure performance, detecting issues early, and providing insights for optimization and troubleshooting."
            },
            {
                id: 9,
                text: "What is a Docker image?",
                options: ["A photo of a whale", "A template for creating containers", "A type of server", "A monitoring tool"],
                correctAnswer: 1,
                aiHint: "It's like a blueprint for containers.",
                aiExplanation: "A Docker image is a lightweight, standalone, executable package that includes everything needed to run a piece of software: code, runtime, libraries, and dependencies."
            },
            {
                id: 10,
                text: "What does 'shift left' mean in DevOps?",
                options: ["Moving servers to the left", "Testing and security earlier in development", "Delaying deployment", "Moving to a different office"],
                correctAnswer: 1,
                aiHint: "It's about catching issues earlier in the development cycle.",
                aiExplanation: "'Shift left' means moving testing, security, and quality assurance activities earlier in the software development lifecycle to catch and fix issues sooner, reducing costs and improving quality."
            }
        ]
    },
    {
        id: 7,
        title: "Mobile Dev with Flutter",
        courseId: 6,
        description: "Basics of cross-platform mobile development.",
        questions: [
            {
                id: 1,
                text: "What language is Flutter based on?",
                options: ["Java", "Kotlin", "Dart", "Swift"],
                correctAnswer: 2,
                aiHint: "It was developed by Google and shares a name with a fast movement.",
                aiExplanation: "Flutter uses the Dart programming language, also developed by Google, which allows for compilation to native code for high performance."
            },
            {
                id: 2,
                text: "What is a Widget in Flutter?",
                options: ["A small app", "The basic building block of the UI", "A database connector", "A testing tool"],
                correctAnswer: 1,
                aiHint: "In Flutter, 'Everything is a ...'",
                aiExplanation: "In Flutter, almost everything is a widget. Widgets describe what their view should look like given their current configuration and state."
            },
            {
                id: 3,
                text: "What is the difference between StatelessWidget and StatefulWidget?",
                options: ["No difference", "StatefulWidget can change its state, StatelessWidget cannot", "StatelessWidget is faster", "StatefulWidget is deprecated"],
                correctAnswer: 1,
                aiHint: "Think about whether the widget needs to rebuild when data changes.",
                aiExplanation: "StatelessWidget is immutable and doesn't change once built, while StatefulWidget can rebuild when its internal state changes, allowing for dynamic UI updates."
            },
            {
                id: 4,
                text: "What is hot reload in Flutter?",
                options: ["Restarting the app", "Injecting updated code without losing state", "Heating up the device", "Deleting cache"],
                correctAnswer: 1,
                aiHint: "It's a developer productivity feature for quick iterations.",
                aiExplanation: "Hot reload allows developers to inject updated source code into a running app without restarting it or losing the current app state, dramatically speeding up development."
            },
            {
                id: 5,
                text: "What is the purpose of pubspec.yaml in Flutter?",
                options: ["To write Dart code", "To manage dependencies and project metadata", "To style widgets", "To test the app"],
                correctAnswer: 1,
                aiHint: "It's like package.json in Node.js or requirements.txt in Python.",
                aiExplanation: "pubspec.yaml is the configuration file for Flutter projects, where you declare dependencies, assets, fonts, and other project metadata."
            },
            {
                id: 6,
                text: "What is setState() used for?",
                options: ["To delete state", "To notify Flutter to rebuild the widget", "To create new widgets", "To navigate between screens"],
                correctAnswer: 1,
                aiHint: "It triggers a rebuild when state changes.",
                aiExplanation: "setState() notifies the Flutter framework that the internal state of a StatefulWidget has changed, triggering a rebuild of the widget to reflect the new state."
            },
            {
                id: 7,
                text: "What is a BuildContext in Flutter?",
                options: ["A construction site", "A reference to the widget's location in the widget tree", "A build tool", "A testing framework"],
                correctAnswer: 1,
                aiHint: "It provides information about the widget's position in the tree.",
                aiExplanation: "BuildContext is a handle to the location of a widget in the widget tree. It's used to access theme data, navigate, show dialogs, and more."
            },
            {
                id: 8,
                text: "What is the purpose of the MaterialApp widget?",
                options: ["To create materials", "To provide Material Design structure to the app", "To manage state", "To handle navigation only"],
                correctAnswer: 1,
                aiHint: "It's usually the root widget for Material Design apps.",
                aiExplanation: "MaterialApp is a convenience widget that wraps several widgets commonly required for Material Design applications, including Navigator, Theme, and MediaQuery."
            },
            {
                id: 9,
                text: "What is Provider in Flutter?",
                options: ["An internet service provider", "A state management solution", "A database", "A testing tool"],
                correctAnswer: 1,
                aiHint: "It's one of the recommended ways to manage app state.",
                aiExplanation: "Provider is a wrapper around InheritedWidget that makes state management easier and more efficient. It's the recommended approach by the Flutter team for most use cases."
            },
            {
                id: 10,
                text: "What does 'flutter pub get' do?",
                options: ["Publishes the app", "Downloads and installs dependencies", "Gets user data", "Creates a new project"],
                correctAnswer: 1,
                aiHint: "It's similar to 'npm install' in Node.js.",
                aiExplanation: "'flutter pub get' downloads all the dependencies listed in pubspec.yaml and makes them available to your project, similar to package managers in other ecosystems."
            }
        ]
    }
];
