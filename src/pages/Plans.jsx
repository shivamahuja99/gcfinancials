import React from 'react';
import { Link } from 'react-router-dom';
import { useQuote } from '../hooks/useQuote';
import { getPlans } from '../quotation-logic/quoteEngine';
import { calculateDays, formatCurrency } from '../utils/dateUtils';
import { Check, Info, ShieldCheck } from 'lucide-react';

const Plans = () => {
  const { quoteData } = useQuote();
  const duration = calculateDays(quoteData.startDate, quoteData.endDate);
  const plans = getPlans({
    age: parseInt(quoteData.age) || 60,
    durationInDays: duration,
    hasPreExisting: quoteData.hasPreExisting
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black text-[#1d1d1f] mb-6 tracking-tight">Customized Plans</h1>
        <p className="text-xl text-[#86868b] font-medium leading-relaxed">
          Showing best available rates for a traveler aged <span className="text-primary font-bold">{quoteData.age || 60}</span> for <span className="text-primary font-bold">{duration} days</span>.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {plans.map(plan => (
          <div key={plan.id} className={`card group flex flex-col border-none shadow-2xl shadow-black/5 transition-all duration-500 hover:-translate-y-3 ${plan.popular ? 'ring-4 ring-primary ring-offset-4 relative' : ''}`}>
            {plan.popular && (
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-black px-5 py-2 rounded-full uppercase tracking-widest shadow-xl">
                Recommended
              </div>
            )}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span className="text-xs font-black text-primary uppercase tracking-widest">{plan.provider}</span>
              </div>
              <h3 className="text-3xl font-black text-[#1d1d1f] mb-6">{plan.name}</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-[#1d1d1f]">{formatCurrency(plan.totalPremium)}</span>
                <span className="text-[#86868b] font-bold">total</span>
              </div>
              <p className="text-[#86868b] font-medium mt-2">{formatCurrency(plan.dailyPremium)} / day</p>
            </div>

            <div className="space-y-5 mb-12 flex-grow">
              {['Emergency Medical', 'Repatriation', 'Hospitalization'].map((feature, i) => (
                <div key={i} className="flex items-center gap-4 group/item">
                  <div className="bg-green-50 text-green-500 p-1.5 rounded-lg group-hover/item:bg-green-500 group-hover/item:text-white transition-colors">
                    <Check className="h-4 w-4 stroke-[3px]" />
                  </div>
                  <span className="text-lg font-semibold text-[#1d1d1f]/80">{feature}</span>
                </div>
              ))}
            </div>

            <button className={`w-full py-5 rounded-2xl font-black text-lg transition-all duration-300 ${plan.popular ? 'bg-primary text-white shadow-xl shadow-blue-500/30 hover:scale-[1.02]' : 'bg-gray-50 text-[#1d1d1f] hover:bg-gray-100'}`}>
              Select Plan
            </button>
            <div className="mt-6 flex items-center justify-center gap-2 text-[#86868b] hover:text-primary transition-colors cursor-pointer group/link">
              <Info className="h-4 w-4" />
              <span className="text-sm font-bold uppercase tracking-widest">Policy Details</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 p-12 bg-white rounded-[3rem] shadow-2xl shadow-black/5 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-xl">
          <h4 className="text-3xl font-black text-[#1d1d1f] mb-4">Need to adjust?</h4>
          <p className="text-lg text-[#86868b] font-medium leading-relaxed">Modify your traveler details or dates to see updated pricing and options instantly.</p>
        </div>
        <Link to="/quote" className="btn-secondary px-10 py-5 rounded-2xl min-w-[200px]">
          Edit Details
        </Link>
      </div>
    </div>
  );
};

export default Plans;
