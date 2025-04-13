import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, className }) => {
  return (
    <h2 className={`text-2xl font-bold text-gray-900 dark:text-gray-100 ${className}`}>
      {children}
    </h2>
  );
};

export default Heading; 