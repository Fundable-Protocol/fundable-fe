import React, { ReactNode } from 'react';
import { Card } from '../atoms/Card';
import { Badge } from '../atoms/Badge';
import { IconButton } from '../atoms/IconButton';
import { MoreHorizontal } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  trend?: string;
  trendColor?: 'green' | 'red';
  icon?: ReactNode;
}

export const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  trend, 
  trendColor = 'green', 
  icon 
}) => (
  <Card className="flex flex-col gap-2 space-y-4 p-6">
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2 text-sm text-gray-400">
        {icon}
        <span>{title}</span>
      </div>
      <IconButton icon={<MoreHorizontal size={20} />} />
    </div>
    <div className="flex items-center">
      <span className="text-3xl font-semibold mr-3">{value}</span>
      {trend && <Badge text={trend} color={trendColor} />}
     
    </div>
  </Card>
);