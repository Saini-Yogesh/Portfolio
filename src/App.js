import AboutMe from "./components/About/AboutMe";
import Achievement from "./components/Achievement/Achievement";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Project/Project";
import Skills from "./components/Skills/Skills";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import CodingProfilesSection from "./components/CodingProfiles/CodingProfiles";
import Experience from "./components/Experience/Experience";
import Form from "./components/Form/Form"
import TapeSection from "./components/Tape/TapeSection";
// import Snowfall from "./Snowfall";

function App() {
  return (
    <>
      {/* <Snowfall /> */}
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Education />
      <Skills />
      <TapeSection />
      <Experience />
      <Project />
      <Achievement />
      <CodingProfilesSection />
      <Form />
      <Contact />
      <ScrollToTopButton />
    </>
  );
}

export default App;
