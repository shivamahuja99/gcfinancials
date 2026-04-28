import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/70 backdrop-blur-xl sticky top-0 w-full z-50 border-b border-surface-variant shadow-sm px-8 py-4 font-inter antialiased tracking-tight">
      <div className="max-w-container-max mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-headline-md text-on-surface">
          InsurPremium
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="#"
            className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200"
          >
            Solutions
          </Link>
          <Link
            to="/plans"
            className={`font-body-md transition-colors duration-200 ${
              isActive('/plans')
                ? 'text-primary font-medium border-b-2 border-primary pb-1'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Quotes
          </Link>
          <Link
            to="/services"
            className={`font-body-md transition-colors duration-200 ${
              isActive('/services')
                ? 'text-primary font-medium border-b-2 border-primary pb-1'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Services
          </Link>
          <Link
            to="/services"
            className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200"
          >
            FAQ
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-on-surface-variant font-label-md hover:text-primary transition-colors duration-200">
            Log In
          </button>
          <Link
            to="/quote"
            className="bg-primary-container text-on-primary-container px-4 py-2 rounded-[16px] font-label-md active:scale-95 transition-transform hover:bg-primary-container/90"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
