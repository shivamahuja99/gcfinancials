import { useNavigate } from 'react-router-dom';
import { get_a_free_quote } from '../utils/constants';
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface font-body-md antialiased min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-gutter py-section-gap grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 pr-0 lg:pr-12">
            <h1 className="font-display-xl text-display-xl text-on-surface">
              Protection for the ones who matter most.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Experience peace of mind with premium insurance plans designed for clarity, comprehensive coverage, and instant enrollment.
            </p>
            <div className="bg-surface-container-lowest p-[32px] rounded-[20px] ambient-shadow max-w-md">
              <form className="space-y-4">
                <div>
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Coverage Type</label>
                  <select className="w-full border border-outline-variant rounded-lg p-3 text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors bg-surface-container-lowest">
                    <option>Super Visa Insurance</option>
                    <option>Visitor Insurance</option>
                    <option>Medical Insurance</option>
                  </select>
                </div>
                <button
                  onClick={() => navigate('/quote')}
                  className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-4 rounded-[16px] hover:opacity-90 transition-opacity mt-4 active:scale-[0.98] transition-transform"
                  type="button"
                >
                  {get_a_free_quote}
                </button>
              </form>
            </div>
          </div>
          <div className="relative h-[600px] w-full rounded-[24px] overflow-hidden ambient-shadow">
            <img
              alt="Smiling family enjoying a sunny afternoon outdoors, representing security and happiness"
              className="absolute inset-0 w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqJbIiDpid_hPaPucZSZCGfCx6O_BUtd5TUfyXNUdz7W0iEGiq1iM6oUDev1kRQgLAW8PsZfkCzd28D25DXcEts2_lrdwYj0O0hfYfayCTsd1wNDfSqCGasUo-EDWGYU4iIbfQqlpBJUk0BlDo0alcV-GcqQeRIojX-TA1_lh51kAhfCIz5ovGF0Tmrnci9dbfH-NIQ0RNQKGqMp4RRd6CSYJ9POtfs26L8pGioJMUhTfFob7sZDF_NftBnanPyRPlf0Fuo2obTI8"
            />
          </div>
        </section>

        {/* Trust Bar */}
        <section className="border-y border-outline-variant/30 bg-surface-container-low py-12">
          <div className="max-w-7xl mx-auto px-gutter flex flex-wrap justify-center gap-12 lg:gap-24 opacity-60 grayscale">
            <div className="font-headline-md text-headline-md text-on-surface-variant tracking-widest font-bold">MetLife</div>
            <div className="font-headline-md text-headline-md text-on-surface-variant tracking-widest font-bold">Allianz</div>
            <div className="font-headline-md text-headline-md text-on-surface-variant tracking-widest font-bold">Prudential</div>
            <div className="font-headline-md text-headline-md text-on-surface-variant tracking-widest font-bold">AIG</div>
            <div className="font-headline-md text-headline-md text-on-surface-variant tracking-widest font-bold">AXA</div>
          </div>
        </section>

        {/* Core Services */}
        <section className="max-w-7xl mx-auto px-gutter py-section-gap">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Tailored Coverage</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest p-[32px] rounded-[20px] ambient-shadow flex flex-col items-start transition-transform hover:-translate-y-1 duration-300 group">
              <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-tertiary">flight_takeoff</span>
              </div>
              <h3 className="font-headline-md text-[24px] mb-4">Super Visa</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">
                Comprehensive coverage meeting all government requirements for parents and grandparents visiting Canada.
              </p>
              <a className="font-label-md text-label-md text-primary-container flex items-center gap-1 hover:opacity-80 transition-opacity mt-auto" href="#">
                Learn more <span className="material-symbols-outlined text-sm">chevron_right</span>
              </a>
            </div>
            {/* Card 2 */}
            <div className="bg-surface-container-lowest p-[32px] rounded-[20px] ambient-shadow flex flex-col items-start transition-transform hover:-translate-y-1 duration-300 group">
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary">luggage</span>
              </div>
              <h3 className="font-headline-md text-[24px] mb-4">Visitor Insurance</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">
                Flexible plans ensuring you're protected against unexpected medical emergencies while traveling.
              </p>
              <a className="font-label-md text-label-md text-primary-container flex items-center gap-1 hover:opacity-80 transition-opacity mt-auto" href="#">
                Learn more <span className="material-symbols-outlined text-sm">chevron_right</span>
              </a>
            </div>
            {/* Card 3 */}
            <div className="bg-surface-container-lowest p-[32px] rounded-[20px] ambient-shadow flex flex-col items-start transition-transform hover:-translate-y-1 duration-300 group">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-on-secondary-container">local_hospital</span>
              </div>
              <h3 className="font-headline-md text-[24px] mb-4">Medical Insurance</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">
                Premium health coverage designed to bridge gaps and provide access to top-tier care facilities.
              </p>
              <a className="font-label-md text-label-md text-primary-container flex items-center gap-1 hover:opacity-80 transition-opacity mt-auto" href="#">
                Learn more <span className="material-symbols-outlined text-sm">chevron_right</span>
              </a>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-surface-container py-section-gap overflow-hidden">
          <div className="max-w-7xl mx-auto px-gutter">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Seamless Process</h2>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-outline-variant -z-10 -translate-y-1/2 opacity-30"></div>
              {/* Step 1 */}
              <div className="flex flex-col items-center bg-surface-container p-6 w-full md:w-1/3 z-10 hover:scale-105 transition-transform">
                <div className="w-16 h-16 rounded-full bg-surface-container-lowest ambient-shadow flex items-center justify-center mb-6 border border-outline-variant/20">
                  <span className="material-symbols-outlined text-primary-container text-2xl">search</span>
                </div>
                <h4 className="font-label-md text-label-md font-bold mb-2">Compare Plans</h4>
                <p className="font-body-md text-body-md text-on-surface-variant text-center">Easily review options tailored to your needs.</p>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center bg-surface-container p-6 w-full md:w-1/3 z-10 hover:scale-105 transition-transform">
                <div className="w-16 h-16 rounded-full bg-surface-container-lowest ambient-shadow flex items-center justify-center mb-6 border border-outline-variant/20">
                  <span className="material-symbols-outlined text-primary-container text-2xl">draw</span>
                </div>
                <h4 className="font-label-md text-label-md font-bold mb-2">Instant Enrollment</h4>
                <p className="font-body-md text-body-md text-on-surface-variant text-center">Complete your application securely online.</p>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center bg-surface-container p-6 w-full md:w-1/3 z-10 hover:scale-105 transition-transform">
                <div className="w-16 h-16 rounded-full bg-surface-container-lowest ambient-shadow flex items-center justify-center mb-6 border border-outline-variant/20">
                  <span className="material-symbols-outlined text-primary-container text-2xl">verified_user</span>
                </div>
                <h4 className="font-label-md text-label-md font-bold mb-2">Travel with Ease</h4>
                <p className="font-body-md text-body-md text-on-surface-variant text-center">Receive your policy documents instantly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Secondary CTA */}
        <section className="max-w-5xl mx-auto px-gutter py-section-gap">
          <div className="bg-primary-container rounded-[24px] p-16 text-center ambient-shadow relative overflow-hidden">
            {/* Abstract decorative shapes */}
            <div className="absolute top-[-50%] left-[-10%] w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-[-50%] right-[-10%] w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="relative z-10 space-y-8">
              <h2 className="font-headline-lg text-headline-lg text-on-primary font-bold">Ready to secure your future?</h2>
              <p className="font-body-lg text-body-lg text-on-primary/80 max-w-2xl mx-auto">
                Get comprehensive coverage in minutes. Our premium support team is ready to assist you.
              </p>
              <button
                onClick={() => navigate('/quote')}
                className="bg-surface-container-lowest text-primary-container font-label-md text-label-md px-8 py-4 rounded-[16px] hover:bg-surface-container-low transition-colors shadow-sm active:scale-95 transition-transform"
              >
                Start a Free Quote
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
