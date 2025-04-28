import React, { useState, useEffect } from 'react';
import Frog from './Frog';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-froggy-tan shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 flex items-center">
              <Frog 
                size="sm" 
                usePng={true}
                imageUrl="/images/frogs/frog-normal.png"
                animated={false}
                className="scale-110"
              />
            </div>
            <span className="font-bold text-2xl text-froggy-dark-green">$FROGGY</span>
          </div>
          
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="font-medium text-froggy-dark-green hover:text-froggy-green transition-colors">About</a>
            <a href="#how-to-buy" className="font-medium text-froggy-dark-green hover:text-froggy-green transition-colors">How to Buy</a>
            <a href="#leap" className="font-medium text-froggy-dark-green hover:text-froggy-green transition-colors">Leap</a>
          </div>
          
          <a 
            href="#buy-now" 
            className="bg-froggy-green hover:bg-froggy-dark-green text-white font-bold py-2 px-4 rounded-full transition-all transform hover:scale-105"
          >
            Buy Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
