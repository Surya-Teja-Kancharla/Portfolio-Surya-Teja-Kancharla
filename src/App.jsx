import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="bg-bg text-text font-nunito antialiased">
      <Navbar />
      
      <main className="pt-32">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
