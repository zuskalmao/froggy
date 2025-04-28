import React from 'react';

interface BubbleProps {
  size: number;
  left: string;
  animationDelay: string;
}

const Bubble: React.FC<BubbleProps> = ({ size, left, animationDelay }) => {
  return (
    <div 
      className="absolute bottom-0 bg-white bg-opacity-30 rounded-full"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left,
        animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
        animationDelay,
      }}
    />
  );
};

const FloatingBubbles: React.FC = () => {
  // Generate random bubbles
  const bubbles = Array(15).fill(0).map((_, i) => ({
    id: i,
    size: 5 + Math.random() * 20,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
  }));
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map(bubble => (
        <Bubble 
          key={bubble.id}
          size={bubble.size}
          left={bubble.left}
          animationDelay={bubble.animationDelay}
        />
      ))}
    </div>
  );
};

export default FloatingBubbles;
