
import React from 'react';

interface RollbackLogoProps {
  className?: string;
}

const RollbackLogo: React.FC<RollbackLogoProps> = ({ className = 'h-10 w-10' }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} ${className.includes('animate-spin-slow') ? 'animate-spin-slow' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="48" fill="#FAEBD1" stroke="#3C2415" strokeWidth="4" />
      
      {/* Petals */}
      <path d="M50 50 L70 30 A28 28 0 0 0 30 30 Z" fill="#E9A344" />
      <path d="M50 50 L30 30 A28 28 0 0 0 30 70 Z" fill="#F5C678" />
      <path d="M50 50 L30 70 A28 28 0 0 0 70 70 Z" fill="#E9A344" />
      <path d="M50 50 L70 70 A28 28 0 0 0 70 30 Z" fill="#F5C678" />
      
      {/* Center circle */}
      <circle cx="50" cy="50" r="10" fill="#8B5E3C" />
    </svg>
  );
};

export default RollbackLogo;
