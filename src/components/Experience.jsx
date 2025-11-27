import React from 'react';
import data from '../data.json';

const Experience = () => {
  const { experience } = data;

  return (
    <section id="experience" className="py-8 px-4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Work Experience</h2>
      <div className="space-y-8">
        {experience.map((job, index) => (
          <div key={index} className="flex gap-4 group">
            <div className="shrink-0 w-12 h-12 rounded-full bg-white dark:bg-gray-800 overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?fit=crop&w=100&h=100" 
                alt={job.company} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-gray-900 dark:text-white text-base">{job.company}</h3>
                <span className="text-gray-500 dark:text-gray-500 text-sm tabular-nums">{job.period}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{job.title}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-2">
                {job.description}
              </p>
              {/* Achievements if needed, but the image design is simple. I'll keep it simple but maybe add achievements if they fit nicely or just keep description. 
                  The design in image 1 is very clean, just title/company/date. 
                  I'll stick to the clean design but maybe show achievements in a more subtle way or skip them to match the "exact layout" request.
                  The user said "exact same layout". The layout in image 1 doesn't show long descriptions. 
                  However, the user provided detailed data. I will include the description but keep it clean.
              */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
