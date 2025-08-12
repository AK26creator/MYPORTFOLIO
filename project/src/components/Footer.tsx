import React from 'react';
import { ArrowUp, Linkedin, Github, ExternalLink, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/madhan-kumar-p-759402324',
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: '#',
      color: 'hover:text-gray-600'
    },
    {
      name: 'Portfolio',
      icon: ExternalLink,
      href: '#',
      color: 'hover:text-purple-600'
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Akash Kumar Singh O</h3>
            <p className="text-gray-400 max-w-md">
              AI Engineer & Full Stack Developer passionate about creating innovative solutions 
              that make a difference in the world.
            </p>
          </div>

          {/* Right section */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`p-3 bg-gray-800 dark:bg-gray-700 rounded-full ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-700 dark:border-gray-600">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <span>&copy; 2025 Akash Kumar Singh O. Made with</span>
              <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
              <span>and lots of coffee.</span>
            </div>
            <div className="flex items-center gap-6">
              <span>Built with React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;