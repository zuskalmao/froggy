import React from 'react';

interface LilyPadProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}

const LilyPad: React.FC<LilyPadProps> = ({ 
  className = '',
  size = 'md',
  children
}) => {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48', 
    lg: 'w-64 h-64'
  };
  
  return (
    <div className={`relative ${className}`}>
      <div className={`${sizeClasses[size]} relative lily-pad`}>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="#7ED957" />
          <circle cx="50" cy="50" r="35" fill="#8FE769" />
          <circle cx="50" cy="50" r="25" fill="#A7F27C" />
          <path d="M50 5 L50 95" stroke="#6BC44C" strokeWidth="1" />
          <path d="M5 50 L95 50" stroke="#6BC44C" strokeWidth="1" />
          <path d="M20 20 L80 80" stroke="#6BC44C" strokeWidth="1" />
          <path d="M20 80 L80 20" stroke="#6BC44C" strokeWidth="1" />
        </svg>
      </div>
      {children && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {children}
        </div>
      )}
    </div>
  );
};

export default LilyPad;
