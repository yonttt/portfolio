import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Floating 3D Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 glass rotate-45 opacity-20"></div>
        <div className="absolute top-40 right-20 w-16 h-16 glass rounded-full opacity-30"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 glass rotate-12 opacity-25"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 glass rounded-full opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
        <div className="w-full">
          <div className="text-center lg:text-left">
            <div className="glass-dark rounded-2xl p-8 md:p-12 max-w-4xl mx-auto lg:mx-0 border border-cyan-400/20 hover:border-cyan-400/40 transition-colors duration-300">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-white">Hi, I'm </span>
                <span className="text-gradient">Yonathan Marcello</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
                An aspiring developer with growing knowledge in programming, website development, and cybersecurity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-center sm:justify-start">
                {/* View My Work Button */}
                <a href="#projects" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-8 py-4 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-300 btn-glow text-center">
                    View My Work</button>
                </a>
                {/* Download CV Button */}
                <a 
                  href="/assets/Yonathan_Marcello_CV.pdf" 
                  download="Yonathan_Marcello_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto px-8 py-4 glass border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center gap-2 btn-glow text-center">
                    <Download size={20} />
                    Download CV
                  </button>
                </a>
              </div>
              
              <div className="flex gap-6 justify-center lg:justify-start">
                <a href="https://github.com/yonttt" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/yonathan-marcello-8392451b3/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;