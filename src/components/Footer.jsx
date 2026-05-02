import { Link } from 'react-router-dom';
import privacyPolicy from '../assets/privacy_policy_gc_financials.pdf';
import instagramIcon from '../assets/instagram.png';

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
              <a
                href={privacyPolicy}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 transition-colors opacity-80 hover:opacity-100 text-blue-600 font-bold"
              >
                Privacy Policy
              </a>
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
            <li>
              Email: <a href="mailto:gcfinancials23@gmail.com" className="hover:text-slate-900 transition-colors">gcfinancials23@gmail.com</a>
            </li>
            <li>
              Phone: <a href="tel:9052961039" className="hover:text-slate-900 transition-colors">905-296-1039</a> & <a href="tel:4168843537" className="hover:text-slate-900 transition-colors">416-884-3537</a>
            </li>
            <li className="max-w-xs">
              Address: <a
                href="https://www.google.com/maps/search/?api=1&query=unit+201-218+Export+Blvd,+Mississauga,+ON+L5S+0A7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 transition-colors"
              >
                unit 201-218 Export Blvd, Mississauga, ON L5S 0A7
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-4">Follow Us</h4>
          <div className="space-x-4">
            <a href="https://www.instagram.com/gcfinancials23?igsh=NnU4cmU5Z2Rmdm45" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors opacity-80 hover:opacity-100 block w-fit">
              <img src={instagramIcon} alt="Instagram" className="w-6 h-6 object-contain" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
