import React from 'react';
import { Building, Calendar, MapPin } from 'lucide-react';

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
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My journey in software development and AI engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-8 bottom-8 w-px bg-gray-300 dark:bg-gray-600"></div>

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
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-lg text-gray-600 dark:text-gray-300 mt-1">
                          <Building className="w-5 h-5" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1">
                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
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
                          className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
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