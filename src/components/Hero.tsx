import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-animated"></div>
      
      {/* Floating 3D Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 glass rotate-45 float-animation opacity-20"></div>
        <div className="absolute top-40 right-20 w-16 h-16 glass rounded-full float-animation opacity-30" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 glass rotate-12 float-animation opacity-25" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 glass rounded-full float-animation opacity-20" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
        <div className="w-full">
          <div className="text-center lg:text-left">
            <div className="glass-dark rounded-2xl p-8 md:p-12 max-w-4xl mx-auto lg:mx-0 hover-lift">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-400 text-sm mb-4">
                  Full Stack Developer
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-white">Hi, I'm </span>
                <span className="text-gradient">Alex Chen</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
                I craft beautiful, functional, and user-centered digital experiences 
                with modern technologies and creative problem-solving.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {/* Wrap the button in an anchor tag */}
                <a href="#projects">
                    <button className="px-8 py-4 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-300 btn-glow">
                    View My Work</button>
                </a>
                <button className="px-8 py-4 glass border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center gap-2">
                  <Download size={20} />
                  Download CV
                </button>
              </div>
              
              <div className="flex gap-6 justify-center lg:justify-start">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform duration-300">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform duration-300">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform duration-300">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 hover:text-cyan-300 transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;