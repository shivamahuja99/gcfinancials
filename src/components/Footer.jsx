import { Link } from 'react-router-dom';
import privacyPolicy from '../assets/privacy_policy_gc_financials.pdf';
import instagramIcon from '../assets/instagram.png';
import IA from '../assets/IA.png';
import Equitable from '../assets/equitable.png';
import sunlife from '../assets/sunlife.png';
import manulife from '../assets/Manulife.png';
import canada_life from '../assets/Canada_life.png';
import twentyOneCentury from '../assets/21_century.png';
import travelance from '../assets/travelance.svg';


const Footer = () => {
  return (
    <footer className="bg-slate-50 w-full mt-auto border-t border-slate-200 font-inter text-sm leading-relaxed text-slate-500">
      <div className="max-w-7xl mx-auto py-32 px-8 grid grid-cols-1 md:grid-cols-5 gap-12">
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
          <h4 className="font-bold text-slate-900 mb-6 underline underline-offset-8 decoration-slate-200">Contact Us</h4>
          <div className="space-y-6">
            <div className="flex gap-3 items-start group text-xs">
              <span className="material-symbols-outlined text-slate-400 text-lg group-hover:text-slate-900 transition-colors">mail</span>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Email</span>
                <a href="mailto:gcfinancials23@gmail.com" className="hover:text-slate-900 transition-colors">gcfinancials23@gmail.com</a>
              </div>
            </div>

            <div className="flex gap-3 items-start group text-xs">
              <span className="material-symbols-outlined text-slate-400 text-lg group-hover:text-slate-900 transition-colors">call</span>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Phone</span>
                <div className="flex flex-col gap-1">
                  <a href="tel:9052961039" className="hover:text-slate-900 transition-colors font-medium">905-296-1039</a>
                  <a href="tel:4168843537" className="hover:text-slate-900 transition-colors font-medium">416-884-3537</a>
                </div>
              </div>
            </div>

            <div className="flex gap-3 items-start group text-xs">
              <span className="material-symbols-outlined text-slate-400 text-lg group-hover:text-slate-900 transition-colors">location_on</span>
              <div className="flex flex-col gap-5">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">Mississauga Office</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=unit+201-218+Export+Blvd,+Mississauga,+ON+L5S+0A7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-900 transition-colors leading-relaxed block"
                  >
                    unit 201-218 Export Blvd<br />Mississauga, ON L5S 0A7
                  </a>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">Burlington Office</span>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-900 transition-colors leading-relaxed block"
                  >
                    1122 international Blvd, suite 700, <br />Burlington L7L 6W6
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-4">Our Partners</h4>
          <div className="grid grid-cols-2 gap-4">
            {[
              { src: IA, alt: "IA" },
              { src: Equitable, alt: "equitable" },
              { src: sunlife, alt: "sunlife" },
              { src: manulife, alt: "manulife" },
              { src: canada_life, alt: "canada_life" },
              { src: twentyOneCentury, alt: "twentyOneCentury" },
              { src: travelance, alt: "travelance" },
            ].map((logo, index) => (
              <div key={index} className="h-8 w-full flex items-center justify-start">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
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
