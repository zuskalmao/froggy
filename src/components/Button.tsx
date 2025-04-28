import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  primary?: boolean;
  secondary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '',
  primary = false,
  secondary = false,
}) => {
  const baseClasses = "px-6 py-3 rounded-full font-bold text-lg transition-all transform hover:scale-105 active:scale-95 focus:outline-none";
  
  let colorClasses = "bg-froggy-green text-white shadow-lg hover:bg-froggy-dark-green";
  
  if (secondary) {
    colorClasses = "bg-froggy-blue text-froggy-dark-green shadow-lg hover:bg-froggy-dark-blue hover:text-white";
  }
  
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${colorClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
