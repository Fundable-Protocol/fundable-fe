import React from 'react';

interface DistributionIconProps {
  size?: number; // Optional size prop
  color?: string; // Optional color prop
}

const DistributionIcon: React.FC<DistributionIconProps> = ({ size = 22, color = '#E1E1E1' }) => {
    return (
      <svg width={size} height={size} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.24919 20.6657H13.7492C18.3325 20.6657 20.1659 18.8324 20.1659 14.2491V8.74906C20.1659 4.16573 18.3325 2.3324 13.7492 2.3324H8.24919C3.66585 2.3324 1.83252 4.16573 1.83252 8.74906V14.2491C1.83252 18.8324 3.66585 20.6657 8.24919 20.6657Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.71582 13.7816L8.89749 10.9491C9.20915 10.5458 9.78665 10.4724 10.19 10.7841L11.8675 12.1041C12.2708 12.4158 12.8483 12.3424 13.16 11.9483L15.2775 9.21661"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  
  export default DistributionIcon;