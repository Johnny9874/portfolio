import './../styles/About.css'; // Import About.css
import SectionWrapper from '../components/SectionWrapper'; // Import SectionWrapper

const About = () => {
    return (
        <SectionWrapper id="about" className="about-section fade-in">
            <h1>About Me</h1>
  
            <p className="about-intro">
                I'm a passionate web developer with a strong interest in crafting intuitive and responsive applications.
            </p>

            <p>
                My journey in tech began with curiosity and quickly evolved into a full-on commitment to learning and building.
                I've worked on various projects using JavaScript, React, Node.js and MongoDB — always striving to improve code quality, performance, and user experience.
            </p>

            <p>
                I'm known for being a fast learner, an adaptable teammate, and someone who enjoys turning complex ideas into simple, elegant solutions.
            </p>

            <div className="soft-skills">
                <span className="skill-badge">🚀 Fast learner</span>
                <span className="skill-badge">🤝 Team player</span>
                <span className="skill-badge">🧠 Problem-solver</span>
                <span className="skill-badge">🎯 Detail-oriented</span>
            </div>

            <p className="personal-note">
                Outside of code, I enjoy learning new things, challenging myself, and always staying curious.
            </p>
        </SectionWrapper>

    );
};

export default About; // Export About