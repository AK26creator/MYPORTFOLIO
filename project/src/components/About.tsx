import React from 'react';
import { MapPin, Languages, Trophy, Award } from 'lucide-react';
import Aurora from './Aurora';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 w-full h-full">
        <Aurora
          colorStops={["#1E40AF", "#7C3AED", "#EC4899"]}
          blend={0.2}
          amplitude={0.8}
          speed={0.3}
        />
      </div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10 z-1"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg relative z-10">
            About Me
          </h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto drop-shadow-md relative z-10">
            Passionate about creating innovative solutions that make a difference
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-4">My Story</h3>
                <p className="text-gray-100 leading-relaxed">
                  Motivated AI Engineer with expertise in machine learning, deep learning, and model deployment, 
                  aiming to contribute to impactful AI solutions in fast-paced, innovation-driven environments. 
                  Skilled in Python, TensorFlow, full-stack development, and solving real-world problems through 
                  intelligent systems.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg flex items-center gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-gray-100">Chennai, India</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg flex items-center gap-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                    <Languages className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Languages</h4>
                    <p className="text-gray-100">English, Tamil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Trophy className="w-8 h-8 text-yellow-500" />
                  <h3 className="text-2xl font-bold text-white">Achievements</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-white">Startup Winner</h4>
                    <p className="text-gray-100">1st place at BizCanvas 2025</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-white">Symposium Winner</h4>
                    <p className="text-gray-100">
                      TRIDENT'25 for innovation, startup strategy, and tech presentation excellence
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-8 h-8 text-blue-500" />
                  <h3 className="text-2xl font-bold text-white">Certifications</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <p className="text-gray-100">UI/UX Design (Coursera/Udemy)</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <p className="text-gray-100">Git & GitHub (freeCodeCamp)</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <p className="text-gray-100">Member of Global Startup Club</p>
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
