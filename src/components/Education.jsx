import React from 'react';
import data from '../data.json';

const Education = () => {
  const { credentials } = data;

  return (
    <section id="credentials" className="py-8 px-4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Education</h2>
      <div className="space-y-8">
        {credentials.education.map((edu, index) => (
          <div key={index} className="flex gap-4 group">
            <div className="shrink-0 w-12 h-12 rounded-full bg-white dark:bg-gray-800 overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
              <img 
                src={edu.logo} 
                alt={edu.institution} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-gray-900 dark:text-white text-base">{edu.institution}</h3>
                <span className="text-gray-500 dark:text-gray-500 text-sm tabular-nums">{edu.year}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.degree}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
