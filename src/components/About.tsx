import { Shield, Code2, Globe, GraduationCap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code2,
      title: 'Programming',
      description: 'Developing programming skills in various languages and building practical applications.'
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Creating modern, responsive websites and learning web technologies and frameworks.'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Focused on protection and analysis, including OSINT techniques and digital threat assessment.'
    },
    {
      icon: GraduationCap,
      title: 'Continuous Learning',
      description: 'Always eager to expand knowledge and stay updated with the latest technology trends.'
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Floating 3D Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 glass rounded-full opacity-15 float-animation"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 glass rotate-45 opacity-10 float-animation" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-40 left-20 w-18 h-18 glass rotate-12 opacity-12 float-animation" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-60 right-20 w-22 h-22 glass rounded-full opacity-8 float-animation" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-60 right-1/3 w-16 h-16 glass rotate-45 opacity-14 float-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/2 w-20 h-20 glass rounded-full opacity-9 float-animation" style={{ animationDelay: '5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get to know more about my background, interests, and what drives my passion 
            for technology and learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-dark rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-colors duration-300">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Hi! My name is Yonathan Marcello S. Tambani, and I'm currently a student at 
                President University, where I'm pursuing a major in Information Technology.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I am actively developing my skills in programming, website development, and cybersecurity. 
                Through continuous learning and hands-on practice, I'm building expertise in these critical 
                areas of technology while staying current with industry trends and best practices.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Programming', 'Web Development', 'Cybersecurity', 'Information Technology'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="glass-dark rounded-xl p-6 group border border-cyan-400/20 hover:border-cyan-400/40 transition-colors duration-300">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;