import React, { useState } from 'react';
import { Bug as FrogIcon, ArrowRight, Leaf, CircleDollarSign } from 'lucide-react';
import Navbar from './components/Navbar';
import Button from './components/Button';
import Frog from './components/Frog';
import LilyPad from './components/LilyPad';
import WaterBackground from './components/WaterBackground';

function App() {
  const [showLeapAnimation, setShowLeapAnimation] = useState(false);
  const [isAlternateFrog, setIsAlternateFrog] = useState(false);
  
  const handleLeapClick = () => {
    setShowLeapAnimation(true);
    setIsAlternateFrog(true);
    
    // Reset states after animation completes
    setTimeout(() => {
      setShowLeapAnimation(false);
      setTimeout(() => setIsAlternateFrog(false), 300); // Small delay before changing image back
    }, 2000);
  };
  
  return (
    <div className="min-h-screen font-sans bg-froggy-tan">
      <Navbar />
      
      {/* Hero Section */}
      <WaterBackground className="min-h-screen bg-froggy-blue flex flex-col justify-center items-center text-center pt-20 pb-16 px-4">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute -top-16 -left-16 md:top-0 md:-left-20 opacity-70">
            <LilyPad size="sm" />
          </div>
          <div className="absolute -bottom-16 -right-16 md:-bottom-20 md:-right-20 opacity-70">
            <LilyPad size="sm" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-froggy-dark-green">
            If You&apos;re
            <span className="text-gradient"> Feeling Froggy</span>,<br />
            Then <span className="relative inline-block">
              LEAP!
              <svg className="absolute -top-4 -right-4 w-8 h-8 text-froggy-green animate-bounce-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </span>
          </h1>
          
          <div className="mt-8 mb-16">
            <Frog 
              size="lg" 
              animation="hop"
              usePng={true}
              isAlternateActive={isAlternateFrog}
            />
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-froggy-dark-green max-w-2xl mx-auto">
            $FROGGY is the most ribbiting memecoin on Solana. 
            Join our pond and experience the most amphibious gains in crypto!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button onClick={() => window.location.href = '#buy-now'}>
              Buy $FROGGY
            </Button>
            <Button secondary onClick={handleLeapClick}>
              Feel Froggy?
            </Button>
          </div>
        </div>
      </WaterBackground>
      
      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-froggy-tan">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-froggy-dark-green">About $FROGGY</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
              <div className="mb-4 text-froggy-green">
                <FrogIcon size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-froggy-dark-green">Froggy Philosophy</h3>
              <p className="text-gray-700">
                Born from a simple truth: when opportunity knocks, you leap! Our community embraces the spontaneous, fun side of crypto.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
              <div className="mb-4 text-froggy-green">
                <Leaf size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-froggy-dark-green">Lily Pad Ecosystem</h3>
              <p className="text-gray-700">
                Our community is a thriving pond of enthusiasts, developers, and meme-lovers building on Solana&apos;s high-performance network.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
              <div className="mb-4 text-froggy-green">
                <CircleDollarSign size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-froggy-dark-green">Meme Mastery</h3>
              <p className="text-gray-700">
                We&apos;re not just a token, we&apos;re a movement! $FROGGY celebrates the fun, absurd, and completely ribbiting world of memecoins.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How to Buy Section */}
      <WaterBackground id="how-to-buy" className="py-20 px-4 bg-froggy-blue relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">How to Get $FROGGY</h2>
          
          <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-xl">
            <div className="flex flex-col space-y-8">
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="bg-froggy-green rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-xl shrink-0 mr-4">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-froggy-dark-green">Create a Solana Wallet</h3>
                  <p className="text-gray-700">Download Phantom, Solflare, or another Solana wallet and set it up.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="bg-froggy-green rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-xl shrink-0 mr-4">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-froggy-dark-green">Get Some SOL</h3>
                  <p className="text-gray-700">Buy SOL from an exchange and transfer it to your wallet.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="bg-froggy-green rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-xl shrink-0 mr-4">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-froggy-dark-green">Hop to a DEX</h3>
                  <p className="text-gray-700">Connect your wallet to a Solana DEX like Jupiter or Raydium.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="bg-froggy-green rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-xl shrink-0 mr-4">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-froggy-dark-green">Swap SOL for $FROGGY</h3>
                  <p className="text-gray-700">Search for $FROGGY token and make the swap. Ribbit! You&apos;re now part of the pond!</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <Button id="buy-now">
                <span className="flex items-center">
                  Buy $FROGGY Now <ArrowRight className="ml-2" size={18} />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </WaterBackground>
      
      {/* Leap Section */}
      <section id="leap" className="py-20 px-4 bg-froggy-tan">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-froggy-dark-green">Ready to Leap?</h2>
          
          <div className="relative h-80 md:h-96">
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0">
              <LilyPad size="lg">
                <div className={`transition-all duration-500 transform ${showLeapAnimation ? 'translate-y-[-200px]' : ''}`}>
                  <Frog 
                    size="md" 
                    animated={!showLeapAnimation}
                    usePng={true}
                    isAlternateActive={isAlternateFrog}
                  />
                </div>
              </LilyPad>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-froggy-dark-green max-w-2xl mx-auto mt-12">
            Don&apos;t just sit on your lily pad – when you&apos;re feeling froggy, LEAP into action!
          </p>
          
          <Button onClick={handleLeapClick} className="mt-8 px-10 py-4 text-xl">
            LEAP NOW!
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-froggy-dark-green text-white py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center items-center mb-6">
            <FrogIcon className="text-froggy-green h-12 w-12 mr-2" />
            <span className="font-bold text-3xl">$FROGGY</span>
          </div>
          
          <p className="mb-6 text-froggy-blue">
            $FROGGY is a memecoin on Solana. Have fun, be silly, and always LEAP when you&apos;re feeling froggy!
          </p>
          
          <p className="text-sm text-froggy-blue opacity-75">
            Disclaimer: This is a meme token for entertainment purposes. Always do your own research before investing.
          </p>
        </div>
      </footer>
      
      {/* Floating Frog on Screen Corner */}
      <div className="fixed bottom-4 right-4 z-40 cursor-pointer" onClick={handleLeapClick}>
        <Frog size="sm" animation="float" usePng={true} isAlternateActive={isAlternateFrog} />
      </div>
    </div>
  );
}

export default App;
