import { Server, Monitor, Shield, Code } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;
      
      const elements = sectionRef.current.querySelectorAll('.interactive-3d');
      elements.forEach((element, index) => {
        const intensity = (index + 1) * 0.3;
        const x = xPercent * intensity * 6;
        const y = yPercent * intensity * 6;
        const rotateX = yPercent * intensity * 2;
        const rotateY = xPercent * intensity * 2;
        
        (element as HTMLElement).style.transform = 
          `translate(${x}px, ${y}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // --- Data tailored for a student learning multiple tech areas ---
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming',
      description: 'Development environments, programming languages, and software development tools.',
      skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'Node.js', 'Git/GitHub']
    },
    {
      icon: Monitor,
      title: 'Website Development',
      description: 'Building interactive user interfaces with modern frameworks and styling libraries.',
      skills: ['HTML/CSS', 'React', 'Tailwind CSS', 'Vite', 'Firebase', 'MySQL']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Digital forensics, penetration testing, and open source intelligence gathering.',
      skills: ['Autopsy', 'Burp Suite', 'Kali Linux', 'FTK Imager', 'Google Dorking', 'Open Source Intelligence']
    },
    {
      icon: Server,
      title: 'Additional Tools',
      description: 'Development tools and environments for various projects and platforms.',
      skills: ['Android Studio', 'VS Code', 'NetBeans', 'PHP', 'Project Management', 'Testing & Debugging']
    }
  ];

  // --- Style tag for custom animations ---
  // (It's often better to put this in your global CSS file)
  const styles = `
    @keyframes blink {
      50% { opacity: 0; }
    }
    .cursor-blink {
      animation: blink 1s step-end infinite;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .fade-in-skill {
      animation: fadeIn 0.5s ease-out forwards;
      opacity: 0; /* Start hidden */
    }

    /* Subtle glitch effect on group hover */
    .group:hover .glitch-target {
      animation: glitch 0.3s cubic-bezier(.25,.46,.45,.94) both infinite;
    }
    @keyframes glitch{
      0%{ transform: translate(0); }
      20%{ transform: translate(-2px, 2px); }
      40%{ transform: translate(-2px, -2px); }
      60%{ transform: translate(2px, 2px); }
      80%{ transform: translate(2px, -2px); }
      100%{ transform: translate(0); }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <section ref={sectionRef} id="skills" className="py-20 relative overflow-hidden">
        {/* Interactive 3D Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-24 h-24 glass rotate-45 opacity-15 float-animation interactive-3d transition-transform duration-300"></div>
          <div className="absolute top-40 right-20 w-32 h-32 glass rounded-full opacity-20 float-animation interactive-3d transition-transform duration-300" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-60 left-20 w-16 h-16 glass rotate-12 opacity-10 float-animation interactive-3d transition-transform duration-300" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-40 right-10 w-20 h-20 glass rounded-full opacity-15 float-animation interactive-3d transition-transform duration-300" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-60 left-1/2 w-14 h-14 glass rotate-45 opacity-12 float-animation interactive-3d transition-transform duration-300" style={{ animationDelay: '3s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-28 h-28 glass rounded-full opacity-8 float-animation interactive-3d transition-transform duration-300" style={{ animationDelay: '5s' }}></div>
        </div>

        {/* Background CRT screen effect */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(18, 18, 18, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.03))', backgroundSize: '100% 4px, 6px 100%' }}></div>
        <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, rgba(0, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '2rem 2rem' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Technologies and areas I'm passionate about and continuously learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="glass-dark-terminal rounded-xl p-6 group flex flex-col border border-cyan-400/20 hover:border-cyan-400/50 transition-colors duration-300">
                  <div className="flex-shrink-0 mb-6 flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-md bg-cyan-900/50 border border-cyan-400/30">
                       <Icon className="w-6 h-6 text-cyan-400 transition-transform duration-300 glitch-target" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    </div>
                  </div>
                  <p className='text-gray-400 mb-6 text-sm'>{category.description}</p>
                  
                  {/* --- Animated Skills List --- */}
                  <div className="flex-grow flex flex-col space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className="fade-in-skill" 
                        style={{ animationDelay: `${skillIndex * 100}ms` }}
                      >
                        <p className="text-gray-300">
                          <span className="text-cyan-400 mr-2">[+]</span>{skill}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;