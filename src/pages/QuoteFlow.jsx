import { useState, useEffect } from 'react';
import { useQuote } from '../contexts/QuoteContext';


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
      if (!quoteData.firstName) newErrors.firstName = "First name is required.";
      if (!quoteData.lastName) newErrors.lastName = "Last name is required.";
      if (!quoteData.email) newErrors.email = "Email is required.";
      else if (!/\S+@\S+\.\S+/.test(quoteData.email)) newErrors.email = "Invalid email format.";
    }

    if (currentStep === 2) {
      if (!quoteData.age) newErrors.age = "Age is required.";
      else if (parseInt(quoteData.age) < 0 || parseInt(quoteData.age) > 120) newErrors.age = "Valid age (0-120) required.";

      if (!quoteData.gender) newErrors.gender = "Gender selection required.";
      if (!quoteData.phone) newErrors.phone = "Phone number required.";
      if (!quoteData.countryOrigin) newErrors.countryOrigin = "Country of origin required.";
      if (!quoteData.province) newErrors.province = "Province is required.";
    }

    if (currentStep === 3) {
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

  const steps = ['Intro', 'Identity', 'Coverage', 'Review'];

  const handleSubmit = async () => {
    // Prepare form data for Netlify Forms
    const formData = new FormData();
    formData.append('form-name', 'quote-request');
    Object.keys(quoteData).forEach(key => {
      formData.append(key, quoteData[key]);
    });


    try {
      // Simulate sending or use Netlify Forms if deployed
      console.log("Submitting form data:", Object.fromEntries(formData));

      // Netlify Forms AJAX submission
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      alert("Thank you! Your quote request has been submitted. We will contact you at " + quoteData.email + " shortly.");
      resetQuoteData();
      setStep(1);
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting your request. Please try again.");
    }
  };

  const renderProgress = () => {
    if (step === 1) return null; // Don't show progress bar on the intro/hero step

    return (
      <div className="w-full max-w-4xl mx-auto mb-12 px-6">
        <div className="flex justify-between items-end mb-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="bg-primary text-on-primary text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">Step {step - 1} of {steps.length - 1}</span>
              <span className="h-[1px] w-8 bg-outline-variant"></span>
              <span className="text-primary font-bold text-xs">{Math.round(((step - 1) / (steps.length - 1)) * 100)}% Complete</span>
            </div>
            <h1 className="font-headline-lg text-4xl text-on-surface tracking-tight">
              {step === 2 && "Personal Identity"}
              {step === 3 && "Health & Coverage"}
              {step === 4 && "Review Your Quote"}
            </h1>
            <p className="text-secondary font-body-md">
              {step === 2 && "Start with your basic details to build your profile."}
              {step === 3 && "Tell us about your health and desired coverage level."}
              {step === 4 && "Verify your information and secure your plan."}
            </p>
          </div>
        </div>
        <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden shadow-inner">
          <div
            className="bg-primary h-full rounded-full transition-all duration-1000 ease-in-out shadow-[0_0_10px_rgba(0,113,227,0.5)]"
            style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>
    );
  };

  const renderStep1 = () => (
    <div className="max-w-container-max mx-auto px- gutter pt-10 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image Side */}
        <div className="order-2 lg:order-1 relative rounded-[2rem] overflow-hidden shadow-ambient aspect-[4/5] lg:aspect-auto h-full min-h-[500px]">
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
          <h1 className="font-display-xl text-display-xl text-on-surface mb-6 leading-tight">Secure Your Tomorrow, Today.</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">Get a personalized insurance quote in minutes. Transparent pricing, premium coverage.</p>

          <div className="bg-surface-container-lowest rounded-3xl p-10 shadow-2xl border border-outline-variant/30 backdrop-blur-sm">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-8">Get a Quote</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface-variant block ml-1">First Name</label>
                  <input
                    className={`w-full bg-surface border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md text-body-md ${errors.firstName ? 'border-error' : 'border-outline-variant'}`}
                    placeholder="Jane"
                    type="text"
                    value={quoteData.firstName}
                    onChange={(e) => updateQuoteData({ firstName: e.target.value })}
                  />
                  {errors.firstName && <p className="text-error text-[10px] ml-1">{errors.firstName}</p>}
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface-variant block ml-1">Last Name</label>
                  <input
                    className={`w-full bg-surface border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md text-body-md ${errors.lastName ? 'border-error' : 'border-outline-variant'}`}
                    placeholder="Doe"
                    type="text"
                    value={quoteData.lastName}
                    onChange={(e) => updateQuoteData({ lastName: e.target.value })}
                  />
                  {errors.lastName && <p className="text-error text-[10px] ml-1">{errors.lastName}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant block ml-1">Email Address</label>
                <input
                  className={`w-full bg-surface border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md text-body-md ${errors.email ? 'border-error' : 'border-outline-variant'}`}
                  placeholder="jane.doe@example.com"
                  type="email"
                  value={quoteData.email}
                  onChange={(e) => updateQuoteData({ email: e.target.value })}
                />
                {errors.email && <p className="text-error text-[10px] ml-1">{errors.email}</p>}
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant block ml-1">Insurance Type</label>
                <div className="relative">
                  <select
                    className="w-full bg-surface border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md text-body-md appearance-none"
                    value={quoteData.insuranceType}
                    onChange={(e) => updateQuoteData({ insuranceType: e.target.value })}
                  >
                    <option>Super Visa Insurance</option>
                    <option>Visitor Insurance</option>
                    <option>Medical Insurance</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                    <span className="material-symbols-outlined text-outline">expand_more</span>
                  </div>
                </div>
              </div>
              <button
                onClick={nextStep}
                className="w-full bg-primary text-on-primary font-label-md text-label-md py-5 rounded-2xl hover:opacity-90 transition-all shadow-lg mt-4 active:scale-[0.98]"
                type="button"
              >
                Calculate Premium
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="max-w-4xl mx-auto w-full px-6">
      <div className="bg-surface-container-lowest rounded-3xl shadow-xl p-10 border border-outline-variant/30 backdrop-blur-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column: Personal Info */}
          <div className="space-y-6">
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
                    <p className="text-xs text-secondary mt-1 leading-relaxed">Your data is encrypted and used only for providing an accurate insurance quote.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-12">
        <button onClick={prevStep} className="text-secondary py-2 font-bold text-sm hover:text-on-surface transition-colors flex items-center gap-2">
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Back
        </button>
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

  const renderStep3 = () => (
    <div className="max-w-4xl mx-auto w-full px-6">
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

          {/* <section>
            <div className="flex flex-col gap-3 mt-10">
              <button
                onClick={nextStep}
                className="bg-primary text-on-primary py-4 rounded-2xl font-bold shadow-lg hover:opacity-90 transition-all active:scale-95"
              >
                Continue
              </button>
              <button onClick={prevStep} className="text-secondary py-2 font-bold text-xs hover:text-on-surface transition-colors">Back to Profile</button>
            </div>
          </section> */}
        </div>
      </div>
      <div className="flex justify-between mt-12">
        <button onClick={prevStep} className="text-secondary py-2 font-bold text-sm hover:text-on-surface transition-colors flex items-center gap-2">
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Back
        </button>
        <button
          onClick={nextStep}
          className="bg-primary text-on-primary font-label-md text-label-md px-10 py-4 rounded-2xl hover:opacity-90 transition-all shadow-lg active:scale-95 flex items-center gap-3"
        >
          Get your Quotation
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </button>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="max-w-5xl mx-auto w-full px-6">
      <div className="bg-surface-container-lowest rounded-3xl shadow-2xl overflow-hidden border border-outline-variant/30 backdrop-blur-xl">
        <div className="bg-primary px-12 py-16 text-on-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="font-headline-lg text-4xl mb-4">Final Quote Summary</h2>
            <p className="font-body-lg opacity-90 max-w-2xl">Based on your provided details, we've generated a personalized insurance proposal for you. Please review and secure your coverage below.</p>
          </div>
        </div>

        <div className="p-12">
          <div className="space-y-12">
            <section>
              <h3 className="font-headline-md text-2xl flex items-center gap-3 border-b border-outline-variant/30 pb-4 mb-8">
                <span className="material-symbols-outlined text-primary">person</span>
                Applicant Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div className="space-y-1">
                  <label className="text-secondary text-[10px] uppercase font-bold tracking-widest">Name</label>
                  <p className="font-bold text-on-surface">{quoteData.firstName} {quoteData.lastName}</p>
                </div>
                <div className="space-y-1">
                  <label className="text-secondary text-[10px] uppercase font-bold tracking-widest">Email</label>
                  <p className="font-bold text-on-surface">{quoteData.email}</p>
                </div>
                <div className="space-y-1">
                  <label className="text-secondary text-[10px] uppercase font-bold tracking-widest">Insurance Type</label>
                  <p className="font-bold text-on-surface">{quoteData.insuranceType}</p>
                </div>
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <section>
                <h3 className="font-headline-md text-2xl flex items-center gap-3 border-b border-outline-variant/30 pb-4 mb-8">
                  <span className="material-symbols-outlined text-primary">monitor_heart</span>
                  Health & Medical Details
                </h3>
                <div className="space-y-6">
                  <div className="space-y-1">
                    <label className="text-secondary text-[10px] uppercase font-bold tracking-widest">Health Status</label>
                    <p className="font-bold text-on-surface capitalize">{quoteData.healthStatus}</p>
                  </div>
                  <div className="space-y-1">
                    <label className="text-secondary text-[10px] uppercase font-bold tracking-widest">Medical Conditions</label>
                    <p className="p-6 bg-surface-container-low rounded-2xl text-sm italic text-secondary min-h-[80px]">
                      {quoteData.medicalConditions || "No specific conditions disclosed."}
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="font-headline-md text-2xl flex items-center gap-3 border-b border-outline-variant/30 pb-4 mb-8">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  Included Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Full Hospitalization', icon: 'hotel' },
                    { title: 'Emergency Care', icon: 'emergency' },
                    { title: 'Repatriation Services', icon: 'flight_land' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-center gap-3 p-4 rounded-xl border border-outline-variant/20">
                      <div className="w-8 h-8 rounded-full bg-primary-fixed flex-shrink-0 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-sm">{item.icon}</span>
                      </div>
                      <span className="font-bold text-xs">{item.title}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Action Footer - Bottom Right */}
          <div className="mt-16 pt-10 border-t border-outline-variant/30 flex flex-col md:flex-row items-center justify-end gap-8">


            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              <button
                onClick={prevStep}
                className="order-2 sm:order-1 w-full sm:w-auto px-8 py-4 rounded-2xl border-2 border-outline-variant text-on-surface font-bold text-sm hover:border-primary hover:text-primary transition-all"
              >
                Edit Details
              </button>
              <button
                onClick={handleSubmit}
                className="order-1 sm:order-2 w-full sm:w-auto bg-primary text-on-primary rounded-2xl px-12 py-4 font-bold text-lg shadow-[0_10px_30px_rgba(0,113,227,0.3)] hover:opacity-90 transition-all active:scale-95 flex items-center justify-center gap-3"
              >
                Submit Application
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>

          {/* Hidden form for Netlify Forms bot discovery */}
          <form name="quote-request" data-netlify="true" netlify-honeypot="bot-field" hidden>
            <input type="text" name="firstName" />
            <input type="text" name="lastName" />
            <input type="email" name="email" />
            <input type="text" name="insuranceType" />
            <input type="text" name="age" />
            <input type="text" name="gender" />
            <input type="text" name="phone" />
            <input type="text" name="countryOrigin" />
            <input type="text" name="province" />
            <input type="text" name="healthStatus" />
            <textarea name="medicalConditions"></textarea>
            <input type="text" name="coverageAmount" />

          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen bg-background text-on-background font-inter antialiased ${step === 1 ? '' : 'py-20 px-6'}`}>
      <div className="max-w-7xl mx-auto">
        {renderProgress()}
        <main className={`${step === 1 ? '' : 'mt-16'} animate-in fade-in slide-in-from-bottom-8 duration-700`}>
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
          {step === 4 && renderStep4()}
        </main>
      </div>
    </div>
  );
};

export default QuoteFlow;
