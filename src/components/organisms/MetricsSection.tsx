import React from 'react';
import { MetricCard } from '../molecules/MetricCard';
import {  Eye, User, Users } from 'lucide-react';

export const MetricsSection: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
    <MetricCard 
      title="Total Amount Sent" 
      value="50.8K" 
      trend="5.4%" 
      trendColor="green" 
      icon={<Eye size={16} />}
    />
    <MetricCard 
      title="Tx Number" 
      value="23.6K" 
      trend="2.5%" 
      trendColor="red" 
      icon={<User size={16} />}
    />
    <MetricCard 
      title="Address Funded" 
      value="756" 
      trend="0.8%" 
      trendColor="green" 
      icon={<Users size={16} />}
    />
  </div>
);