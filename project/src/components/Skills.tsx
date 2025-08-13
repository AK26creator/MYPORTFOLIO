import React from 'react';
import { Code, Wrench, Brain, Users } from 'lucide-react';
import Aurora from './Aurora';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      color: 'blue',
      skills: ['Python', 'JavaScript', 'HTML', 'CSS']
    },
    {
      title: 'Frameworks & Tools',
      icon: Wrench,
      color: 'green',
      skills: ['React', 'Node.js', 'Firebase', 'Tailwind CSS', 'TensorFlow', 'Scikit-learn']
    },
    {
      title: 'AI & Development',
      icon: Brain,
      color: 'purple',
      skills: ['Git', 'GitHub', 'Problem-solving', 'AI Tools']
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'orange',
      skills: ['UI/UX (Basics)', 'Customer Handling', 'Communication Skills']
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600 border-blue-200 dark:border-blue-800',
      green: 'from-green-500 to-green-600 border-green-200 dark:border-green-800',
      purple: 'from-purple-500 to-purple-600 border-purple-200 dark:border-purple-800',
      orange: 'from-orange-500 to-orange-600 border-orange-200 dark:border-orange-800'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 w-full h-full">
        <Aurora
          colorStops={["#059669", "#7C3AED", "#DC2626"]}
          blend={0.25}
          amplitude={1.0}
          speed={0.4}
        />
      </div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/15 z-1"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg relative z-10">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto drop-shadow-md relative z-10">
            A comprehensive toolkit for building modern AI and web solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`bg-gradient-to-br ${getColorClasses(category.color)} p-1 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 h-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 mb-4">
                  <category.icon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                      style={{ animationDelay: `${(index * 150) + (skillIndex * 50)}ms` }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getColorClasses(category.color)}`}></div>
                      <span className="text-gray-100">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Proficiency Bars */}
        <div className="mt-16 max-w-4xl mx-auto relative z-10">
          <h3 className="text-2xl font-bold text-white mb-8 text-center drop-shadow-lg">
            Core Competencies
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Python & AI/ML', level: 90, color: 'blue' },
              { name: 'React & Frontend', level: 85, color: 'green' },
              { name: 'Node.js & Backend', level: 80, color: 'purple' },
              { name: 'Problem Solving', level: 95, color: 'orange' }
            ].map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-100 font-medium">{skill.name}</span>
                  <span className="text-gray-200">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${getColorClasses(skill.color)} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
