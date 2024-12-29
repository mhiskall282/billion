import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black"></div>
      </div>
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <div className="text-center space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gold-500 leading-tight">
            Transform Your Future with<br className="hidden sm:block" /> Billionaires Academy
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Your premier destination for visa consultations, legal documentation, and pathway to global opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 pt-4">
            <Link
              to="/programs"
              className="w-full sm:w-auto bg-gold-500 text-black px-8 py-3 rounded-full font-semibold inline-flex items-center justify-center hover:bg-gold-400 transition-colors group"
            >
              Join a Program
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            
            <Link
              to="/about"
              className="w-full sm:w-auto border-2 border-gold-500 text-gold-500 px-8 py-3 rounded-full font-semibold inline-flex items-center justify-center hover:bg-gold-500 hover:text-black transition-colors"
            >
              Become a Mentor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;