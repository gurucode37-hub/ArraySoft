const courses = [
  {
    id: 1,
    title: "Microsoft Excel (Basic to Advanced)",
    amount: 2999,
    syllabus: [
      "Excel Interface & Basics",
      "Data Entry & Formatting",
      "Basic Formulas & Functions",
      "Logical & Lookup Functions",
      "Sorting & Filtering Data",
      "Charts & Graphs",
      "Pivot Tables Basics",
      "Real-life Office Use Cases"
    ],
    practice: [
      "Excel worksheets",
      "Office-style reports",
      "Real-world datasets"
    ],
    targetAudience: "Any student or working professional",
    benefits: [
      "Excel Certificate",
      "Practice Workbook",
      "Office Productivity Guide"
    ]
  },
  {
    id: 2,
    title: "C Programming Language",
    amount: 2499,
    syllabus: [
      "Introduction to Programming & C Language",
      "Variables, Data Types & Operators",
      "Conditional Statements (if, switch)",
      "Loops (for, while, do-while)",
      "Functions & Recursion",
      "Arrays & Strings",
      "Pointers & Memory Basics",
      "Basic File Handling"
    ],
    practice: [
      "Logical programs",
      "Number-based problems",
      "Mini console-based applications"
    ],
    targetAudience: "Any graduate or student (No prior coding required)",
    benefits: [
      "C Programming Certificate",
      "Practice Code Files",
      "Logic Building Exercises"
    ]
  },
  {
    id: 3,
    title: "C++ Object Oriented Programming",
    amount: 3499,
    syllabus: [
      "Introduction to C++",
      "Variables, Data Types & Operators",
      "Control Statements & Loops",
      "Array & String in C++",
      "Functions & Function Overloading",
      "Classes & Objects",
      "Constructors & Destructors",
      "Inheritance & Polymorphism",
      "Encapsulation & Abstraction"
    ],
    practice: [
      "OOP-based programs",
      "Class design tasks",
      "Mini real-world tasks"
    ],
    targetAudience: "Students with basic programming knowledge preferred",
    benefits: [
      "C++ OOP Certificate",
      "C++ Source Code Files",
      "Interview-Oriented OOP Notes"
    ]
  },
  {
    id: 4,
    title: "SQL – Structured Query Language",
    amount: 2799,
    syllabus: [
      "Introduction to Databases & SQL",
      "Database Tables & Schema",
      "SELECT, INSERT, UPDATE, DELETE",
      "WHERE, ORDER BY, GROUP BY",
      "Joins (INNER, LEFT, RIGHT)",
      "Subqueries",
      "Indexes & Constraints",
      "Real-world Database Queries"
    ],
    practice: [
      "SQL query practice",
      "Real database scenarios",
      "Hands-on exercises"
    ],
    targetAudience: "Any graduate or student",
    benefits: [
      "SQL Certificate",
      "Query Practice Sheet",
      "Database Case Study"
    ]
  },
  {
    id: 5,
    title: "MongoDB (NoSQL Database)",
    amount: 3199,
    syllabus: [
      "Introduction to NoSQL & MongoDB",
      "Installation & Setup",
      "Database, Collections & Documents",
      "CRUD Operations",
      "Query Operators",
      "Indexes & Aggregation Basics",
      "MongoDB Compass Usage",
      "MongoDB with Node.js (Intro)"
    ],
    practice: [
      "Database creation",
      "CRUD tasks",
      "Backend-ready data models"
    ],
    targetAudience: "Students with basic programming knowledge",
    benefits: [
      "MongoDB Certificate",
      "Hands-on Practice Files",
      "Backend Integration Notes"
    ]
  },
  {
    id: 6,
    title: "Python Programming",
    amount: 3599,
    syllabus: [
      "Python Installation & Environment Setup",
      "Data Types: Lists, Tuples, Dictionaries",
      "Control Flow & Logical Operators",
      "Functions & Functional Programming",
      "OOP: Classes, Inheritance & Polymorphism",
      "Exception Handling & Debugging",
      "File Operations & JSON Processing"
    ],
    practice: [
      "Calculator App",
      "Automation Scripts",
      "Simple Data Scraper"
    ],
    targetAudience: "B.Tech, BCA, B.Sc. IT students with basic programming",
    benefits: [
      "Course Certificate",
      "Python Script Collection",
      "Logic Building Guide"
    ]
  },
  {
    id: 7,
    title: "Web Development",
    amount: 4999,
    syllabus: [
      "Web Architecture & HTTP Basics",
      "HTML5 Semantic Tags & Forms Validation",
      "Modern CSS: Flexbox, Grid, Animations",
      "Responsive Design Principles",
      "JavaScript Fundamentals",
      "DOM Manipulation & UI Logic",
      "Git & GitHub Version Control"
    ],
    practice: [
      "5+ Mini-projects",
      "1 Live Portfolio Website",
      "Daily Coding Exercises"
    ],
    targetAudience: "All graduates/students",
    benefits: [
      "Verified Certificate",
      "Project Source Code",
      "Industry Resume Template"
    ]
  },
  {
    id: 8,
    title: "Frontend Web Development",
    amount: 5999,
    syllabus: [
      "Modern ES6+ JavaScript",
      "React Basics: JSX, Props, State",
      "Advanced Hooks",
      "Redux Toolkit",
      "Client-side Routing",
      "Tailwind CSS & Framer Motion",
      "REST API Consumption"
    ],
    practice: [
      "E-commerce UI Clone",
      "Real-time Dashboard",
      "API-driven Project"
    ],
    targetAudience: "All graduates/students",
    benefits: [
      "Professional Certificate",
      "GitHub Portfolio",
      "Interview Prep Session"
    ]
  },
  {
    id: 9,
    title: "Backend Development",
    amount: 6499,
    syllabus: [
      "Node.js & NPM",
      "Express Framework",
      "MongoDB & Mongoose",
      "SQL Basics",
      "JWT & OAuth Authentication",
      "Secure REST API Design",
      "Cloud Deployment Basics"
    ],
    practice: [
      "User Authentication System",
      "Blog CMS Backend",
      "Real-time Chat Server"
    ],
    targetAudience: "All graduates/students",
    benefits: [
      "Course Completion Certificate",
      "Backend Project Showcase",
      "Deployment Guide"
    ]
  },
  {
    id: 10,
    title: "Data Analytics",
    amount: 6999,
    syllabus: [
      "Advanced Excel",
      "SQL Advanced Queries",
      "Python for Data Science",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Data Visualization",
      "Business Intelligence Basics"
    ],
    practice: [
      "Sales Data Analysis",
      "SQL Case Study",
      "Interactive Dashboards"
    ],
    targetAudience: "Graduates with basic math knowledge",
    benefits: [
      "Specialization Certificate",
      "Data Portfolio",
      "SQL Query Bank"
    ]
  },
  {
    id: 11,
    title: "AI Tools for Web & Content",
    amount: 3999,
    syllabus: [
      "Generative AI Fundamentals",
      "Prompt Engineering",
      "AI for UI Design",
      "AI Content Writing & SEO",
      "Excel Automation with AI",
      "AI Presentations",
      "Future of AI in Web"
    ],
    practice: [
      "AI Landing Page",
      "Content Strategy Plan",
      "Automated Reporting"
    ],
    targetAudience: "All graduates interested in AI tools",
    benefits: [
      "AI Power User Certificate",
      "Prompt Library",
      "AI Tool Resource List"
    ]
  }
];

export default courses;
