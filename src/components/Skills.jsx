import React from 'react';
import data from '../data.json';

const Skills = () => {
  const { technicalSkills } = data;
  
  const allSkills = [
    ...technicalSkills.languages,
    ...technicalSkills.frameworks,
    ...technicalSkills.tools,
    ...technicalSkills.uiux
  ];

  return (
    <section id="skills" className="py-8 px-4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {allSkills.map((skill, index) => (
          <span 
            key={index} 
            className="px-3 py-1 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-md text-sm font-medium shadow-sm transition-transform hover:scale-105 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
