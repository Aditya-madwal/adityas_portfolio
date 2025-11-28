import React, { useState, useEffect, useRef } from 'react';
import { Home, Briefcase, FileText, Code, Folder, Github, Linkedin, Globe, Sun, Moon, ArrowUp } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

const DockIcon = ({ mouseX, icon: Icon, href, label, onClick }) => {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [35, 70, 35]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer relative group"
    >
      <a
        href={href}
        onClick={onClick}
        target={href?.startsWith('http') ? "_blank" : undefined}
        rel={href?.startsWith('http') ? "noopener noreferrer" : undefined}
        className="w-full h-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        aria-label={label}
      >
        <motion.div style={{ width: useTransform(width, [35, 70], [18, 35]) }}>
          <Icon className="w-full h-full" />
        </motion.div>
      </a>
      <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
        {label}
      </span>
    </motion.div>
  );
};

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const mouseX = useMotionValue(Infinity);

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
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 max-w-[95vw] md:max-w-none">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end gap-2 px-3 py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-full shadow-xl"
      >
        
        {/* Scroll to Top Button - Visible only when scrolled */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.div
              initial={{ width: 0, opacity: 0, scale: 0 }}
              animate={{ width: 'auto', opacity: 1, scale: 1 }}
              exit={{ width: 0, opacity: 0, scale: 0 }}
              className="overflow-hidden"
            >
              <DockIcon mouseX={mouseX} icon={ArrowUp} label="Scroll to Top" onClick={scrollToTop} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Links - Hidden on Mobile */}
        <div className="hidden md:flex items-end gap-2 px-2 border-r border-gray-200 dark:border-gray-700">
          {navItems.map((item, index) => (
            <DockIcon key={index} mouseX={mouseX} {...item} />
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-end gap-2 px-2 border-r border-gray-200 dark:border-gray-700">
          {socialItems.map((item, index) => (
            <DockIcon key={index} mouseX={mouseX} {...item} />
          ))}
        </div>

        {/* Theme Toggle */}
        <DockIcon mouseX={mouseX} icon={darkMode ? Sun : Moon} label="Toggle Theme" onClick={toggleDarkMode} />
      </motion.div>
    </div>
  );
};

export default Navbar;
