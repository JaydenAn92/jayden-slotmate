"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

/* eslint-disable @typescript-eslint/no-unused-vars */

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} onClick={onClick} className={`${isActive ? 'text-blue-500' : 'text-gray-700 dark:text-gray-300'} ${className}`}>
      {children}
    </Link>
  );
};

export default NavLink; 