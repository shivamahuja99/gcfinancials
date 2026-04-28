import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/gc_financials_logo.png';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="glass-panel sticky top-0 w-full z-50 border-b border-outline-variant/30 shadow-sm font-inter antialiased tracking-tight">
      <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="GC Financials" className="h-24 w-auto object-contain" />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`font-body-md transition-colors duration-200 ${isActive('/')
              ? 'text-primary font-medium border-b-2 border-primary pb-1'
              : 'text-on-surface-variant hover:text-primary'
              }`}
          >
            Solutions
          </Link>
          <Link
            to="/plans"
            className={`font-body-md transition-colors duration-200 ${isActive('/plans')
              ? 'text-primary font-medium border-b-2 border-primary pb-1'
              : 'text-on-surface-variant hover:text-primary'
              }`}
          >
            Quotes
          </Link>
          <Link
            to="/services"
            className={`font-body-md transition-colors duration-200 ${isActive('/services')
              ? 'text-primary font-medium border-b-2 border-primary pb-1'
              : 'text-on-surface-variant hover:text-primary'
              }`}
          >
            Services
          </Link>
          <Link
            to="/services#faq"
            className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200"
          >
            FAQ
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            to="/quote"
            className="bg-primary-container text-on-primary-container font-label-md text-label-md px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity active:scale-95 duration-200 shadow-sm"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
