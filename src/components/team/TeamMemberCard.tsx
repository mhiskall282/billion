import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { TeamMember } from '../../types';

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden transition-transform hover:-translate-y-1">
      <div className="aspect-[4/3] relative overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gold-500 mb-1">{member.name}</h3>
        <p className="text-gray-400 text-sm mb-4">{member.role}</p>
        <p className="text-gray-300 text-sm mb-6">{member.bio}</p>
        
        <div className="flex space-x-4">
          <button className="text-gold-500 hover:text-gold-400 transition-colors p-2 -m-2">
            <Linkedin size={20} />
          </button>
          <button className="text-gold-500 hover:text-gold-400 transition-colors p-2 -m-2">
            <Mail size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;