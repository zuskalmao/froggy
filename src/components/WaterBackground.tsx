import React from 'react';
import FloatingBubbles from './FloatingBubbles';

interface WaterBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const WaterBackground: React.FC<WaterBackgroundProps> = ({ 
  children,
  className = ''
}) => {
  return (
    <div className={`relative water-ripple overflow-hidden ${className}`}>
      <FloatingBubbles />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default WaterBackground;
