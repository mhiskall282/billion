import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../../types';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg relative">
      <Quote className="absolute top-4 right-4 text-gold-500 opacity-20" size={40} />
      <p className="text-gray-300 mb-4 italic">{testimonial.quote}</p>
      <div className="flex items-center">
        <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="text-gold-500 font-semibold">{testimonial.name}</h4>
          <p className="text-gray-400 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}