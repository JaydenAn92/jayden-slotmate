'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-gray-900 dark:text-white py-24 px-4"
    >
      <h1 className="text-3xl font-bold mb-8">Contact</h1>
      <ul className="space-y-4">
        <li className="flex items-center space-x-2">
          <Mail className="w-5 h-5" />
          <a href="mailto:anbum8463@gmail.com" className="hover:underline">anbum8463@gmail.com</a>
        </li>
        <li className="flex items-center space-x-2">
          <Github className="w-5 h-5" />
          <a href="https://github.com/JaydenAn92" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
        </li>
        <li className="flex items-center space-x-2">
          <Linkedin className="w-5 h-5" />
          <a href="https://www.linkedin.com/in/jayden92/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        </li>
      </ul>
    </motion.div>
  );
};

export default ContactPage; 