import { useEffect, useState } from "react";
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
import BackgroundParticles from "./components/BackgroundEffect/BackgroundParticles";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., 1 seconds)
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <>
      <BackgroundParticles />
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
