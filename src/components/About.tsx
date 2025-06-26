import { Code2, Zap, Users, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.'
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimized applications with lightning-fast load times and smooth interactions.'
    },
    {
      icon: Users,
      title: 'User-Centered',
      description: 'Designing intuitive interfaces that prioritize user experience and accessibility.'
    },
    {
      icon: Award,
      title: 'Quality Focused',
      description: 'Delivering high-quality solutions with attention to detail and thorough testing.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 glass rounded-full opacity-10 float-animation"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 glass rotate-45 opacity-10 float-animation" style={{ animationDelay: '3s' }}                                                                                                                                                                                                           ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about creating innovative solutions that bridge the gap between 
            design and technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-dark rounded-2xl p-8 hover-lift">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                With over 5 years of experience in full-stack development, I specialize in 
                building modern web applications using cutting-edge technologies like React, 
                Node.js, and TypeScript.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I believe in the power of clean, efficient code and user-centered design. 
                My approach combines technical expertise with creative problem-solving to 
                deliver exceptional digital experiences.
              </p>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((tech) => (
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
                <div key={index} className="glass-dark rounded-xl p-6 hover-lift group">
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