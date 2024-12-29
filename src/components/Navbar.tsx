import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/95 backdrop-blur-sm shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/325202963_1333459694160387_1817492105733312897_n.jpg" 
                alt="Billionaires Academy Logo" 
                className="h-10 w-10 rounded-full"
              />
              <span className="text-gold-500 font-bold text-lg md:text-xl hidden sm:block">
                Billionaires Academy
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/programs">Programs</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/donate">Donate</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/resources">Resources</NavLink>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gold-500 hover:text-gold-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-black/95 backdrop-blur-sm">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <MobileNavLink to="/programs" onClick={() => setIsOpen(false)}>Programs</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About Us</MobileNavLink>
            <MobileNavLink to="/blog" onClick={() => setIsOpen(false)}>Blog</MobileNavLink>
            <MobileNavLink to="/donate" onClick={() => setIsOpen(false)}>Donate</MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
            <MobileNavLink to="/resources" onClick={() => setIsOpen(false)}>Resources</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-gold-500 hover:text-gold-400 transition-colors font-medium"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ 
  to, 
  children, 
  onClick 
}: { 
  to: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className="block px-3 py-2 text-gold-500 hover:text-gold-400 transition-colors font-medium"
  >
    {children}
  </Link>
);

export default Navbar;