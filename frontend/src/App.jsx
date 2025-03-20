import Header from "./components/Header"; // Import Header
import Home from "./sections/Home"; // Import Home
import Projects from "./sections/Projects"; // Import Projects
import About from "./sections/About"; // Import About
import Contact from "./sections/Contact"; // Import Contact
import "./styles/global.css"; // Import global styles

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Projects />
      <About />
      <Contact />
    </>
  );
};

export default App;