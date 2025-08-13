import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import Aurora from './Aurora';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'EVE - AI-Powered Platform',
      description: 'Advanced AI platform with 3D UI, integrated chatbots, and Stripe payment processing. Built with React, Node.js, and modern AI technologies.',
      technologies: ['React', 'Node.js', 'AI/ML', 'Stripe', '3D UI', 'Firebase'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'E-Commerce Web Application',
      description: 'Full-stack e-commerce solution with user authentication, product management, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'AI Classification Model',
      description: 'Machine learning model for text and image classification using Python, TensorFlow, and Scikit-learn with high accuracy rates.',
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'NLP', 'Computer Vision'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive portfolio website showcasing projects and skills with modern design and smooth animations.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Real-time Chat Application',
      description: 'Real-time messaging application with user authentication, group chats, and file sharing capabilities.',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Weather Prediction System',
      description: 'AI-powered weather prediction system using machine learning algorithms and real-time data processing.',
      technologies: ['Python', 'Machine Learning', 'APIs', 'Data Analysis'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 w-full h-full">
        <Aurora
          colorStops={["#7C2D12", "#BE185D", "#1E40AF"]}
          blend={0.3}
          amplitude={1.1}
          speed={0.35}
        />
      </div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 z-1"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg relative z-10">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto drop-shadow-md relative z-10">
            A showcase of my recent work in AI, web development, and innovative solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 relative z-10">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-100 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/20 text-gray-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                  >
                    <Eye className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 hover:border-white px-4 py-2 rounded-lg font-medium transition-all duration-200"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-8 text-center drop-shadow-lg">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                style={{ animationDelay: `${(index + featuredProjects.length) * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg font-bold text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-100 text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/20 text-gray-100 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-white/20 text-gray-100 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-1 text-gray-200 hover:text-white text-sm font-medium"
                    >
                      <Github className="w-3 h-3" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 relative z-10">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
