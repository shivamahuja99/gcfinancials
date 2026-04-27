import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white/70 backdrop-blur-lg sticky top-0 w-full z-50 border-b border-slate-200/50 shadow-sm font-inter antialiased tracking-tight">
      <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-slate-900">
          InsurPremium
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link
            to="#"
            className="text-slate-600 font-medium hover:text-blue-600 transition-all duration-200 scale-95 active:scale-90"
          >
            Solutions
          </Link>
          <Link
            to="#"
            className="text-slate-600 font-medium hover:text-blue-600 transition-all duration-200 scale-95 active:scale-90"
          >
            Quotes
          </Link>
          <Link
            to="#"
            className="text-slate-600 font-medium hover:text-blue-600 transition-all duration-200 scale-95 active:scale-90"
          >
            Services
          </Link>
          <Link
            to="#"
            className="text-slate-600 font-medium hover:text-blue-600 transition-all duration-200 scale-95 active:scale-90"
          >
            FAQs
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button className="hidden lg:block text-slate-600 font-medium hover:text-blue-600 transition-all duration-200">
            Log In
          </button>
          <Link
            to="/quote"
            className="bg-primary-container text-on-primary-container font-label-md px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
