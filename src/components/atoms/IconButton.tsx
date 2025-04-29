import React, { ReactNode } from 'react';

interface IconButtonProps {
  icon: ReactNode;
  onClick?: () => void;
  className?: string; 
  "aria-label"?: string; 
}


export const IconButton: React.FC<IconButtonProps> = ({ 
  icon, 
  onClick, 
  "aria-label": ariaLabel, 
  className
}) => (
  <button 
    className={`text-gray-400 hover:text-white p-1 ${className || ''}`} 
    onClick={onClick}
    aria-label={ariaLabel}
  >
    {icon}
  </button>
);