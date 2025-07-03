import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include real-time inventory, advanced search, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team chat, and advanced analytics dashboard.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'WebSocket'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Machine learning dashboard for business intelligence with predictive analytics and data visualization.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'React', 'TensorFlow', 'D3.js'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication and real-time transaction monitoring.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React Native', 'Node.js', 'MongoDB', 'JWT'],
      github: '#',
      live: '#',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-10 w-36 h-36 glass rounded-full opacity-5 float-animation"></div>
        <div className="absolute bottom-40 left-10 w-20 h-20 glass rotate-45 opacity-5 float-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A selection of projects that showcase my expertise in building modern web applications.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="glass-dark rounded-2xl overflow-hidden group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="glass-dark rounded-xl p-8">
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
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
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
            <div key={index} className="glass-dark rounded-xl overflow-hidden group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300"
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
                    <a href={project.live} className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  <ArrowUpRight className="text-cyan-400 transition-transform" size={18} />
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