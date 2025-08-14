import { Github } from 'lucide-react';
import { useEffect, useRef } from 'react';

// Import project images
import presidentUniversityImg from '../assets/images/president-university-website.png';
import bmiCalculatorImg from '../assets/images/bmi-calculator.png';
import donationwebsiteImg from '../assets/images/donation-website.png';

const Projects = () => {
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

  const projects = [
    {
      title: 'President University Website',
      description: 'A demo university website project featuring three main sections: student management, class schedules, and subject information. Built as a learning project to practice web development fundamentals.',
      image: presidentUniversityImg,
      tech: ['PHP', 'CSS', 'JavaScript'],
      github: 'https://github.com/yonttt/SoftEngi.git',
      live: '#',
      featured: false
    },
    {
      title: 'BMI Calculator',
      description: 'A comprehensive Body Mass Index calculator application with user-friendly interface for calculating BMI based on height and weight inputs.',
      image: bmiCalculatorImg,
      tech: ['Java'],
      github: 'https://github.com/yonttt/bmicalculator',
      live: '#',
      featured: false
    },
    {
      title: 'Donation Website',
      description: 'A charitable donation platform where users can contribute to help people in need. Features include donation functionality and story sharing capabilities for donors to share their experiences after making donations.',
      image: donationwebsiteImg,
      tech: ['Typescript'],
      github: 'https://github.com/yonttt/DPS.git',
      live: '#',
      featured: false
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section ref={sectionRef} id="projects" className="py-20 relative overflow-hidden">
      {/* Interactive 3D Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-10 w-36 h-36 glass rounded-full opacity-5 float-animation interactive-3d"></div>
        <div className="absolute bottom-40 left-10 w-20 h-20 glass opacity-5 float-animation interactive-3d" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-20 left-20 w-24 h-24 glass opacity-8 float-animation interactive-3d" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-60 right-1/3 w-28 h-28 glass rounded-full opacity-6 float-animation interactive-3d" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-80 left-1/2 w-16 h-16 glass opacity-7 float-animation interactive-3d" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of projects I've built while learning and developing my programming skills.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="glass-dark rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 border border-cyan-400/20 hover:border-cyan-400/40">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="glass-dark rounded-xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-colors duration-300">
                  <div className="mb-4">
                    <span className="text-cyan-400 text-sm">Featured Project</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <div key={index} className="glass-dark rounded-xl overflow-hidden group hover:scale-105 transition-transform duration-300 border border-cyan-400/20 hover:border-cyan-400/40">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain bg-gradient-to-br from-gray-900 via-gray-800 to-black p-3 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-cyan-400/10 text-cyan-400 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <a href={project.github} className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;