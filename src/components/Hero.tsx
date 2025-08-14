import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPercent = Math.abs((clientX / innerWidth - 0.5) * 2);
      const yPercent = Math.abs((clientY / innerHeight - 0.5) * 2);
      
      const elements = sectionRef.current.querySelectorAll('.interactive-3d');
      elements.forEach((element, index) => {
        const intensity = (index + 1) * 0.1;
        const scale = 1 + (xPercent + yPercent) * intensity * 0.1;
        
        (element as HTMLElement).style.transform = `scale(${scale})`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={sectionRef} id="home" className="min-h-screen relative overflow-hidden">
      {/* Interactive 3D Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 glass opacity-20 float-animation interactive-3d"></div>
        <div className="absolute top-40 right-20 w-16 h-16 glass rounded-full opacity-30 float-animation interactive-3d" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 glass opacity-25 float-animation interactive-3d" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 glass rounded-full opacity-20 float-animation interactive-3d" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-60 left-1/2 w-16 h-16 glass opacity-15 float-animation interactive-3d" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-60 right-1/3 w-14 h-14 glass rounded-full opacity-25 float-animation interactive-3d" style={{ animationDelay: '5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
        <div className="w-full">
          <div className="text-center lg:text-left">
            <div className="glass-dark rounded-2xl p-8 md:p-12 max-w-4xl mx-auto lg:mx-0 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-500 card-3d hover-lift transform-3d">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-[slideInFromTop_1s_ease-out]">
                <span className="text-white">Hi, I'm </span>
                <span className="text-gradient">Yonathan Marcello</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl animate-[slideInFromLeft_1s_ease-out_0.3s_both]">
                An aspiring developer with growing knowledge in programming, website development, and cybersecurity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-center sm:justify-start animate-[slideInFromRight_1s_ease-out_0.6s_both]">
                {/* View My Work Button */}
                <a href="#projects" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-8 py-4 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-300 btn-glow text-center transform hover:scale-105 card-3d">
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
                  <button className="w-full sm:w-auto px-8 py-4 glass border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center gap-2 btn-glow text-center transform hover:scale-105 card-3d">
                    <Download size={20} />
                    Download CV
                  </button>
                </a>
              </div>
              
              <div className="flex gap-6 justify-center lg:justify-start animate-[scaleIn3D_1s_ease-out_0.9s_both]">
                <a href="https://github.com/yonttt" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 card-3d">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/yonathan-marcello-8392451b3/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 card-3d">
                  <Linkedin size={24} />
                </a>
                <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 card-3d">
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