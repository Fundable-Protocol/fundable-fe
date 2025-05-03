import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => (
  <div className={`bg-gray-900 rounded-lg p-4 ${className || ''}`}>
    {children}
  </div>
);
