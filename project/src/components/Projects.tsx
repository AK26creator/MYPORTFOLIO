import React from 'react';
import { ExternalLink, Github, Gamepad2, Bot, Globe, MessageSquare } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Gamified Learning App (EVE)',
      description: 'AI-based gamified learning platform with interactive UI and progress tracking, featuring 3D elements and personalized learning paths.',
      image: 'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'AI/ML', 'Firebase', '3D UI', 'Stripe'],
      icon: Gamepad2,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI-Powered Chatbot',
      description: 'Voice chatbot with file upload and summarization capabilities, featuring natural language processing and document analysis.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Python', 'NLP', 'TensorFlow', 'Voice API'],
      icon: Bot,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive personal portfolio with project showcase, featuring modern design, animations, and dark mode support.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Tailwind CSS', 'TypeScript', 'Animations'],
      icon: Globe,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Smart chatbot for customer queries with automated responses, ticket routing, and sentiment analysis capabilities.',
      image: 'https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Python', 'NLP', 'Customer Service', 'Analytics'],
      icon: MessageSquare,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Innovative solutions that showcase my expertise in AI and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="absolute top-4 left-4">
                  <div className={`p-3 rounded-full bg-gradient-to-br ${project.color} shadow-lg`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 font-medium">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                  <button className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium`}>
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </button>
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