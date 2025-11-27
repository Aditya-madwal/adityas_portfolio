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
          Beyond Academics
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
          Throughout my College, I've had the privilege of contributing to various organizations, taking on diverse roles, and leading impactful projects. Here's a look at my professional experience and the responsibilities I've embraced.
        </p>
      </div>

      <div className="space-y-8">
        {positions.map((pos, index) => (
          <div key={index} className="flex gap-4 group">
            <div className="shrink-0 w-12 h-12 rounded-full bg-white dark:bg-gray-800 overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
               <img 
                  src={pos.logo} 
                  alt={pos.company} 
                  className="w-full h-full object-cover"
                />
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-gray-900 dark:text-white text-base">{pos.title}</h3>
                <span className="text-gray-500 dark:text-gray-500 text-sm tabular-nums">{pos.period}</span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{pos.company}</p>
              
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-2">
                {pos.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Positions;
