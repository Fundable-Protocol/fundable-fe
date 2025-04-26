'use client';

import React from 'react';
import { Card } from '../atoms/Card';

import CryptoChart from '../molecules/LineChart';
import Image from 'next/image';

export const ChartSection: React.FC = () => (
  <Card className="mt-4">
    
    <CryptoChart />
    <div className='absolute z-20 bottom-0 right-0'>
        <Image src={"/abstract2.svg"} alt='abstract-image' fill className='!relative'/>
    </div>
  </Card>
);