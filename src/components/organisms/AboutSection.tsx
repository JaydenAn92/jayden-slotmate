'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="about-section flex flex-col items-center md:items-start md:space-x-8 py-8 px-4"
    >
      <h2 className="text-3xl font-bold mb-6">About This Project</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">기술 스택</h3>
          <p>React, Next.js, TypeScript, Framer Motion, Tailwind CSS, Lucide React</p>
        </div>
        <div className="card bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">빌드 도구</h3>
          <p>Next.js 빌드 도구, ESLint, Prettier, Husky, Lint-staged, Commitlint</p>
        </div>
        <div className="card bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Git</h3>
          <p>버전 관리 및 협업을 위한 Git과 GitHub 사용</p>
        </div>
        <div className="card bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">아토믹 디자인</h3>
          <p>Atoms, Molecules, Organisms, Templates, Pages로 구성된 디자인 시스템</p>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection; 