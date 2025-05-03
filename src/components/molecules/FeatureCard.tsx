'use client';

import React, { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  buttonText: string;
  icon?: ReactNode;
  imageUrl?: string;
  imageAlt?: string;

}

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  buttonText,
  icon,
  imageUrl,
  imageAlt = "Feature illustration",

}) => (
  <div className="glass flex flex-col gap-2 space-y-1 p-6 lg:p-8">   
    
    
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-medium text-white">{title}</h3>
        {icon && <div className="text-indigo-400">{icon}</div>}
      </div>
      
      {/* Description */}
      <p className="text-lg text-gray-300 mb-6 h-[70%]">{description}</p>
      
      {/* Button */}
      <div className="mt-auto mb-4">
        <button 
          
          className="flex items-center gap-2 text-lg text-white/90 hover:text-white group transition-colors py-1.5"
        >
          {buttonText} <ArrowRight size={20} className='group-hover:ml-2 ' />
        </button>
    </div>
    
    {/* Bottom right image */}
    {imageUrl ? (
      <div className="absolute bottom-0 right-0 w-24 h-24">
        <Image src={imageUrl} alt={imageAlt} fill />
      </div>
    ) : (
      <div className="absolute bottom-0 right-0 w-20 h-20">
        <div className="w-12 h-12 bg-gray-800 rounded-full absolute bottom-2 right-2 opacity-50"></div>
        <div className="w-10 h-10 bg-indigo-500/20 border border-indigo-400/30 rounded-lg rotate-12 absolute bottom-6 right-6"></div>
      </div>
    )}
  </div>
);

export default FeatureCard;