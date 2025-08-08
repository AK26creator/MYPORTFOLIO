import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Mail, 
  Phone, 
  Linkedin, 
  ExternalLink, 
  Code, 
  Briefcase, 
  GraduationCap, 
  Award, 
  User, 
  ChevronRight,
  MapPin,
  Calendar,
  Star
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'education', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const roles = [
    "AI-Powered Web Developer",
    "CEO @ HIVE5",
    "Prompt Engineer",
    "Data Science Enthusiast"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-purple-700 bg-clip-text text-transparent">
              Akash Kumar Singh O
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'education', 'skills', 'projects', 'certifications', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium transition-colors duration-200 ${
                    activeSection === item 
                      ? 'text-blue-800 border-b-2 border-blue-800' 
                      : 'text-gray-600 hover:text-blue-800'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              {['home', 'about', 'experience', 'education', 'skills', 'projects', 'certifications', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 capitalize font-medium text-gray-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Profile Photo */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-blue-800 to-purple-700 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    {/* Placeholder - Replace src with your actual photo */}
                    <img 
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                      alt="Akash Kumar Singh O - Professional Profile"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                {/* Status indicator */}
                <div className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Hi, I'm <span className="bg-gradient-to-r from-blue-800 to-purple-700 bg-clip-text text-transparent">Akash</span>
              </h1>
              <div className="h-16 flex items-center justify-center">
                <p className="text-2xl sm:text-3xl text-gray-700 font-medium animate-pulse">
                  {roles[currentRoleIndex]}
                </p>
              </div>
            </div>
            
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating AI-integrated digital solutions that transform businesses. 
              Currently pursuing B.Tech in AI & Data Science while leading innovative projects at HIVE5.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center group"
              >
                View My Work
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A driven AI and Data Science student with entrepreneurial spirit and hands-on industry experience
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Professional Photo */}
              <div className="mb-8 lg:hidden flex justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-800 to-purple-700 p-1 shadow-xl">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                      alt="Akash Kumar Singh O"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                I'm currently in my 3rd year of B.Tech in AI & Data Science at Gojan School of Business and Technology. 
                As the CEO and founder of HIVE5, I combine academic knowledge with real-world entrepreneurial experience.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                My passion lies in developing AI-integrated solutions that solve real business problems. From building 
                automated coffee machines with embedded systems to creating comprehensive web applications, I enjoy 
                bringing innovative ideas to life.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-800">5+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-800">10+</div>
                  <div className="text-gray-600">Certifications</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Desktop Profile Photo */}
              <div className="hidden lg:flex justify-center mb-8">
                <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-blue-800 to-purple-700 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-2xl bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop"
                      alt="Akash Kumar Singh O - Professional Portrait"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                <User className="text-blue-800 mb-4" size={32} />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Leadership</h4>
                <p className="text-gray-700">Leading HIVE5 as CEO and serving as Chief Coordinator at UNAI Tech, 
                managing teams and driving innovative solutions.</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
                <Code className="text-purple-800 mb-4" size={32} />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Technical Excellence</h4>
                <p className="text-gray-700">Proficient in AI-powered web development, prompt engineering, 
                and full-stack development with a focus on cutting-edge technologies.</p>
              </div>
              
              <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-lg">
                <Award className="text-teal-800 mb-4" size={32} />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Recognition</h4>
                <p className="text-gray-700">Multiple symposium winner across various colleges including VIT, 
                with active participation in competitive programming and sports.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <p className="text-xl text-gray-600">Building expertise through diverse roles and challenges</p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                title: "CEO",
                company: "Hive5 (Startup)",
                period: "2023 - Present",
                description: "Founded and leading a startup focused on AI-integrated digital solutions. Managing business operations, client relationships, and strategic development.",
                color: "blue"
              },
              {
                title: "Chief Coordinator & Developer",
                company: "UNAI Tech",
                period: "2023 - Present",
                description: "Leading development initiatives and coordinating technical projects. Responsible for team management and project delivery.",
                color: "purple"
              },
              {
                title: "Data Scientist Intern",
                company: "Mindful AI",
                period: "2023",
                description: "Worked on data analysis projects and machine learning model development. Gained hands-on experience in AI implementation.",
                color: "teal"
              },
              {
                title: "Project Engineer Intern",
                company: "Fresh and Honest",
                period: "2023",
                description: "Developed an AI-automated coffee machine with embedded systems. Implemented IoT solutions for industrial applications.",
                color: "green"
              }
            ].map((job, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                    <p className={`text-lg font-semibold text-${job.color}-800 mb-2`}>{job.company}</p>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar size={16} className="mr-2" />
                    <span>{job.period}</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-xl text-gray-600">Academic foundation in technology and innovation</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                degree: "Bachelor of Technology - AI & Data Science",
                institution: "Gojan School of Business and Technology",
                period: "Current - 3rd Year",
                status: "In Progress"
              },
              {
                degree: "Higher Secondary Education",
                institution: "Revoor Padmanabha Chettys Matriculation School",
                period: "Completed",
                status: "Completed"
              },
              {
                degree: "High School",
                institution: "Venkateshwara Vidhyalaya Matriculation School",
                period: "Completed",
                status: "Completed"
              }
            ].map((education, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start">
                    <GraduationCap className="text-blue-800 mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{education.degree}</h3>
                      <p className="text-lg text-gray-700 mb-2">{education.institution}</p>
                      <p className="text-gray-600">{education.period}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    education.status === 'In Progress' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {education.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600">Technical proficiencies and core competencies</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {[
                  { name: "AI-Powered Web Development", level: 90 },
                  { name: "Python Programming", level: 85 },
                  { name: "Full Stack Development", level: 80 },
                  { name: "Prompt Engineering", level: 95 },
                  { name: "Data Structures & Algorithms", level: 75 },
                  { name: "ChatGPT Expertise", level: 90 }
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-blue-800 to-purple-700 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Languages</h3>
              <div className="space-y-6 mb-8">
                {[
                  { name: "English", level: "Fluent", color: "blue" },
                  { name: "Hindi", level: "Fluent", color: "green" },
                  { name: "Tamil", level: "Conversational", color: "purple" }
                ].map((language, index) => (
                  <div key={index} className={`bg-${language.color}-50 p-4 rounded-lg`}>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">{language.name}</span>
                      <span className={`text-${language.color}-800 font-medium`}>{language.level}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Competencies</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Team Leadership",
                  "Project Management",
                  "Client Relations",
                  "Problem Solving",
                  "Innovation",
                  "Strategic Planning"
                ].map((competency, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <span className="text-gray-800 font-medium">{competency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Showcasing innovative solutions and technical expertise</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Automated Coffee Machine",
                category: "Industrial IoT",
                description: "Developed an AI-powered coffee machine with embedded systems for Fresh and Honest industry. Features automated brewing, inventory management, and user preference learning.",
                tech: ["AI/ML", "IoT", "Embedded Systems", "Python"],
                color: "blue"
              },
              {
                title: "Appointment Booking Web App",
                category: "Web Application",
                description: "Full-stack web application for appointment scheduling with real-time availability, automated reminders, and user management system.",
                tech: ["React", "Node.js", "Database", "API Integration"],
                color: "purple"
              },
              {
                title: "Expense Tracker App",
                category: "Personal Finance",
                description: "Smart expense tracking application with AI-powered categorization, budget analysis, and financial insights dashboard.",
                tech: ["Python", "AI/ML", "Data Visualization", "APIs"],
                color: "teal"
              },
              {
                title: "HR Data Management System",
                category: "Enterprise Solution",
                description: "Comprehensive HR management system with employee data analytics, performance tracking, and automated reporting capabilities.",
                tech: ["Full Stack", "Database", "Analytics", "Dashboard"],
                color: "green"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r from-${project.color}-500 to-${project.color}-700`}></div>
                <div className="p-6">
                  <div className={`text-${project.color}-800 font-semibold text-sm uppercase tracking-wide mb-2`}>
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className={`px-3 py-1 bg-${project.color}-100 text-${project.color}-800 text-sm rounded-full`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Achievements</h2>
            <p className="text-xl text-gray-600">Continuous learning and professional development</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Certificate of Excellence",
                issuer: "Thozhil",
                category: "Achievement",
                color: "yellow"
              },
              {
                title: "Internship Completion",
                issuer: "Mindful AI",
                category: "Professional",
                color: "blue"
              },
              {
                title: "Google Solution Challenge",
                issuer: "Google",
                category: "Participation",
                color: "green"
              },
              {
                title: "Internship Completion",
                issuer: "Thirumula Soft IT Solutions",
                category: "Professional",
                color: "purple"
              },
              {
                title: "Accelerating Deep Learning with GPU",
                issuer: "Cognitive Class",
                category: "Technical",
                color: "red"
              },
              {
                title: "Python 101 for Data Science",
                issuer: "Cognitive Class",
                category: "Technical",
                color: "blue"
              },
              {
                title: "Ethics in the Age of Generative AI",
                issuer: "LinkedIn Learning",
                category: "Ethics",
                color: "teal"
              },
              {
                title: "What is Generative AI",
                issuer: "LinkedIn Learning",
                category: "AI/ML",
                color: "indigo"
              },
              {
                title: "Python Basics Certification",
                issuer: "Infosys Springboard",
                category: "Programming",
                color: "orange"
              }
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <Award className={`text-${cert.color}-600`} size={24} />
                  <span className={`px-3 py-1 bg-${cert.color}-100 text-${cert.color}-800 text-xs rounded-full font-semibold`}>
                    {cert.category}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600 font-medium">{cert.issuer}</p>
              </div>
            ))}
          </div>
          
          {/* Achievements */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Notable Achievements</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg">
                <Star className="text-yellow-600 mb-4" size={32} />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Academic Excellence</h4>
                <p className="text-gray-700">Multiple-time symposium winner across various colleges including prestigious VIT (Vellore Institute of Technology).</p>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg">
                <Award className="text-green-600 mb-4" size={32} />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Sports & Leadership</h4>
                <p className="text-gray-700">Active volleyball and cricket player, demonstrating teamwork, leadership, and competitive spirit beyond academics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Looking for exciting opportunities in AI, Web Development, or collaborations with businesses. 
              Open to freelance, consulting, or full-time roles.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <Mail className="text-blue-800 mb-4" size={32} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-700 mb-4">Drop me a line anytime</p>
                <a 
                  href="mailto:akashsingh2kfive@gmail.com"
                  className="text-blue-800 hover:text-blue-900 font-semibold flex items-center"
                >
                  akashsingh2kfive@gmail.com
                  <ExternalLink className="ml-2" size={16} />
                </a>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <Phone className="text-green-800 mb-4" size={32} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-700 mb-4">Call for urgent matters</p>
                <a 
                  href="tel:+917397271303"
                  className="text-green-800 hover:text-green-900 font-semibold"
                >
                  +91 7397271303
                </a>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <Linkedin className="text-purple-800 mb-4" size={32} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">LinkedIn</h3>
                <p className="text-gray-700 mb-4">Let's connect professionally</p>
                <a 
                  href="https://linkedin.com/in/akash-kumar-singh-o-7746242b5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-800 hover:text-purple-900 font-semibold flex items-center"
                >
                  View Profile
                  <ExternalLink className="ml-2" size={16} />
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Start a Project?</h3>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  I'm always excited to work on new challenges and innovative solutions. Whether you need 
                  AI-integrated web development, data science consulting, or want to explore how technology 
                  can transform your business, I'm here to help.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <ChevronRight className="text-blue-800 mr-3" size={20} />
                    <span>AI-Powered Web Development</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <ChevronRight className="text-blue-800 mr-3" size={20} />
                    <span>Data Science & Analytics</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <ChevronRight className="text-blue-800 mr-3" size={20} />
                    <span>Prompt Engineering Solutions</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <ChevronRight className="text-blue-800 mr-3" size={20} />
                    <span>Full Stack Development</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <ChevronRight className="text-blue-800 mr-3" size={20} />
                    <span>Business Consulting</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a 
                    href="mailto:akashsingh2kfive@gmail.com?subject=Project Inquiry"
                    className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center"
                  >
                    Start a Conversation
                    <Mail className="ml-2" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Akash Kumar Singh O</h3>
            <p className="text-gray-400 mb-6">
              AI-Powered Web Developer | CEO @ HIVE5 | Prompt Engineer | Data Science Enthusiast
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="mailto:akashsingh2kfive@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/akash-kumar-singh-o-7746242b5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="tel:+917397271303"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Phone"
              >
                <Phone size={24} />
              </a>
            </div>
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Akash Kumar Singh O. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Crafted with passion and precision
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;