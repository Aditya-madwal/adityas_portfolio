import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Positions from './components/Positions';

function App() {
  const [darkMode, setDarkMode] = useState(true);



  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen transition-colors duration-300 pb-32 font-sans selection:bg-yellow-200 dark:selection:bg-yellow-900 selection:text-black dark:selection:text-white">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="container mx-auto">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Positions />
      </main>
    </div>
  );
}

export default App;
