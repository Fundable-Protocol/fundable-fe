import Image from 'next/image';
import React from 'react'
import { Raleway, DM_Sans } from 'next/font/google';

interface UtilityDivProps {
    title: string;
    description: string;
    image: string;
    color: string;
}

const raleway = Raleway({
    weight: ['400', '700'],
    subsets: ['latin'],
})

const dmSans = DM_Sans({
    weight: ['400', '700'],
    subsets: ['latin'],
})

function UtilityDiv({title, description, image, color}: UtilityDivProps) {
  return (
    <div className='flex items-start gap-4 bg-[#1A1C2C] rounded-lg p-4 w-full lg:w-[33rem] min-h-[8rem] hover:bg-[#252837] transition-all duration-300'>
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
            <p className={`${raleway.className} font-semibold text-lg lg:text-xl`} style={{ color }}>{title}</p>
            <p className={`${dmSans.className} text-[#B7B4CB] text-sm lg:text-base`}>{description}</p>
        </div>
    </div>
  )
}

export default UtilityDiv
