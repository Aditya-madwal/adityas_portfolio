import React from 'react';
import data from '../data.json';

const Positions = () => {
  const { positions } = data;

  return (
    <section id="positions" className="py-16 px-4 max-w-2xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="px-3 py-1 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm font-medium mb-4">
          Positions of Responsibility
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          I like building things
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
          During my time in university, I attended 21+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.
        </p>
      </div>

      <div className="relative border-l border-gray-200 dark:border-gray-800 ml-3 md:ml-6 space-y-12">
        {positions.map((pos, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            {/* Timeline Dot/Logo */}
            <div className="absolute -left-3 md:-left-3 top-0">
              <div className="w-6 h-6 md:w-6 md:h-6 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-700 overflow-hidden flex items-center justify-center">
                 {/* Using a generic placeholder if logo fails or is just a path string. 
                     The design shows logos. I'll use the logo from data. 
                 */}
                 <img 
                    src={pos.logo} 
                    alt={pos.company} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://via.placeholder.com/40"; 
                    }}
                  />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
               <span className="text-xs text-gray-500 dark:text-gray-500 font-medium mb-1 sm:mb-0 order-1 sm:order-2">
                {pos.period}
              </span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white order-2 sm:order-1">
                {pos.title}
              </h3>
            </div>
            
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {pos.company}
            </div>
            
             <div className="text-sm text-gray-500 dark:text-gray-500 mb-4">
              {pos.location}
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {pos.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Positions;
