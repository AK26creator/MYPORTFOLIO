import React from 'react';
import { Building, Calendar, MapPin } from 'lucide-react';
import Aurora from './Aurora';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Developer',
      company: 'UNAI TECH',
      period: 'Jan 2024 - Present',
      location: 'Remote',
      type: 'Full-time',
      description: [
        'Delivered client websites, web apps, and portfolios with React, Node.js, Firebase, Tailwind',
        'Led EVE project, integrated 3D UI, AI chatbots, Stripe payments',
        'Collaborated with cross-functional teams to deliver high-quality solutions'
      ],
      color: 'blue'
    },
    {
      title: 'Intern - Project Engineer',
      company: 'Fresh and Honest',
      period: 'Jul 2025 - Aug 2025',
      location: 'Chennai, India',
      type: 'Internship',
      description: [
        'Built classification and prediction models using Python and Scikit-learn',
        'Worked on NLP and computer vision tasks like text classification and object detection',
        'Contributed to research and development of AI-driven solutions'
      ],
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-500 border-blue-200 dark:border-blue-800',
      green: 'bg-green-500 border-green-200 dark:border-green-800'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 w-full h-full">
        <Aurora
          colorStops={["#0F766E", "#9333EA", "#DC2626"]}
          blend={0.22}
          amplitude={0.9}
          speed={0.45}
        />
      </div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/12 z-1"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg relative z-10">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto drop-shadow-md relative z-10">
            My journey in software development and AI engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-8 bottom-8 w-px bg-white/30"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.company}
                  className="relative pl-20"
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-6 w-4 h-4 ${getColorClasses(exp.color)} rounded-full border-4 border-white dark:border-gray-900 shadow-lg`}></div>

                  {/* Experience card */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-lg text-gray-100 mt-1">
                          <Building className="w-5 h-5" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1">
                        <div className="flex items-center gap-2 text-gray-200">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-200">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 text-sm font-medium text-white ${getColorClasses(exp.color)} rounded-full`}>
                        {exp.type}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-3 text-gray-100"
                        >
                          <div className={`w-1.5 h-1.5 ${getColorClasses(exp.color)} rounded-full mt-2 flex-shrink-0`}></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
