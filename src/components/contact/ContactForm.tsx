import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-gold-500 mb-2 font-medium">Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:border-gold-500 transition-colors"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-gold-500 mb-2 font-medium">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:border-gold-500 transition-colors"
          required
        />
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-gold-500 mb-2 font-medium">Subject</label>
        <input
          type="text"
          id="subject"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:border-gold-500 transition-colors"
          required
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-gold-500 mb-2 font-medium">Message</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={6}
          className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:border-gold-500 transition-colors resize-none"
          required
        ></textarea>
      </div>
      
      <button
        type="submit"
        className="w-full bg-gold-500 text-black px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-gold-400 transition-colors"
      >
        Send Message <Send size={20} className="ml-2" />
      </button>
    </form>
  );
};

export default ContactForm;