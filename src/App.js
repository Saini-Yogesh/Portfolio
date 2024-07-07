import "./App.css";
import AboutMe from "./components/About/AboutMe";
import Achievement from "./components/Achievement/Achievement";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Project/Project";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Education />
      <Skills />
      <Project />
      <Achievement />
      <Contact />
    </>
  );
}

export default App;
