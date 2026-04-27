import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuote } from '../hooks/useQuote';
import Input from '../components/Input';
import { ArrowLeft, ArrowRight, ClipboardList, Stethoscope, User } from 'lucide-react';

const QuoteFlow = () => {
  const [step, setStep] = useState(1);
  const { quoteData, updateQuoteData } = useQuote();
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else navigate('/plans');
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    updateQuoteData({ [name]: type === 'checkbox' ? checked : value });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="mb-12">
        <div className="flex justify-between items-center relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -z-10 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-0 h-0.5 bg-primary -z-10 -translate-y-1/2 transition-all duration-500" style={{ width: `${((step - 1) / 2) * 100}%` }}></div>

          {[
            { s: 1, icon: ClipboardList, label: 'Trip' },
            { s: 2, icon: Stethoscope, label: 'Medical' },
            { s: 3, icon: User, label: 'Personal' }
          ].map(({ s, icon: Icon, label }) => (
            <div key={s} className="flex flex-col items-center gap-3">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${s <= step ? 'bg-primary text-white shadow-lg shadow-blue-500/30 scale-110' : 'bg-white text-gray-400 border border-gray-100'}`}>
                <Icon className="h-6 w-6" />
              </div>
              <span className={`text-sm font-bold ${s <= step ? 'text-primary' : 'text-gray-400'}`}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card max-w-2xl mx-auto border-none shadow-2xl shadow-black/5">
        {step === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h2 className="text-4xl font-black text-[#1d1d1f] mb-2">Trip Details</h2>
              <p className="text-[#86868b] font-medium">Tell us about the traveler and the journey.</p>
            </div>
            <div className="space-y-6">
              <Input
                label="Age of Traveler"
                type="number"
                name="age"
                value={quoteData.age}
                onChange={handleChange}
                placeholder="e.g. 65"
              />
              <div className="grid grid-cols-2 gap-4">
                 <Input label="Start Date" type="date" name="startDate" value={quoteData.startDate} onChange={handleChange} />
                 <Input label="End Date" type="date" name="endDate" value={quoteData.endDate} onChange={handleChange} />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h2 className="text-4xl font-black text-[#1d1d1f] mb-2">Health Status</h2>
              <p className="text-[#86868b] font-medium">This helps us provide accurate coverage options.</p>
            </div>
            <div className="p-8 bg-surface-container rounded-3xl border border-black/5 transition-all hover:border-primary/20">
              <label className="flex items-start gap-5 cursor-pointer group">
                <div className="relative flex items-center h-6 mt-1">
                   <input
                    type="checkbox"
                    name="hasPreExisting"
                    checked={quoteData.hasPreExisting}
                    onChange={handleChange}
                    className="w-6 h-6 rounded-lg border-2 border-gray-200 text-primary focus:ring-primary transition-all checked:bg-primary checked:border-primary"
                   />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-bold text-[#1d1d1f] group-hover:text-primary transition-colors">Include Pre-existing Condition Coverage</span>
                  <p className="text-[#86868b] font-medium leading-relaxed">
                    Essential for travelers with stable medical histories. Selecting this will provide comprehensive protection during the stay.
                  </p>
                </div>
              </label>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h2 className="text-4xl font-black text-[#1d1d1f] mb-2">Final Step</h2>
              <p className="text-[#86868b] font-medium">Just a few more details to see your customized plans.</p>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input label="First Name" name="firstName" value={quoteData.firstName} onChange={handleChange} placeholder="John" />
                <Input label="Last Name" name="lastName" value={quoteData.lastName} onChange={handleChange} placeholder="Doe" />
              </div>
              <Input label="Email Address" type="email" name="email" value={quoteData.email} onChange={handleChange} placeholder="john@example.com" />
            </div>
          </div>
        )}

        <div className="flex justify-between mt-16 pt-8 border-t border-gray-50">
          {step > 1 ? (
            <button
              onClick={handleBack}
              className="flex items-center gap-2 font-bold text-[#86868b] hover:text-[#1d1d1f] transition-colors"
            >
              <ArrowLeft className="h-5 w-5" /> Back
            </button>
          ) : <div />}
          <button
            onClick={handleNext}
            className="btn-primary px-10 py-4 shadow-xl shadow-blue-500/20"
            disabled={step === 1 && !quoteData.age}
          >
            {step === 3 ? 'View Quotes' : 'Continue'} <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteFlow;
