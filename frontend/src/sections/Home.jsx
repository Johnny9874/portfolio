import './../styles/Home.css'; // Import Home.css
import profilePic from './../assets/Moi.jpg'; // Import profile picture

const Home = () => {
    return (
        <section id="home">
            <h1>Hey, I'm Johnny YE 👋</h1>
            <h2>Full-Stack Web Developer & Lifelong Learner</h2>
            <p>
            I craft modern web apps with clean code, performance in mind and a user-first experience.
            You can see my work just bellow or check out my <a href="#projects">projects</a> and <a href="#contact">contact</a> me. 
            </p>
            <img src={profilePic} alt="Johnny YE" className="profile-pic" />
        </section>
    );
};

export default Home; // Export Home