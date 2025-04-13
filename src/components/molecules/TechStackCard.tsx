import React from 'react';
import { FaReact, FaCss3Alt, FaGithub, FaGitAlt, FaCubes, FaTools } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiFramer, SiEslint, SiPrettier, SiCommitlint } from 'react-icons/si';

const TechStackCard: React.FC = () => {
  return (
    <div className="tech-stack-card bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 px-4">
      <h3 className="text-xl font-semibold mb-4">기술 스택</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <FaReact className="w-6 h-6 text-blue-500" />
          <span>React</span>
        </div>
        <div className="flex items-center space-x-2">
          <SiNextdotjs className="w-6 h-6 text-black" />
          <span>Next.js</span>
        </div>
        <div className="flex items-center space-x-2">
          <SiTypescript className="w-6 h-6 text-blue-600" />
          <span>TypeScript</span>
        </div>
        <div className="flex items-center space-x-2">
          <SiFramer className="w-6 h-6 text-pink-500" />
          <span>Framer Motion</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaCss3Alt className="w-6 h-6 text-teal-500" />
          <span>Tailwind CSS</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaGithub className="w-6 h-6 text-gray-800" />
          <span>GitHub</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaGitAlt className="w-6 h-6 text-orange-500" />
          <span>Git</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaCubes className="w-6 h-6 text-purple-500" />
          <span>Atomic Design</span>
        </div>
        <div className="flex items-center space-x-2">
          <SiEslint className="w-6 h-6 text-purple-600" />
          <span>ESLint</span>
        </div>
        <div className="flex items-center space-x-2">
          <SiPrettier className="w-6 h-6 text-pink-600" />
          <span>Prettier</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaTools className="w-6 h-6 text-red-600" />
          <span>Husky</span>
        </div>
        <div className="flex items-center space-x-2">
          <SiCommitlint className="w-6 h-6 text-green-600" />
          <span>Commitlint</span>
        </div>
      </div>
    </div>
  );
};

export default TechStackCard; 