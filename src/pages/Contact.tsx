import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gold-500 mb-4">Contact Us</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get in touch with us for any inquiries about our programs or services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 h-fit">
            <h2 className="text-2xl font-semibold text-gold-500 mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="text-gold-500 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-gold-500 font-semibold mb-2">Address</h3>
                  <p className="text-gray-300">123 Business Avenue<br />New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-gold-500 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-gold-500 font-semibold mb-2">Phone</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-gold-500 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-gold-500 font-semibold mb-2">Email</h3>
                  <p className="text-gray-300">info@billionairesacademy.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;