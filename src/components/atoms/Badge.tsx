import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import React from 'react';

interface BadgeProps {
  text: string;
  color: 'green' | 'red' ;
}

export const Badge: React.FC<BadgeProps> = ({ text, color }) => {
  const colorClasses = {
    green: "bg-green-500/20 text-green-500",
    red: "bg-red-500/20 text-red-500",
  };
  
  return (
    <span className={`text-xs px-2 py-1 rounded ${colorClasses[color]}`}>
      {text}
      {color == "green" ? <ArrowUpRight className='inline' size={16}/> : <ArrowDownRight  className='inline' size={16}/>}
    </span>
  );
};
