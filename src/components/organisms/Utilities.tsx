import React from 'react'
import Image from 'next/image'
import UtilityDiv from '../atoms/UtilityDiv'

import efficient from '../../../public/imgs/efficient.svg'
import secure from '../../../public/imgs/secure.svg'
import noLimits from '../../../public/imgs/no-limits.svg'
import section3 from '../../../public/imgs/section3.png'

const utilities = [{
    title: 'Efficient',
    description: 'Streamline your funding workflows, reduce administrative overhead, and allocate more resources to driving impact and growth.',
    image: efficient,
    color: 'efficient'
}, {
    title: 'Secure & Insured',
    description: 'Ensure transparent and secure funding distributions, building trust with your community and providing a clear audit trail for all transactions.',
    image: secure,
    color: 'secure'
}, {
    title: 'No Limits',
    description: 'Unlock limitless funding potential with Fundable\'s scalable and adaptable platform, empowering you to drive innovation and growth without boundaries.',
    image: noLimits,
    color: 'nolimits'
}]

function Utilities() {
  return (
    <main className="text-white p-4 md:p-8 lg:p-12 relative -mt-0 md:-mt-4 lg:-mt-8">
        <div className='max-w-7xl mx-auto'>
        
        <div className='w-full flex flex-row md:justify-between justify-center items-center gap-8'>
            <p className="font-syne font-bold text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-center lg:text-left">
                Send payments in <br/>crypto currencies
            </p>
            <p className='font-normal text-[1rem] text-center lg:text-right text-utility-description max-w-[600px] md:block hidden'>
                Unlock the full potential of decentralized funding with Fundable\'s <br className='hidden lg:block'/>
                efficient, transparent, and community-driven solutions.
            </p>
        </div>

        <div className='w-full flex flex-col lg:flex-row justify-between items-center gap-12 mt-12'>
            <div className='w-full lg:w-auto'>
                <Image 
                    src={section3} 
                    alt='utilities' 
                    width={1000} 
                    height={1000} 
                    quality={90} 
                    className='w-full lg:w-[31.5rem] h-auto lg:h-[28.5rem] object-contain' 
                />
            </div>

            <p className='font-normal text-sm md:text-[1rem] text-center md:text-right text-utility-description max-w-[600px] block md:hidden'>
                Unlock the full potential of decentralized funding with Fundable\'s <br className='hidden lg:block'/>
                efficient, transparent, and community-driven solutions.
            </p>

            <div className='flex flex-col gap-y-6 w-full lg:w-auto'>
                {utilities.map((utility, index) => (
                    <UtilityDiv 
                        key={index} 
                        title={utility.title} 
                        description={utility.description} 
                        image={utility.image} 
                        color={utility.color as "efficient" | "secure" | "nolimits"} 
                    />
                ))}
            </div>
        </div>
      
        </div>
    </main>
  )
}

export default Utilities
