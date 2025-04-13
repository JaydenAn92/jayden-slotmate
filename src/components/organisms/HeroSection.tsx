'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/atoms/Button';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';
import { HeroSectionProps } from '@/types/components/organisms/HeroSection';
import clsx from 'clsx';

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={clsx('flex flex-col items-center justify-center min-h-screen text-gray-900 dark:text-white px-4', className)}
    >
      <div className="hero-section h-[80vh] min-h-[60vh] flex flex-col items-center justify-center p-4 sm:p-8">
        <Heading className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">더 나은 내일을 위해, 지금 제안해주세요.</Heading>
        <Text className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">지금 제안하면, 내일의 성공적인 프로젝트가 기다리고 있습니다. 지금 바로 제안을 남겨주세요.</Text>
        <Button className="rounded-full bg-blue-700 text-white hover:bg-blue-800 dark:bg-gray-800 dark:text-white">View Projects</Button>
      </div>
    </motion.section>
  );
};

export default HeroSection; 