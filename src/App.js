import { lazy, Suspense } from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import BackgroundParticles from "./components/BackgroundEffect/BackgroundParticles";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import LazyMount from "./components/LazyMount/LazyMount";
import { usePageLoader } from "./hooks/usePageLoader";

const AboutMe = lazy(() => import("./components/About/AboutMe"));
const Education = lazy(() => import("./components/Education/Education"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const TapeSection = lazy(() => import("./components/Tape/TapeSection"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Project = lazy(() => import("./components/Project/Project"));
const Achievement = lazy(() => import("./components/Achievement/Achievement"));
const CodingProfilesSection = lazy(
  () => import("./components/CodingProfiles/CodingProfiles"),
);
const Form = lazy(() => import("./components/Form/Form"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const ScrollToTopButton = lazy(
  () => import("./components/ScrollToTopButton/ScrollToTopButton"),
);

function App() {
  const loading = usePageLoader();

  if (loading) return <LoadingScreen />;

  return (
    <>
      <BackgroundParticles />
      <Navbar />
      <HeroSection />
      <LazyMount minHeight="40vh">
        <Suspense fallback={null}>
          <AboutMe />
        </Suspense>
      </LazyMount>
      <LazyMount minHeight="30vh">
        <Suspense fallback={null}>
          <Education />
        </Suspense>
      </LazyMount>
      <LazyMount minHeight="40vh">
        <Suspense fallback={null}>
          <Skills />
        </Suspense>
      </LazyMount>
      <LazyMount>
        <Suspense fallback={null}>
          <TapeSection />
        </Suspense>
      </LazyMount>
      <LazyMount minHeight="50vh">
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </LazyMount>
      <LazyMount minHeight="50vh">
        <Suspense fallback={null}>
          <Project />
        </Suspense>
      </LazyMount>
      <LazyMount minHeight="30vh">
        <Suspense fallback={null}>
          <Achievement />
        </Suspense>
      </LazyMount>
      <LazyMount minHeight="20vh">
        <Suspense fallback={null}>
          <CodingProfilesSection />
        </Suspense>
      </LazyMount>
      <LazyMount minHeight="40vh">
        <Suspense fallback={null}>
          <Form />
        </Suspense>
      </LazyMount>
      <LazyMount>
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </LazyMount>
      <LazyMount>
        <Suspense fallback={null}>
          <ScrollToTopButton />
        </Suspense>
      </LazyMount>
    </>
  );
}

export default App;
