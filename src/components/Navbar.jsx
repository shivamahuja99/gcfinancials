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

        <div className="hidden md:flex space-x-8">
          {[
            { name: 'Solutions', path: '/' },
            { name: 'Plans', path: '/plans' },
            { name: 'Services', path: '#' },
            { name: 'FAQs', path: '#' },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-label-md text-label-md transition-all duration-200 hover:text-primary ${isActive(link.path)
                ? 'text-primary'
                : 'text-on-surface-variant'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button className="hidden lg:block text-on-surface-variant font-label-md text-label-md hover:text-primary transition-all duration-200">
            Log In
          </button>
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
