'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-gray-900 dark:text-white py-24 px-4 flex flex-col items-center"
    >
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-center max-w-xl">
        I am a passionate front-end developer with a love for creating intuitive and dynamic user experiences. I enjoy working with modern web technologies and continuously learning new skills to enhance my craft.
      </p>
    </motion.div>
  );
};

export default AboutPage; 