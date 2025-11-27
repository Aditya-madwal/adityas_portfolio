import React, { useState, useEffect } from 'react';
import { Home, Briefcase, FileText, Code, Folder, Github, Linkedin, Globe, Sun, Moon, ArrowUp } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { icon: Home, label: 'Home', href: '#' },
    { icon: Briefcase, label: 'Experience', href: '#experience' },
    { icon: FileText, label: 'Credentials', href: '#credentials' },
    { icon: Code, label: 'Skills', href: '#skills' },
    { icon: Folder, label: 'Projects', href: '#projects' },
  ];

  const socialItems = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/aditya-madwal/' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/aditya-madwal-118525257' },
    { icon: Globe, label: 'Portfolio', href: 'https://aditya-madwal.vercel.app/' },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 max-w-[90vw] md:max-w-none">
      <div className="flex items-center gap-1 px-3 py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-full shadow-md transition-all duration-300 hover:scale-105">
        
        {/* Scroll to Top Button - Visible only when scrolled */}
        <button
          onClick={scrollToTop}
          className={`text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300 ease-in-out border-r border-gray-200 dark:border-gray-700 overflow-hidden
            ${showScrollTop ? 'w-10 opacity-100 mr-1 p-2' : 'w-0 opacity-0 mr-0 p-0 border-none'}
          `}
          aria-label="Scroll to Top"
          disabled={!showScrollTop}
        >
          <ArrowUp size={20} />
        </button>

        {/* Navigation Links - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-1 pr-4 border-r border-gray-200 dark:border-gray-700">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors tooltip-trigger relative group"
              aria-label={item.label}
            >
              <item.icon size={20} />
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-1 pl-2 pr-4 border-r border-gray-200 dark:border-gray-700">
          {socialItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors relative group"
              aria-label={item.label}
            >
              <item.icon size={20} />
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
            </a>
          ))}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          aria-label="Toggle Theme"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
