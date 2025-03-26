import './../styles/Project.css'; // Import Project.css
import SectionWrapper from '../components/SectionWrapper'; // Import SectionWrapper

const projects = [
    {
        title: "Assistant IA",
        description: "A simple IA assistant app for asking regular question.",
        stack: ["HTML", "CSS", "JavaScript", "PHP", "Docker", "Apache", "Render", "Hugging Face"],
        github: "https://github.com/Johnny9874/AssistantIA",
        demo: "https://assistant-mixtral.onrender.com/",
        image: ""
    },
    {
        title: "Reservation System",
        description: "A web app for managing bookings with MySQL and PHP.",
        stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        github: "https://github.com/tonprofil/reservation-system",
        demo: "",
        image: ""
    },
    {
        title: "Portfolio Vite + React",
        description: "My personal one-page portfolio built with Vite, React and Framer Motion.",
        stack: ["React", "Vite", "Framer Motion"],
        github: "https://github.com/tonprofil/portfolio",
        demo: "https://tonportfolio.vercel.app",
        image: "/assets/portfolio.png"
    },
    {
        title: "Portfolio Vite + React",
        description: "My personal one-page portfolio built with Vite, React and Framer Motion.",
        stack: ["React", "Vite", "Framer Motion"],
        github: "https://github.com/tonprofil/portfolio",
        demo: "https://tonportfolio.vercel.app",
        image: "/assets/portfolio.png"
    }
];

const Projects = () => {
    return (
        <SectionWrapper id="projects">
            <h1>My Projects</h1>
            <p>Here are some of the projects I have worked on.</p>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="stack">
                            {project.stack.map((tech, i) => (
                                <span key={i}>{tech}</span>
                            ))}
                        </div>
                        <div className="links">
                            {project.github && <a href={project.github} target="_blank">GitHub</a>}
                            {project.demo && <a href={project.demo} target="_blank">Live Demo</a>}
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects; // Export Projects