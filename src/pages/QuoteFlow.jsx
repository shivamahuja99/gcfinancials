import { useState, useEffect } from 'react';
import { useQuote } from '../contexts/QuoteContext';
import Input from '../components/Input';

const QuoteFlow = () => {
  const { quoteData, updateQuoteData, resetQuoteData } = useQuote();
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    resetQuoteData();
  }, []);

  const countries = [
    "Canada", "United States", "United Kingdom", "India", "China", "Australia", "Germany", "France", "Japan", "Brazil", "Mexico", "United Arab Emirates"
  ];

  const provinces = [
    "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador",
    "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan",
    "Northwest Territories", "Nunavut", "Yukon"
  ];

  const validateStep = (currentStep) => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!quoteData.age) newErrors.age = "Age is required.";
      else if (parseInt(quoteData.age) < 0 || parseInt(quoteData.age) > 120) newErrors.age = "Valid age (0-120) required.";

      if (!quoteData.gender) newErrors.gender = "Gender selection required.";
      if (!quoteData.phone) newErrors.phone = "Phone number required.";
      if (!quoteData.countryOrigin) newErrors.countryOrigin = "Country of origin required.";
      if (!quoteData.province) newErrors.province = "Province is required.";
    }

    if (currentStep === 2) {
      if (!quoteData.healthStatus) newErrors.healthStatus = "Health status rating required.";
      if (!quoteData.coverageAmount) newErrors.coverageAmount = "Coverage amount selection required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
      setErrors({});
    }
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
    setErrors({});
  };

  const steps = ['Identity', 'Coverage', 'Review'];

  const calculatePremium = () => {
    let base = 45;
    const age = parseInt(quoteData.age) || 30;

    // Simple age-based logic
    if (age > 40) base += (age - 40) * 1.5;
    if (age > 65) base += (age - 65) * 3;

    // Coverage Amount logic
    if (quoteData.coverageAmount === '100k') base += 20;
    if (quoteData.coverageAmount === '250k') base += 50;
    if (quoteData.coverageAmount === '500k') base += 90;
    if (quoteData.coverageAmount === '1M') base += 160;

    // Health Status logic
    if (quoteData.healthStatus === 'poor') base *= 1.8;
    if (quoteData.healthStatus === 'average') base *= 1.3;
    if (quoteData.healthStatus === 'excellent') base *= 0.9;

    return base.toFixed(2);
  };

  const premium = calculatePremium();

  const renderProgress = () => {
    return (
      <div className="w-full max-w-4xl mx-auto mb-12">
        <div className="flex justify-between items-end mb-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="bg-primary text-on-primary text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">Step {step} of {steps.length}</span>
              <span className="h-[1px] w-8 bg-outline-variant"></span>
              <span className="text-primary font-bold text-xs">{Math.round((step / steps.length) * 100)}% Complete</span>
            </div>
            <h1 className="font-headline-lg text-4xl text-on-surface tracking-tight">
              {step === 1 && "Personal Identity"}
              {step === 2 && "Health & Coverage"}
              {step === 3 && "Review Your Quote"}
            </h1>
            <p className="text-secondary font-body-md">
              {step === 1 && "Start with your basic details to build your profile."}
              {step === 2 && "Tell us about your health and desired coverage level."}
              {step === 3 && "Verify your information and secure your plan."}
            </p>
          </div>
        </div>
        <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden shadow-inner">
          <div
            className="bg-primary h-full rounded-full transition-all duration-1000 ease-in-out shadow-[0_0_10px_rgba(0,113,227,0.5)]"
            style={{ width: `${(step / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>
    );
  };

  const renderStep1 = () => (
    <div className="max-w-4xl mx-auto w-full">
      <div className="bg-surface-container-lowest rounded-3xl shadow-xl p-10 border border-outline-variant/30 backdrop-blur-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column: Personal Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <label className="block font-label-md text-on-surface font-bold uppercase tracking-widest text-xs ml-1">Age</label>
              <div className="relative">
                <input
                  type="number"
                  value={quoteData.age}
                  onChange={(e) => updateQuoteData({ age: e.target.value })}
                  placeholder="e.g. 35"
                  className={`w-full bg-white border rounded-2xl px-6 py-4 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm ${errors.age ? 'border-error' : 'border-outline-variant'}`}
                />
                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-secondary font-label-md">Years</span>
              </div>
              {errors.age && <p className="text-error text-xs ml-1 flex items-center gap-1"><span className="material-symbols-outlined text-xs">error</span>{errors.age}</p>}
            </div>

            <div className="space-y-4">
              <label className="block font-label-md text-on-surface font-bold uppercase tracking-widest text-xs ml-1">Gender</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'male', label: 'Male', icon: 'male' },
                  { id: 'female', label: 'Female', icon: 'female' },
                  { id: 'other', label: 'Other', icon: 'transgender' },
                ].map((option) => (
                  <label key={option.id} className="relative cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      className="peer sr-only"
                      checked={quoteData.gender === option.id}
                      onChange={() => updateQuoteData({ gender: option.id })}
                    />
                    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl border-2 border-outline-variant peer-checked:border-primary peer-checked:bg-primary-fixed/30 hover:border-primary/50 transition-all">
                      <span className="material-symbols-outlined text-2xl text-secondary mb-1 peer-checked:text-primary">{option.icon}</span>
                      <span className="text-xs font-bold text-on-surface">{option.label}</span>
                    </div>
                  </label>
                ))}
              </div>
              {errors.gender && <p className="text-error text-xs ml-1 flex items-center gap-1"><span className="material-symbols-outlined text-xs">error</span>{errors.gender}</p>}
            </div>

            <div className="space-y-4">
              <label className="block font-label-md text-on-surface font-bold uppercase tracking-widest text-xs ml-1">Phone Number</label>
              <div className="relative">
                <input
                  type="tel"
                  value={quoteData.phone}
                  onChange={(e) => updateQuoteData({ phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  className={`w-full bg-white border rounded-2xl px-6 py-4 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm ${errors.phone ? 'border-error' : 'border-outline-variant'}`}
                />
                <span className="absolute right-6 top-1/2 -translate-y-1/2 material-symbols-outlined text-secondary">phone</span>
              </div>
              {errors.phone && <p className="text-error text-xs ml-1 flex items-center gap-1"><span className="material-symbols-outlined text-xs">error</span>{errors.phone}</p>}
            </div>
          </div>

          {/* Right Column: Origin Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <label className="block font-label-md text-on-surface font-bold uppercase tracking-widest text-xs ml-1">Country of Origin</label>
              <div className="relative">
                <select
                  value={quoteData.countryOrigin}
                  onChange={(e) => updateQuoteData({ countryOrigin: e.target.value })}
                  className={`w-full bg-white border rounded-2xl px-6 py-4 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm appearance-none ${errors.countryOrigin ? 'border-error' : 'border-outline-variant'}`}
                >
                  <option value="">Select Country</option>
                  {countries.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <span className="absolute right-6 top-1/2 -translate-y-1/2 material-symbols-outlined text-secondary pointer-events-none">expand_more</span>
              </div>
              {errors.countryOrigin && <p className="text-error text-xs ml-1 flex items-center gap-1"><span className="material-symbols-outlined text-xs">error</span>{errors.countryOrigin}</p>}
            </div>

            <div className="space-y-4">
              <label className="block font-label-md text-on-surface font-bold uppercase tracking-widest text-xs ml-1">Province</label>
              <div className="relative">
                <select
                  value={quoteData.province}
                  onChange={(e) => updateQuoteData({ province: e.target.value })}
                  className={`w-full bg-white border rounded-2xl px-6 py-4 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm appearance-none ${errors.province ? 'border-error' : 'border-outline-variant'}`}
                >
                  <option value="">Select Province</option>
                  {provinces.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
                <span className="absolute right-6 top-1/2 -translate-y-1/2 material-symbols-outlined text-secondary pointer-events-none">expand_more</span>
              </div>
              {errors.province && <p className="text-error text-xs ml-1 flex items-center gap-1"><span className="material-symbols-outlined text-xs">error</span>{errors.province}</p>}
            </div>

            <div className="pt-6">
              <div className="bg-primary-fixed/20 p-6 rounded-2xl border border-primary/10">
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-primary text-3xl">shield_person</span>
                  <div>
                    <h4 className="font-bold text-sm text-on-surface">Privacy First</h4>
                    <p className="text-xs text-secondary mt-1 leading-relaxed">Your data is encrypted and used only for providing an accurate insurance quote. We never share your details.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-12">
        <button
          onClick={nextStep}
          className="bg-primary text-on-primary font-label-md text-label-md px-10 py-4 rounded-2xl hover:opacity-90 transition-all shadow-lg active:scale-95 flex items-center gap-3"
        >
          Continue to Coverage
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto w-full">
      <div className="flex-1 bg-surface-container-lowest rounded-3xl shadow-xl p-10 border border-outline-variant/30 backdrop-blur-md">
        <div className="space-y-12">
          {/* Health Status */}
          <section>
            <h2 className="font-headline-md text-2xl text-on-surface mb-8">General Health Status</h2>
            {errors.healthStatus && <p className="text-error font-label-md mb-4 flex items-center gap-2"><span className="material-symbols-outlined text-sm">error</span>{errors.healthStatus}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { id: 'excellent', label: 'Excellent', sub: 'Very active, no meds', icon: 'health_and_safety', color: 'text-green-600' },
                { id: 'good', label: 'Good', sub: 'Generally healthy', icon: 'favorite', color: 'text-blue-500' },
                { id: 'average', label: 'Average', icon: 'medical_services', color: 'text-yellow-600', sub: 'Managed conditions' },
                { id: 'poor', label: 'Poor', icon: 'warning', color: 'text-red-500', sub: 'Significant issues' },
              ].map((option) => (
                <label key={option.id} className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="healthStatus"
                    className="peer sr-only"
                    checked={quoteData.healthStatus === option.id}
                    onChange={() => updateQuoteData({ healthStatus: option.id })}
                  />
                  <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border-2 border-outline-variant peer-checked:border-primary peer-checked:bg-primary-fixed/30 hover:border-primary/50 transition-all">
                    <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center">
                      <span className={`material-symbols-outlined text-xl ${option.color}`}>{option.icon}</span>
                    </div>
                    <div>
                      <span className="font-bold text-sm block">{option.label}</span>
                      <span className="text-[10px] text-secondary">{option.sub}</span>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </section>

          {/* Medical Conditions */}
          <section>
            <h2 className="font-headline-md text-2xl text-on-surface mb-4">Medical Health Conditions</h2>
            <p className="text-secondary text-sm mb-6">Describe any pre-existing conditions or medical history.</p>
            <textarea
              value={quoteData.medicalConditions}
              onChange={(e) => updateQuoteData({ medicalConditions: e.target.value })}
              className="w-full rounded-2xl border border-outline-variant bg-white p-6 font-body-md text-on-surface focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-y shadow-inner h-32"
              placeholder="e.g. Hypertension, Diabetes, Recent surgeries..."
            ></textarea>
          </section>

          {/* Coverage Amount */}
          <section>
            <h2 className="font-headline-md text-2xl text-on-surface mb-8">Desired Coverage Amount</h2>
            {errors.coverageAmount && <p className="text-error font-label-md mb-4 flex items-center gap-2"><span className="material-symbols-outlined text-sm">error</span>{errors.coverageAmount}</p>}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {['50k', '100k', '250k', '500k', '1M'].map((amount) => (
                <button
                  key={amount}
                  onClick={() => updateQuoteData({ coverageAmount: amount })}
                  className={`py-4 rounded-2xl font-bold transition-all border-2 text-sm ${quoteData.coverageAmount === amount
                    ? 'border-primary bg-primary-fixed text-primary shadow-md'
                    : 'border-outline-variant text-on-surface hover:border-primary/50'
                    }`}
                >
                  ${amount.toUpperCase()}
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>

      <aside className="w-full lg:w-80 flex-shrink-0">
        <div className="bg-surface-container-lowest rounded-3xl shadow-xl p-8 sticky top-28 border border-outline-variant/30">
          <h2 className="font-headline-md text-xl mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">analytics</span>
            Live Estimate
          </h2>
          <div className="bg-primary-fixed/20 p-6 rounded-2xl text-center mb-8">
            <span className="text-secondary text-[10px] uppercase font-bold tracking-widest">Monthly Premium</span>
            <div className="text-4xl font-black text-primary">${premium}</div>
            <p className="text-[10px] text-secondary mt-2">Subject to underwriting</p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs pb-3 border-b border-outline-variant/30">
              <span className="text-secondary font-bold uppercase">Age</span>
              <span className="font-bold">{quoteData.age}</span>
            </div>
            <div className="flex justify-between items-center text-xs pb-3 border-b border-outline-variant/30">
              <span className="text-secondary font-bold uppercase">Amount</span>
              <span className="font-bold">${quoteData.coverageAmount?.toUpperCase() || '—'}</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-10">
            <button
              onClick={nextStep}
              className="bg-primary text-on-primary py-4 rounded-2xl font-bold shadow-lg hover:opacity-90 transition-all active:scale-95"
            >
              Continue
            </button>
            <button onClick={prevStep} className="text-secondary py-2 font-bold text-xs hover:text-on-surface transition-colors">Back to Profile</button>
          </div>
        </div>
      </aside>
    </div>
  );

  const renderStep3 = () => (
    <div className="max-w-5xl mx-auto w-full">
      <div className="bg-surface-container-lowest rounded-3xl shadow-2xl overflow-hidden border border-outline-variant/30 backdrop-blur-xl">
        <div className="bg-primary px-12 py-16 text-on-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="font-headline-lg text-4xl mb-4">Final Quote Summary</h2>
            <p className="font-body-lg opacity-90 max-w-2xl">Based on your provided details, we've generated a personalized insurance proposal for you. Please review and secure your coverage below.</p>
          </div>
        </div>

        <div className="p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <section>
                <h3 className="font-headline-md text-2xl flex items-center gap-3 border-b border-outline-variant/30 pb-4 mb-8">
                  <span className="material-symbols-outlined text-primary">person</span>
                  Applicant Information
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                  <div className="space-y-1">
                    <label className="text-secondary text-[10px] uppercase font-bold tracking-widest">Age</label>
                    <p className="font-bold text-on-surface">{quoteData.age} Years</p>
                  </div>
                  <div className="space-y-1">
                    <label className="text-secondary text-[10px] uppercase font-bold tracking-widest">Gender</label>
                    <p className="font-bold text-on-surface capitalize">{quoteData.gender}</p>
                  </div>
                  <div className="space-y-1">
                    <label className="text-secondary text-[10px] uppercase font-bold tracking-widest">Phone</label>
                    <p className="font-bold text-on-surface">{quoteData.phone}</p>
                  </div>
                  <div className="space-y-1">
                    <label className="text-secondary text-[10px] uppercase font-bold tracking-widest">Origin</label>
                    <p className="font-bold text-on-surface">{quoteData.countryOrigin}</p>
                  </div>
                  <div className="space-y-1">
                    <label className="text-secondary text-[10px] uppercase font-bold tracking-widest">Province</label>
                    <p className="font-bold text-on-surface">{quoteData.province}</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="font-headline-md text-2xl flex items-center gap-3 border-b border-outline-variant/30 pb-4 mb-8">
                  <span className="material-symbols-outlined text-primary">monitor_heart</span>
                  Health & Medical Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-1">
                    <label className="text-secondary text-[10px] uppercase font-bold tracking-widest">Health Status</label>
                    <p className="font-bold text-on-surface capitalize">{quoteData.healthStatus}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-secondary text-[10px] uppercase font-bold tracking-widest">Medical Conditions</label>
                  <p className="p-6 bg-surface-container-low rounded-2xl text-sm italic text-secondary min-h-[80px]">
                    {quoteData.medicalConditions || "No specific conditions disclosed."}
                  </p>
                </div>
              </section>

              <section>
                <h3 className="font-headline-md text-2xl flex items-center gap-3 border-b border-outline-variant/30 pb-4 mb-8">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  Included Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: 'Full Hospitalization', icon: 'hotel' },
                    { title: 'Emergency Care', icon: 'emergency' },
                    { title: 'Repatriation Services', icon: 'flight_land' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-center gap-4 p-4 rounded-xl border border-outline-variant/20">
                      <div className="w-8 h-8 rounded-full bg-primary-fixed flex-shrink-0 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-sm">{item.icon}</span>
                      </div>
                      <span className="font-bold text-xs">{item.title}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-8">
              <div className="bg-surface-container-high rounded-3xl p-8 border border-outline-variant/30 shadow-lg">
                <h3 className="font-headline-md text-xl mb-6">Quote Summary</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-end">
                    <span className="text-secondary text-sm">Monthly Premium</span>
                    <span className="font-headline-md text-3xl font-black text-primary">${premium}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-t border-outline-variant/20">
                    <span className="text-secondary text-sm">Coverage Limit</span>
                    <span className="font-bold">${quoteData.coverageAmount?.toUpperCase()}</span>
                  </div>
                </div>
                <button className="w-full bg-primary text-on-primary rounded-2xl py-5 font-bold text-lg shadow-[0_10px_30px_rgba(0,113,227,0.3)] hover:opacity-90 transition-all active:scale-95 flex items-center justify-center gap-3">
                  Confirm & Pay
                  <span className="material-symbols-outlined">payments</span>
                </button>
                <div className="flex items-center justify-center gap-2 mt-4 text-[10px] text-secondary font-bold uppercase tracking-widest">
                  <span className="material-symbols-outlined text-xs">verified_user</span>
                  256-bit Secure Checkout
                </div>
              </div>

              <button onClick={prevStep} className="w-full py-4 rounded-2xl border-2 border-outline-variant text-on-surface font-bold text-sm hover:border-primary hover:text-primary transition-all">
                Edit Details
              </button>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-on-background font-inter antialiased py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {renderProgress()}
        <main className="mt-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
        </main>
      </div>
    </div>
  );
};

export default QuoteFlow;
