import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="glass-nav py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-primary p-2 rounded-xl group-hover:scale-110 transition-transform">
              <Shield className="h-7 w-7 text-white" />
            </div>
            <span className="text-2xl font-black text-[#1d1d1f] tracking-tight">InsurPremium</span>
          </Link>
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-[#1d1d1f] hover:text-primary font-semibold text-lg transition-colors">Home</Link>
            <Link to="/plans" className="text-[#1d1d1f] hover:text-primary font-semibold text-lg transition-colors">Plans</Link>
            <Link to="/quote" className="btn-primary py-3 px-6 rounded-xl">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
