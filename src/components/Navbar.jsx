import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-on-surface">InsurPremium</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-on-surface hover:text-primary font-medium">Home</Link>
            <Link to="/plans" className="text-on-surface hover:text-primary font-medium">Plans</Link>
          </div>
          <Link to="/quote" className="btn-primary py-2 px-4">
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
