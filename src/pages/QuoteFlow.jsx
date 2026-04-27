import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuote } from '../hooks/useQuote';
import Input from '../components/Input';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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
    <div className="max-w-2xl mx-auto px-4 py-20">
      <div className="card">
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-8">Tell us about the trip</h2>
            <Input label="Age" type="number" name="age" value={quoteData.age} onChange={handleChange} />
          </div>
        )}
        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-8">Medical History</h2>
            <label className="flex items-center space-x-3">
              <input type="checkbox" name="hasPreExisting" checked={quoteData.hasPreExisting} onChange={handleChange} />
              <span>Include Pre-existing Condition Coverage</span>
            </label>
          </div>
        )}
        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-8">Personal Details</h2>
            <Input label="First Name" name="firstName" value={quoteData.firstName} onChange={handleChange} />
          </div>
        )}
        <div className="flex justify-between mt-12">
          {step > 1 && <button onClick={handleBack} className="font-bold px-4 py-2">Back</button>}
          <button onClick={handleNext} className="btn-primary">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default QuoteFlow;
