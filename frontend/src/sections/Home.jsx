import './../styles/Home.css'; // Import Home.css
import profilePic from './../assets/Moi.jpg'; // Import profile picture
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa'; // Import icons
import { SiMongodb } from 'react-icons/si'; // Import icons


const Home = () => {
    return (
        <section id="home">
            <div className='home-container fade-in'>
                <img src={profilePic} alt="Johnny YE" className="profile-pic" />

                <h1>Hey, I'm Johnny YE 👋</h1>

                <h2>Full-Stack Web Developer & Lifelong Learner</h2>

                <p>
                    I craft modern web apps with clean code, performance in mind and a user-first experience.
                    You can see my work just bellow : 
                </p>

                <div className="cta-container">
                    <a href="#projects" className="cta-button">View My Projects</a>
                    <a href="#contact" className="cta-button secondary">Contact Me</a>
                </div>

                <h2 className='title'>Here are the techs used for my projects :</h2>

                <div className="tech-icons">
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaJs />
                    <FaReact />
                    <FaNodeJs />
                    <SiMongodb />
                </div>
            </div>
        </section>
    );
};

export default Home; // Export Home