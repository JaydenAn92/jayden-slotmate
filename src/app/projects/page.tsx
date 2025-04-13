'use client';
import React from 'react';
import { motion } from 'framer-motion';

const ProjectsPage: React.FC = () => {
  const projects = [
    { title: 'Project One', description: 'Description for project one.' },
    { title: 'Project Two', description: 'Description for project two.' },
    { title: 'Project Three', description: 'Description for project three.' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-gray-900 dark:text-white py-24 px-4"
    >
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsPage; 