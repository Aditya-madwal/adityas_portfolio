import React from 'react';
import data from '../data.json';

const Hero = () => {
  const { personal, about } = data;

  return (
    <section id="home" className="pt-24 pb-8 px-4 max-w-2xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-8">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Hi, I'm {personal.name.split(' ')[0]} <span className="inline-block animate-wave origin-bottom-right">✌️</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Full-Stack Developer | UI/UX Enthusiast | Passionate about building scalable and user-friendly applications
          </p> 
          <div className="pt-2">
            <a 
              href="https://drive.google.com/file/d/1pZpM7rUeTcOTLDywZmKKW9f22RYjkn7U/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium transition-all"
            >
              View Resume 
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
        <div className="relative shrink-0">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
            <img 
              src="/me.jpg" 
              alt={personal.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          I'm a passionate <span className="bg-yellow-200 px-2 py-0.5 rounded dark:text-black">Full-Stack Developer</span> with expertise in building scalable web applications. Currently pursuing Computer Science at <span className="bg-yellow-200 px-2 py-0.5 rounded dark:text-black">K.I.E.T Group of Institutions</span> with hands-on experience in Django, React, and modern web technologies.
        </p>
         <div className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
            <p>I focus on:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
                {about.focus.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
