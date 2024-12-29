import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { Program } from '../../types';
import { Link } from 'react-router-dom';

const ProgramCard: React.FC<{ program: Program }> = ({ program }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl transition-all hover:-translate-y-1 hover:shadow-gold-500/10">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={program.image} 
          alt={program.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      
      <div className="p-4 sm:p-6">
        <h3 className="text-xl font-bold text-gold-500 mb-2">{program.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{program.description}</p>
        
        <div className="flex items-center text-gray-400 mb-4">
          <Clock size={16} className="mr-2 flex-shrink-0" />
          <span className="text-sm">{program.duration}</span>
        </div>
        
        <Link 
          to={`/programs/${program.id}`}
          className="inline-flex items-center text-gold-500 hover:text-gold-400 transition-colors group"
        >
          Learn More 
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;