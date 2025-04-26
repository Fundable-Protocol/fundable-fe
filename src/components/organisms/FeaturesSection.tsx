import React from 'react';
import { FeatureCard } from '../molecules/FeatureCard';
import { Maximize2 } from 'lucide-react';

const card1 = "/card1.svg"; 
const card2 = "/card2.svg"; 


export const FeaturesSection: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-4">
    <FeatureCard 
      title="Airdrops" 
      description="Efficiently distribute funds with real-time complete transparency, security, and real-time tracking."
      buttonText="Create Campaign"
      icon={<Maximize2 size={20} className="text-purple-500" />}
      imageUrl={card1}
  
    />
    <FeatureCard 
      title="Payment Stream" 
      description="Streamline your payment workflows with automated features for recurring payments, refunds, chargebacks, and more, reducing operational overhead and boosting efficiency."
      buttonText="Create Stream"
      icon={<Maximize2 size={20} className="text-purple-500" />}
      imageUrl={card2}
      
    />
    <FeatureCard 
      title="Distribution" 
      description="Recognize participation/achievements to multiple contributors while simplifying reward efforts and ensuring accurate token distribution."
      buttonText="Create Distribution"
      icon={<Maximize2 size={20} className="text-purple-500" />}
      imageUrl={card1}

    />
  </div>
);