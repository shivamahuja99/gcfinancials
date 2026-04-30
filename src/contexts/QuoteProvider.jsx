import { useState } from 'react';
import { QuoteContext } from './QuoteContext';

export const QuoteProvider = ({ children }) => {
  const initialQuoteData = {
    firstName: '',
    lastName: '',
    email: '',
    insuranceType: 'Super Visa Insurance',
    age: '',
    gender: '',
    healthStatus: '',
    phone: '',
    countryOrigin: '',
    province: '',
    coverageAmount: '',
    medicalConditions: '',
  };

  const [quoteData, setQuoteData] = useState(initialQuoteData);

  const updateQuoteData = (newData) => {
    setQuoteData(prev => ({ ...prev, ...newData }));
  };

  const resetQuoteData = () => {
    setQuoteData(initialQuoteData);
  };

  return (
    <QuoteContext.Provider value={{ quoteData, updateQuoteData, resetQuoteData }}>
      {children}
    </QuoteContext.Provider>
  );
};
