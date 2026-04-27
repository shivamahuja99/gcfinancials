import React from 'react';
import { useQuote } from '../hooks/useQuote';
import { getPlans } from '../quotation-logic/quoteEngine';
import { calculateDays, formatCurrency } from '../utils/dateUtils';

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
      <h1 className="text-4xl font-bold text-center mb-16">Recommended Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map(plan => (
          <div key={plan.id} className="card">
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <p className="text-4xl font-black mb-6">{formatCurrency(plan.totalPremium)}</p>
            <button className="btn-primary w-full">Select Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
