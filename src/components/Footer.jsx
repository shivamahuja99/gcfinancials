import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-50 w-full mt-auto border-t border-slate-200 font-inter text-sm leading-relaxed text-slate-500">
      <div className="max-w-7xl mx-auto py-32 px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <span className="text-lg font-black text-slate-900 mb-4 block">InsurPremium</span>
          <p className="max-w-xs mb-8">Premium insurance solutions designed for clarity and peace of mind.</p>
          <p>© 2024 InsurPremium. Protected by industry-leading security.</p>
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
            <li>Support: 1-800-INSUR-PREM</li>
            <li>Email: care@insurpremium.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
