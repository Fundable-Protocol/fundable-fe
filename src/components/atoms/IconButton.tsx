import React, { ReactNode } from 'react';

interface IconButtonProps {
  icon: ReactNode;
  onClick?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => (
  <button className="text-gray-400 hover:text-white p-1" onClick={onClick}>
    {icon}
  </button>
);