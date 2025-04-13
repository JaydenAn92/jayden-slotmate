'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Text from '@/components/atoms/Text';
import Heading from '@/components/atoms/Heading';
import { TimelineProps } from '@/types/components/organisms/Timeline';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

const Timeline: React.FC<TimelineProps> = ({ items = [
  { date: '2023-01-01', title: 'Project Start', description: 'Initial project setup and planning.' },
  { date: '2023-02-15', title: 'First Milestone', description: 'Completed the first major feature set.' },
  { date: '2023-03-30', title: 'Launch', description: 'Officially launched the project to the public.' }
], className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`space-y-8 ${className}`}
    >
      {items.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row md:items-center bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="md:w-1/4">
            <Text className="font-semibold text-gray-500 dark:text-gray-400">{item.date}</Text>
          </div>
          <div className="md:w-3/4">
            <Heading className="text-lg text-blue-500 dark:text-blue-400">{item.title}</Heading>
            <Text className="text-gray-600 dark:text-gray-300">{item.description}</Text>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Timeline; 