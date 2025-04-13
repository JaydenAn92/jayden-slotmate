"use client";

import React, { useState } from 'react';
import NavLink from '@/components/atoms/NavLink';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-100 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="cursor-pointer">
          <div className="text-xl font-bold">Progress J</div>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <NavLink href="/" onClick={closeMenu} className="text-blue-500">Home</NavLink>
          <NavLink href="/about" onClick={closeMenu} className="text-gray-700 dark:text-gray-300">About</NavLink>
          <NavLink href="/projects" onClick={closeMenu} className="text-gray-700 dark:text-gray-300">Projects</NavLink>
          <NavLink href="/contact" onClick={closeMenu} className="text-gray-700 dark:text-gray-300">Contact</NavLink>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          <span className="material-icons">menu</span>
        </button>
      </div>
      {isOpen && (
        <div className="fixed top-14 w-full z-20 md:hidden bg-white dark:bg-gray-900">
          <nav className="flex flex-col space-y-2 p-4">
            <NavLink href="/" onClick={closeMenu} className="text-blue-500">Home</NavLink>
            <NavLink href="/about" onClick={closeMenu} className="text-gray-700 dark:text-gray-300">About</NavLink>
            <NavLink href="/projects" onClick={closeMenu} className="text-gray-700 dark:text-gray-300">Projects</NavLink>
            <NavLink href="/contact" onClick={closeMenu} className="text-gray-700 dark:text-gray-300">Contact</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 