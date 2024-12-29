import React from 'react';
import TeamMemberCard from '../components/team/TeamMemberCard';

const team = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    bio: 'With over 15 years of experience in immigration consulting, Sarah leads our mission to transform lives through global opportunities.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Legal Director',
    bio: 'A certified immigration lawyer with expertise in international law and document authentication procedures.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    name: 'Emma Williams',
    role: 'Program Director',
    bio: 'Passionate about education and cultural exchange, Emma oversees our mentorship and training programs.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80'
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-black pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gold-500 mb-4">About Us</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            At Billionaires Academy, we believe in empowering individuals through expert guidance and support in their journey towards global opportunities.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="bg-gray-900/50 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-gold-500 mb-4">Our Mission</h2>
            <p className="text-gray-300">
              We strive to provide comprehensive support and guidance to individuals seeking global opportunities through education, legal documentation, and professional development.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gold-500 mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {team.map(member => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;