import Image, { StaticImageData } from 'next/image';
import React from 'react'
import clsx from 'clsx';

interface UtilityDivProps {
    title: string;
    description: string;
    image: StaticImageData;
    color: 'efficient' | 'secure' | 'nolimits';
}

function UtilityDiv({title, description, image, color}: UtilityDivProps) {
  const titleColorClass = {
    'efficient': 'text-utility-efficient',
    'secure': 'text-utility-secure',
    'nolimits': 'text-utility-nolimits'
  }[color];

  return (
    <div className='flex items-start gap-4 bg-utility-card rounded-lg p-4 w-full lg:w-[33rem] min-h-[8rem] hover:bg-utility-card_hover transition-all duration-300'>
        <div className='min-w-[48px] min-h-[48px] flex items-center justify-center'>
            <Image 
                src={image} 
                alt={title} 
                width={48} 
                height={48} 
                className='object-contain'
            />
        </div>
        <div className='flex flex-col gap-2'>
            <p className={clsx('font-raleway font-semibold text-lg lg:text-xl', titleColorClass)}>{title}</p>
            <p className="font-dm-sans text-utility-text text-sm lg:text-base">{description}</p>
        </div>
    </div>
  )
}

export default UtilityDiv
