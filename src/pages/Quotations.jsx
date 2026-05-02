import { Link, useNavigate } from 'react-router-dom';
import { get_a_free_quote } from '../utils/constants';

const Quotation = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-surface text-on-surface font-body-md antialiased">
            <main>
                {/* Hero Section */}
                <section className="max-w-container-max mx-auto px-gutter pt-20 pb-section-gap">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Image Side */}
                        <div className="order-2 lg:order-1 relative rounded-[2rem] overflow-hidden shadow-ambient aspect-[4/5] lg:aspect-auto h-full min-h-[600px]">
                            <img
                                alt="Family playing together in a bright sunlit living room"
                                className="absolute inset-0 w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxMjKRjejn6k3MNCcR9BeAqCFVJFdWKZfxAOJX9cVt-8O_vMfHusF5JrzeoHzrQt39brUtLs8EVzA0S2xnh87Eh4f17sm6fLsNTHHTQ7jj_TH5LJBod1IBlxO8b4O3W9lu1LNajXzO3DtOLElGBi-sXAcWfaa7FGXr4pKqVtgK-4ZKCBJ97k-CKvAW1-zAv4K50LczMpbY4kMHMLWIrw72cGG9lbSXPI28oxrVfXRFvi4B3SX3eieSUAXquq7Gk-hSSTnobjRtbFI"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8 text-white">
                                <p className="font-headline-md text-headline-md mb-2">Protecting what matters most.</p>
                                <p className="font-body-md text-body-md text-white/80">Comprehensive coverage tailored for your family's unique journey.</p>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="order-1 lg:order-2 flex flex-col justify-center">
                            <h1 className="font-display-xl text-display-xl text-on-surface mb-6">Secure Your Tomorrow, Today.</h1>
                            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">Get a personalized insurance quote in minutes. Transparent pricing, premium coverage.</p>

                            <div className="bg-surface-container-lowest rounded-2xl p-[32px] shadow-ambient border border-outline-variant/30">
                                <h2 className="font-headline-md text-headline-md text-on-surface mb-8">{get_a_free_quote}</h2>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="font-label-md text-label-md text-on-surface-variant block">First Name</label>
                                            <input
                                                className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors font-body-md text-body-md"
                                                placeholder="Jane"
                                                type="text"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="font-label-md text-label-md text-on-surface-variant block">Last Name</label>
                                            <input
                                                className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors font-body-md text-body-md"
                                                placeholder="Doe"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="font-label-md text-label-md text-on-surface-variant block">Email Address</label>
                                        <input
                                            className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors font-body-md text-body-md"
                                            placeholder="jane.doe@example.com"
                                            type="email"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="font-label-md text-label-md text-on-surface-variant block">Insurance Type</label>
                                        <div className="relative">
                                            <select className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors font-body-md text-body-md appearance-none">
                                                <option>Super Visa Insurance</option>
                                                <option>Visitor Insurance</option>
                                                <option>Medical Insurance</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                                <span className="material-symbols-outlined text-outline">expand_more</span>
                                            </div>
                                        </div>
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
                    </div>
                </section>

                {/* <section className="border-y border-outline-variant/30 bg-surface-container-low py-12">
                    <div className="max-w-7xl mx-auto px-gutter flex flex-wrap justify-center gap-12 lg:gap-24 opacity-60 grayscale">
                        <div className="font-headline-md text-headline-md text-on-surface-variant tracking-widest font-bold">MetLife</div>
                        <div className="font-headline-md text-headline-md text-on-surface-variant tracking-widest font-bold">Allianz</div>
                        <div className="font-headline-md text-headline-md text-on-surface-variant tracking-widest font-bold">Prudential</div>
                        <div className="font-headline-md text-headline-md text-on-surface-variant tracking-widest font-bold">AIG</div>
                        <div className="font-headline-md text-headline-md text-on-surface-variant tracking-widest font-bold">AXA</div>
                    </div>
                </section> */}

                {/* Services Section */}
                <section className="max-w-container-max mx-auto px-gutter py-section-gap">
                    <div className="text-center mb-16">
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Premium Coverage Options</h2>
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Designed to fit seamlessly into your life, offering peace of mind when you need it most.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1 */}
                        <div className="bg-surface-container-lowest rounded-2xl p-[32px] shadow-ambient border border-outline-variant/20 hover:scale-[1.02] transition-transform duration-300 group">
                            <div className="w-12 h-12 bg-primary-container/10 rounded-full flex items-center justify-center mb-6 text-primary-container">
                                <span className="material-symbols-outlined fill-1">flight_takeoff</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Super Visa Insurance</h3>
                            <p className="font-body-md text-body-md text-on-surface-variant mb-6">Comprehensive health coverage for parents and grandparents visiting Canada, meeting all government requirements.</p>
                            <Link className="inline-flex items-center text-primary-container font-label-md text-label-md hover:underline" to="/plans">
                                Explore Coverage
                                <span className="material-symbols-outlined ml-1 text-sm">chevron_right</span>
                            </Link>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-surface-container-lowest rounded-2xl p-[32px] shadow-ambient border border-outline-variant/20 hover:scale-[1.02] transition-transform duration-300 group">
                            <div className="w-12 h-12 bg-primary-container/10 rounded-full flex items-center justify-center mb-6 text-primary-container">
                                <span className="material-symbols-outlined fill-1">medical_services</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Medical Insurance</h3>
                            <p className="font-body-md text-body-md text-on-surface-variant mb-6">Extensive health and dental plans to bridge the gap in provincial coverage and protect your overall wellbeing.</p>
                            <Link className="inline-flex items-center text-primary-container font-label-md text-label-md hover:underline" to="/services">
                                View Plans
                                <span className="material-symbols-outlined ml-1 text-sm">chevron_right</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* How it Works Timeline */}
                <section className="bg-surface-container-low py-section-gap">
                    <div className="max-w-container-max mx-auto px-gutter">
                        <div className="text-center mb-16">
                            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Simple, Transparent Process</h2>
                            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">We've streamlined insurance to make it as easy as 1-2-3.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-outline-variant/30 -translate-y-1/2 z-0"></div>

                            {/* Step 1 */}
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-surface-container-lowest border-4 border-surface-container-low flex items-center justify-center shadow-ambient mb-6 text-primary-container font-headline-md text-headline-md">1</div>
                                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Request a Quote</h3>
                                <p className="font-body-md text-body-md text-on-surface-variant">Fill out our quick form with your basic details.</p>
                            </div>
                            {/* Step 2 */}
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-surface-container-lowest border-4 border-surface-container-low flex items-center justify-center shadow-ambient mb-6 text-primary-container font-headline-md text-headline-md">2</div>
                                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Compare Options</h3>
                                <p className="font-body-md text-body-md text-on-surface-variant">Review personalized plans from top-tier providers.</p>
                            </div>
                            {/* Step 3 */}
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-primary-container border-4 border-surface-container-low flex items-center justify-center shadow-ambient mb-6 text-on-primary-container font-headline-md text-headline-md">3</div>
                                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Get Covered</h3>
                                <p className="font-body-md text-body-md text-on-surface-variant">Sign securely online and receive your policy instantly.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Quotation;