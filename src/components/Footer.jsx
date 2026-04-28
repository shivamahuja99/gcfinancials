import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-50 w-full mt-auto border-t border-slate-200 font-inter text-sm leading-relaxed text-slate-500">
      <div className="max-w-7xl mx-auto py-32 px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <span className="text-lg font-black text-slate-900 mb-4 block">GC Financials</span>
          <p className="max-w-xs mb-8">Premium insurance solutions designed for clarity and peace of mind.</p>
          <p>© 2026 GC Financials. Protected by industry-leading security.</p>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
          <ul className="space-y-3">
            <li>
              <Link to="#" className="hover:text-slate-900 transition-colors opacity-80 hover:opacity-100 text-blue-600 font-bold">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-slate-900 transition-colors opacity-80 hover:opacity-100">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-slate-900 transition-colors opacity-80 hover:opacity-100">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-slate-900 transition-colors opacity-80 hover:opacity-100">
                Regulatory Info
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-4">Contact</h4>
          <ul className="space-y-3">
            <li>Email: gcfinancials23@gmail.com</li>
            <li>Phone: 905-296-1039 & 416-884-3537</li>
            <li className="max-w-xs">Address: unit 201-218 Export Blvd, Mississauga, ON L5S 0A7</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-4">Follow Us</h4>
          <div className="space-x-4">
            <a href="https://www.instagram.com/gcfinancials23?igsh=NnU4cmU5Z2Rmdm45" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors opacity-80 hover:opacity-100">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
                <circle cx="12" cy="12" r="6" stroke="currentColor" stroke-width="2" />
                <path d="M16 12a4 4 0 11-8 0 4 4 0 018 0z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
