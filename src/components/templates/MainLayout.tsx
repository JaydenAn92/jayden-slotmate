import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, className }) => {
  return (
    <div className={`min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </div>
  );
};

export default MainLayout; 