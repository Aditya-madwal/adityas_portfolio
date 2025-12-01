import React, { useState } from 'react';
import { Globe, Github, ArrowUpRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import data from '../data.json';

const Projects = () => {
  const { projects } = data;
  const [selectedId, setSelectedId] = useState(null);

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section id="projects" className="py-20 px-4 max-w-2xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <span className="px-3 py-1 bg-black text-white dark:bg-white dark:text-black rounded-full text-xs font-medium mb-3">
          My Projects
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Check out my latest work
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl text-sm">
          I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <motion.div
            layoutId={`card-container-${project.id}`}
            key={project.id}
            onClick={() => setSelectedId(project.id)}
            className="flex flex-col md:flex-row bg-gray-50 dark:bg-[#040404] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow h-auto md:h-[400px] cursor-pointer group"
          >
            {/* Content Section */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
              <motion.span 
                layoutId={`timeline-${project.id}`}
                className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2 block"
              >
                {project.timeline}
              </motion.span>
              <motion.h3 
                layoutId={`title-${project.id}`}
                className="text-2xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3"
              >
                {project.title}
                
              </motion.h3>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300 w-fit mb-4">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                click to expand
              </span>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                {project.description[0]}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.slice(0, 4).map((tech, i) => (
                  <span key={i} className="px-2.5 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                  Live Project
                  <ArrowUpRight size={14} />
                </button>
                <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 text-xs font-semibold rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <Github size={16} />
                  Source
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1 relative h-64 md:h-auto overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-end p-2">
                 <motion.img 
                  layoutId={`image-${project.id}`}
                  src={project.thumbnailImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover rounded-xl transform transition-transform duration-700"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?fit=crop&w=800&h=600";
                  }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              layoutId={`card-container-${selectedId}`}
              className="fixed inset-4 md:inset-10 z-50 bg-white dark:bg-[#040404] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col md:flex-row"
            >
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                className="absolute top-4 right-4 p-2 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 rounded-full z-10 transition-colors"
              >
                <X size={24} className="text-red-500" />
              </button>

              {/* Left Column: 70% - Details */}
              <div className="w-full md:w-[70%] h-full overflow-y-auto p-8 md:p-12 scrollbar-hide">
                 <motion.span 
                    layoutId={`timeline-${selectedId}`}
                    className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 block"
                  >
                    {selectedProject.timeline}
                  </motion.span>
                  <motion.h2 
                    layoutId={`title-${selectedId}`}
                    className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                  >
                    {selectedProject.title}
                  </motion.h2>

                  <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-8">
                    {selectedProject.description.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a 
                      href={selectedProject.liveUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-base font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                    >
                      Live Project
                      <ArrowUpRight size={20} />
                    </a>
                    <a 
                      href={selectedProject.githubUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 text-base font-semibold rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Github size={20} />
                      Source Code
                    </a>
                  </div>
              </div>

              {/* Right Column: 30% - Images */}
              <div className="w-full md:w-[30%] h-full overflow-y-auto p-4 space-y-4 border-l border-gray-200 dark:border-gray-800">
                 {selectedProject.gallery && selectedProject.gallery.length > 0 ? (
                   selectedProject.gallery.map((img, index) => (
                     <div key={index} className="rounded-xl overflow-hidden shadow-sm">
                       <img 
                        src={img.url} 
                        alt={img.caption} 
                        className="w-full h-auto object-cover"
                        onError={(e) => {
                          e.target.onerror = null; 
                          e.target.src = "/aristotle.png";
                        }}
                       />
                     </div>
                   ))
                 ) : (
                   <motion.img 
                    layoutId={`image-${selectedId}`}
                    src={selectedProject.thumbnailImage} 
                    alt={selectedProject.title} 
                    className="w-full h-auto rounded-xl shadow-md"
                   />
                 )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
