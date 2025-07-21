import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import SocialsBar from "./components/SocialsBar";
import EmailBar from "./components/EmailBar";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

const App = () => {
  return (
    <div className="font-sans bg-[#0A192F] min-h-screen scroll-smooth">
      <Navbar />
      <HeroSection />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
      <Resume />

      <SocialsBar />
      <EmailBar />
    </div>
  );
};

export default App;
