import { Swords, ShieldCheck, Fingerprint, HardHat } from 'lucide-react';

const Skills = () => {
  // --- Data tailored for a Cybersecurity professional ---
  const skillCategories = [
    {
      icon: Swords,
      title: 'Offensive Security',
      description: 'Identifying and exploiting vulnerabilities to assess and improve security posture.',
      skills: ['Penetration Testing', 'Nmap', 'Metasploit', 'Burp Suite', 'Wireshark', 'Python Scripting']
    },
    {
      icon: ShieldCheck,
      title: 'Defensive Security',
      description: 'Protecting systems and networks from threats and responding to incidents.',
      skills: ['SIEM (Splunk/ELK)', 'Firewall & IDS/IPS', 'Threat Intelligence', 'Malware Analysis', 'Blue Teaming']
    },
    {
      icon: Fingerprint,
      title: 'Digital Forensics',
      description: 'Investigating cybercrimes and security incidents by collecting and analyzing digital evidence.',
      skills: ['Incident Response', 'Volatility', 'Autopsy/FTK', 'Memory Forensics', 'Log Analysis', 'Chain of Custody']
    },
    {
      icon: HardHat,
      title: 'Security Engineering',
      description: 'Designing, building, and maintaining secure systems and infrastructure.',
      skills: ['Secure Architecture', 'Cloud Security (AWS/Azure)', 'Cryptography', 'Docker & Kubernetes', 'CI/CD Security']
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
      <section id="skills" className="py-20 bg-black relative overflow-hidden">
        {/* Background CRT screen effect */}
        <div className="absolute inset-0 bg-black bg-opacity-50" style={{ backgroundImage: 'linear-gradient(rgba(18, 18, 18, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.03))', backgroundSize: '100% 4px, 6px 100%' }}></div>
        <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, rgba(0, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '2rem 2rem' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className='text-cyan-400'></span>_OPERATIVE SKILLSET<span className="cursor-blink">|</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Core competencies in digital threat assessment and infrastructure defense.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="glass-dark-terminal rounded-xl p-6 hover-lift group flex flex-col border border-cyan-400/20 hover:border-cyan-400/50 transition-colors duration-300">
                  <div className="flex-shrink-0 mb-6 flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-md bg-cyan-900/50 border border-cyan-400/30">
                       <Icon className="w-6 h-6 text-cyan-400 transition-transform duration-300 group-hover:scale-110 glitch-target" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">{category.title}</h3>
                        <p className="text-xs text-gray-400">EXEC_DOMAIN_{index + 1}</p>
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