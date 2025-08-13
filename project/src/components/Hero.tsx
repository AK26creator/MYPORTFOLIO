import React from "react";
import { ArrowDown, ExternalLink, Eye, Mail } from "lucide-react";
import profileImg from "../assets/profile.jpg"; // Make sure the path is correct

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Motivated{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Engineer
              </span>{" "}
              &{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Building AI-powered solutions, web apps, and innovative digital
              experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProjects}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2"
              >
                <Eye className="w-5 h-5" />
                View Projects
              </button>
              <button
                onClick={scrollToContact}
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </button>
              <button
                onClick={() => window.open("https://drive.google.com/file/d/11Uxta9UIGip5E_LE6K5OMVlkKhiga4qJ/view?usp=sharing", "_blank")}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                View Resume
              </button>
            </div>
          </div>

          {/* Image Section - Full Card */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full shadow-2xl overflow-hidden border-4 border-black dark:border-white">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
