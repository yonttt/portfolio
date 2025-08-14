import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills"

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading time and create entrance effect
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowContent(true), 300);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center z-50">
        <div className="text-center">
          {/* 3D Loading Animation */}
          <div className="relative mb-8">
            <div className="w-20 h-20 border-4 border-cyan-400/30 rounded-full animate-spin">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-cyan-400 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-cyan-400/20 rounded-full animate-ping"></div>
          </div>
          
          {/* Loading Text with 3D Effect */}
          <div className="text-2xl font-bold text-white mb-4 animate-pulse">
            <span className="text-gradient">Loading Portfolio...</span>
          </div>
          
          {/* Progress Bar */}
          <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-loading-progress"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white transition-all duration-1000 ${showContent ? 'opacity-100 transform-none' : 'opacity-0 transform scale-95'}`}>
        <div className={`transform transition-all duration-1000 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Navbar /> 
        </div>
        <div className={`transform transition-all duration-1000 delay-200 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Hero />
        </div>
        <div className={`transform transition-all duration-1000 delay-300 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <About />
        </div>
        <div className={`transform transition-all duration-1000 delay-400 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Skills />
        </div>
        <div className={`transform transition-all duration-1000 delay-500 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Projects />
        </div>
        <div className={`transform transition-all duration-1000 delay-600 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Contact />
        </div>
        <div className={`transform transition-all duration-1000 delay-700 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Footer />
        </div>
    </div>
  );
}

export default App;