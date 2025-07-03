import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
        <Navbar /> 
        <Hero /> 
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;