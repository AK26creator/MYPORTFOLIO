import React from "react";
import { ArrowDown, ExternalLink, Eye, Mail } from "lucide-react";
import profileImg from "../assets/profile.jpg"; // Make sure the path is correct
import Aurora from "./Aurora";

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Aurora Background */}
      <div className="absolute inset-0 w-full h-full">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.3}
          amplitude={1.2}
          speed={0.4}
        />
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-1"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Motivated{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Engineer
              </span>{" "}
              {" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-100 mb-8 drop-shadow-md">
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
                className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold flex items-center gap-2 backdrop-blur-sm transition-all duration-300"
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
            <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full shadow-2xl overflow-hidden border-4 border-white/20 backdrop-blur-sm">
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
          <ArrowDown className="w-6 h-6 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
