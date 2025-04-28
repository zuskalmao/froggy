import React from 'react';

interface FrogProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  animation?: 'hop' | 'float' | 'wiggle';
  usePng?: boolean;
  imageUrl?: string;
  alternateImageUrl?: string;
  isAlternateActive?: boolean;
}

const Frog: React.FC<FrogProps> = ({ 
  className = '',
  size = 'md',
  animated = true,
  animation = 'hop',
  usePng = false,
  imageUrl = '/images/frogs/frog-normal.png',
  alternateImageUrl = '/images/frogs/frog-jumping.png',
  isAlternateActive = false
}) => {
  const sizeClasses = {
    sm: 'w-20 h-20',
    md: 'w-32 h-32', 
    lg: 'w-48 h-48'
  };
  
  const animationClass = animated ? `animate-${animation}` : '';
  
  if (usePng) {
    return (
      <div className={`${sizeClasses[size]} ${animationClass} ${className}`}>
        <img 
          src={isAlternateActive ? alternateImageUrl : imageUrl} 
          alt="Froggy" 
          className="w-full h-full object-contain"
        />
      </div>
    );
  }
  
  return (
    <div className={`${sizeClasses[size]} ${animationClass} ${className}`}>
      <svg viewBox="0 0 300 330" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="150" cy="320" rx="140" ry="10" fill="#94C947" />
        <path d="M75,100 Q70,30 120,30 Q170,30 160,100 Q190,80 230,100 Q260,140 230,180 Q260,220 230,260 Q210,280 190,270 Q180,290 150,290 Q120,290 110,270 Q90,280 70,260 Q40,230 70,200 Q40,160 70,120 Q60,100 75,100 Z" fill="#76B041" stroke="#3E5322" stroke-width="5" />
        <circle cx="110" cy="80" r="10" fill="#3E5322" />
        <circle cx="190" cy="80" r="10" fill="#3E5322" />
        <path d="M120,120 Q150,140 180,120" fill="none" stroke="#3E5322" stroke-width="5" />
        <circle cx="130" cy="110" r="2" fill="#3E5322" />
        <circle cx="170" cy="110" r="2" fill="#3E5322" />
        <path d="M100,230 Q90,270 110,270" fill="none" stroke="#3E5322" stroke-width="5" />
        <path d="M200,230 Q210,270 190,270" fill="none" stroke="#3E5322" stroke-width="5" />
      </svg>
    </div>
  );
};

export default Frog;
