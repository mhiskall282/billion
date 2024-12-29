import React from 'react';
import ProgramCard from '../components/programs/ProgramCard';

const programs = [
  {
    id: '1',
    title: 'Visa Consultation',
    description: 'Expert guidance on visa applications and immigration processes for various countries.',
    duration: '2-4 weeks',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    title: 'Document Authentication',
    description: 'Professional assistance with document verification and legalization procedures.',
    duration: '1-2 weeks',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    title: 'Business Immigration',
    description: 'Comprehensive support for entrepreneurs and investors seeking global opportunities.',
    duration: '4-8 weeks',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80'
  }
];

const Programs = () => {
  return (
    <div className="min-h-screen bg-black pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-8 sm:py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gold-500 mb-4">Our Programs</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover our comprehensive range of services designed to help you achieve your global aspirations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {programs.map(program => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Programs;