import {
    database,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    GolfTracker,
    FlowerBuds,
    WorkTogether,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
    {
        id: "about",
        title: "About",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
    {
        title: "Database Management",
        icon: database,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "FlowerBuds",
        icon: FlowerBuds,
        github: "https://github.com/MJ-Kerr/FlowerBuds-Co.",
        iconBg: "#383E56",
        date: "2023",
        points: [
            "Developed a React.js web application for an online store selling candles and apparel.",
            "Integrated backend API for fetching and displaying product information.",
            "Designed user interface using Material-UI and Tailwind CSS frameworks.",
            "Implemented cart functionality and optimized product browsing experience.",
            "Ensured data consistency and smooth user experience through React.js state management."
        ],
    },
    {
        title: "Python Developer",
        company_name: "WorkTogether",
        icon: WorkTogether,
        github: 'https://github.com/MJ-Kerr/Work-Requests',
        iconBg: "#383E56",
        date: "2023",
        points: [
            `Implemented PyMySQL library for database connectivity and executing queries with MySQL.`,
            `Utilized Bootstrap framework for enhancing the application's user interface.`,
            `Integrated user authentication, session management, and role-based access control for secure access.`,
            `Implemented CRUD operations for managing work requests, enabling users to add, edit, and delete entries.`,
            `Utilized Flask's template engine for dynamic rendering of work entries. Provided a logout feature for secure user log out.`

        ],
    },
    {
        title: "Full stack Developer",
        company_name: "GolfTracker",
        icon: GolfTracker,
        github: 'https://github.com/MJ-Kerr/GolfTracker',
        iconBg: "#383E56",
        date: "2023",
        points: [
            `Developed Golf Tracker web application using HTML, CSS, Bootstrap, and JavaScript.`,
            `Implemented shot logging, distance tracking, and shot shape analysis features.`,
            `Ensured cross-browser compatibility and responsive design.`,
            `Collaborated with users to gather feedback and enhance usability`

        ],
    },
];



export { services, technologies, experiences };