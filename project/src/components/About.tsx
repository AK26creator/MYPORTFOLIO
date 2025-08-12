import React from 'react';
import { MapPin, Languages, Trophy, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate about creating innovative solutions that make a difference
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Story</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Motivated AI Engineer with expertise in machine learning, deep learning, and model deployment, 
                  aiming to contribute to impactful AI solutions in fast-paced, innovation-driven environments. 
                  Skilled in Python, TensorFlow, full-stack development, and solving real-world problems through 
                  intelligent systems.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg flex items-center gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">Chennai, India</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg flex items-center gap-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                    <Languages className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Languages</h4>
                    <p className="text-gray-600 dark:text-gray-300">English, Tamil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Trophy className="w-8 h-8 text-yellow-500" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Achievements</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Startup Winner</h4>
                    <p className="text-gray-600 dark:text-gray-300">1st place at BizCanvas 2025</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Symposium Winner</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      TRIDENT'25 for innovation, startup strategy, and tech presentation excellence
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-8 h-8 text-blue-500" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <p className="text-gray-600 dark:text-gray-300">UI/UX Design (Coursera/Udemy)</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <p className="text-gray-600 dark:text-gray-300">Git & GitHub (freeCodeCamp)</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <p className="text-gray-600 dark:text-gray-300">Member of Global Startup Club</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;