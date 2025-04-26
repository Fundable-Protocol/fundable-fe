import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline';
  onClick?: () => void;
}

export const DashButton: React.FC<ButtonProps> = ({ 
  children, 
  variant = "primary",
  onClick
}) => {
  const variantClasses = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white",
    outline: "border border-gray-600 hover:border-gray-500 text-gray-400 hover:text-gray-300"
  };
  
  return (
    <button 
      className={`px-3 py-1 rounded text-sm ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};