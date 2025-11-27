import React from 'react';
import { Globe, Github } from 'lucide-react';
import data from '../data.json';

const Projects = () => {
  const { projects } = data;

  return (
    <section id="projects" className="py-16 px-4 max-w-2xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <span className="px-3 py-1 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm font-medium mb-4">
          My Projects
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Check out my latest work
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl">
          I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
              {/* Using dummy image if local path is provided, as per user's initial request for dummy images, 
                  but since they provided specific paths now, I'll try to use them but fallback to a placeholder style if broken 
                  or just use a generic placeholder for now since I know the files don't exist locally.
                  Actually, I'll use the path provided. If it breaks, it breaks (or shows alt).
                  To make it look good immediately, I will use a conditional check or just a placeholder if it starts with /.
                  Wait, the user said "for every image related component use a single dummy image" in the FIRST prompt.
                  But in the SECOND prompt they gave specific data.
                  I will use the data provided.
              */}
              <img 
                src={project.thumbnailImage} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?fit=crop&w=500&h=300"; // Fallback image
                }}
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-1">{project.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">{project.timeline}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1 line-clamp-3">
                {project.shortDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <a 
                  href={project.liveUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-medium rounded hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  <Globe size={14} />
                  Website
                </a>
                <a 
                  href={project.githubUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white text-xs font-medium rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Github size={14} />
                  Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
